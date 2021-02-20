package com.github.petdate.petdateapp.service;

import java.util.Arrays;
import java.util.List;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import reactor.core.publisher.Mono;

@Service
public class DogSearchService {

    @Value("${app.rescueApiKey}")
    private String apiKey;

    @Value("${app.rescueBaseUrl}")
    private String baseUrl;

    private WebClient webClient = WebClient.builder()
            .build();

    public Mono<String> randomDogs() {
        return webClient
                .post()
                .uri("https://api.rescuegroups.org/v5/public/animals/search/available/dogs/haspic?sort=random")
                .header(HttpHeaders.AUTHORIZATION, apiKey)
                .contentType(MediaType.APPLICATION_JSON)
                .bodyValue(DogSearchBody.of(Filter.AFTER_2021))
                .retrieve()
                .bodyToMono(String.class);
    };

    public Mono<String> dogsNear(int zipcode, int miles) {
        return webClient
                .post()
                .uri("https://api.rescuegroups.org/v5/public/animals/search/available/dogs/haspic?sort=random")
                .header(HttpHeaders.AUTHORIZATION, apiKey)
                .contentType(MediaType.APPLICATION_JSON)
                .bodyValue(DogSearchBody.of(new FilterRadius(zipcode, miles), Filter.AFTER_2021))
                .retrieve()
                .bodyToMono(String.class);
    }

    @Data
    public static class DogSearchBody {
        private DogSearchBodyData data;

        public static DogSearchBody of(Filter... filter) {
            DogSearchBody body = new DogSearchBody();
            body.data = new DogSearchBodyData(Arrays.asList(filter), null);

            return body;
        }

        public static DogSearchBody of(FilterRadius radius, Filter... filter) {
            DogSearchBody body = new DogSearchBody();
            body.data = new DogSearchBodyData(Arrays.asList(filter), radius);

            return body;
        }
    }

    @Data
    @Builder
    public static class DogSearchBodyData {
        private List<Filter> filters;
        private FilterRadius filterRadius;
    }

    @Data
    @Builder
    public static class Filter {
        private String fieldName;
        private String operation;
        private String criteria;

        public static Filter AFTER_2021 = Filter.builder().fieldName("animals.updatedDate")
                .operation("greaterthan").criteria("2021-01-01T00:00:00Z").build();
    }

    @Data
    @Builder
    @AllArgsConstructor
    public static class FilterRadius {
        private int postalcode;
        private int miles;
    }

}

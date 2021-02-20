package com.github.petdate.petdateapp.controller.dogs;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.github.petdate.petdateapp.jwt.JwtUserPrincipal;
import com.github.petdate.petdateapp.service.DogSearchService;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/api")
public class DogController {
    
    @Autowired
    private DogSearchService dogService;
    
    @GetMapping("/public/dogs/feed")
    public Mono<String> getFeed() {
        return dogService.randomDogs();
    }
    
    @GetMapping("/dogs/near")
    public Mono<String> getFeed(@RequestParam int zipcode, @RequestParam int miles, @AuthenticationPrincipal JwtUserPrincipal _user) {
        return dogService.dogsNear(zipcode, miles);
    }
    
}

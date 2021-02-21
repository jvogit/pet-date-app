package com.github.petdate.petdateapp.controller.dogs;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.github.petdate.petdateapp.jwt.JwtUserPrincipal;
import com.github.petdate.petdateapp.service.AnimalSearchService;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/api")
public class AnimalsController {
    
    @Autowired
    private AnimalSearchService animalService;
    
    @GetMapping("/public/animals/feed")
    public Mono<String> getFeed() {
        return animalService.randomAnimals();
    }
    
    @GetMapping("/{animal}/near")
    public Mono<String> getFeed(@PathVariable String animal, @RequestParam int zipcode, @RequestParam int miles, @AuthenticationPrincipal JwtUserPrincipal _user) {
        return animalService.near(animal, zipcode, miles);
    }
    
}

package com.github.petdate.petdateapp.controller.pet;

import java.io.IOException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import com.github.petdate.petdateapp.jwt.JwtUserPrincipal;
import com.github.petdate.petdateapp.payload.PetCreateMetadata;
import com.github.petdate.petdateapp.response.ApiResponse;
import com.github.petdate.petdateapp.response.pet.PetResponse;
import com.github.petdate.petdateapp.service.PetService;

@RestController
@RequestMapping("/api/pet")
public class PetController {

    @Autowired
    private PetService petService;

    @GetMapping(value = "/{id}")
    public @ResponseBody ApiResponse get(@AuthenticationPrincipal JwtUserPrincipal user,
            @PathVariable(value = "id") Long id) {
        return new PetResponse(petService.findById(id).get());
    }

    @RequestMapping(value = "/create", method = RequestMethod.POST,
            consumes = {"multipart/form-data"})
    public @ResponseBody ApiResponse create(
            @AuthenticationPrincipal JwtUserPrincipal user,
            @RequestPart(value = "meta") PetCreateMetadata data,
            @RequestPart(value = "image") MultipartFile file) throws IOException {
        return new PetResponse(petService.createPet(user.getId(), data,  file));
    }

}

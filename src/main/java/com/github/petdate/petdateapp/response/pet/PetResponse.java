package com.github.petdate.petdateapp.response.pet;

import com.fasterxml.jackson.annotation.JsonUnwrapped;
import com.github.petdate.petdateapp.entity.pet.Pet;
import com.github.petdate.petdateapp.response.ApiSuccess;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class PetResponse extends ApiSuccess {
    @JsonUnwrapped
    private final Pet pet;
}

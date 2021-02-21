package com.github.petdate.petdateapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.github.petdate.petdateapp.entity.pet.Pet;

@Repository
public interface PetRepository extends JpaRepository<Pet, Long> {
    
}

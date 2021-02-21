package com.github.petdate.petdateapp.repository;

import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.github.petdate.petdateapp.entity.pet.Pet;

@Repository
public interface PetRepository extends JpaRepository<Pet, Long> {
    public List<Pet> findAllByuserId(Long user_id);
    public Page<Pet> findAllByuserIdNot(Long user_id, Pageable page);
}

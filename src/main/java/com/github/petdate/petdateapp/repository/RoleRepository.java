package com.github.petdate.petdateapp.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.github.petdate.petdateapp.entity.role.Role;
import com.github.petdate.petdateapp.entity.role.RoleName;

@Repository
public interface RoleRepository extends CrudRepository<Role, Long> {
    public Optional<Role> findByName(RoleName roleName);
}

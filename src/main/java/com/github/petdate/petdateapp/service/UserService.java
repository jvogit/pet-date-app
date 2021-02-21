package com.github.petdate.petdateapp.service;

import java.util.Collections;
import java.util.Optional;
import javax.transaction.Transactional;
import javax.validation.constraints.Email;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.github.petdate.petdateapp.entity.account.User;
import com.github.petdate.petdateapp.entity.role.RoleName;
import com.github.petdate.petdateapp.exception.BadRequestException;
import com.github.petdate.petdateapp.jwt.JwtTokenProvider;
import com.github.petdate.petdateapp.payload.LoginPayload;
import com.github.petdate.petdateapp.payload.SignupPayload;
import com.github.petdate.petdateapp.repository.RoleRepository;
import com.github.petdate.petdateapp.repository.UserRepository;
import com.github.petdate.petdateapp.response.account.LoginResponse;

@Service
@Transactional
public class UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private AuthenticationManager authManager;
    @Autowired
    private PasswordEncoder pwdEncoder;
    @Autowired
    private JwtTokenProvider jwtTokenProvider;
    
    public Optional<User> findUserById(Long id) {
        return userRepository.findById(id);
    }

    public User createUser(SignupPayload payload) {
        User user = new User(payload.getUsername(), payload.getEmail(),
                pwdEncoder.encode(payload.getPassword()));
        user.setRoles(Collections.singleton(
                roleRepository.findByName(RoleName.ROLE_USER).get()));

        if (exists(user))
            throw new BadRequestException("User already exists!");

        return userRepository.save(user);
    }

    public LoginResponse authenticate(LoginPayload request) {
        Authentication auth = authManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getUsername(),
                        request.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(auth);

        return new LoginResponse(auth.getPrincipal(),
                jwtTokenProvider.generateToken(auth));
    }

    public boolean exists(User user) {
        return existsByUsername(user.getUsername())
                || existsByEmail(user.getEmail());
    }

    public boolean existsByUsername(String name) {
        return userRepository.existsByUsername(name);
    }

    public boolean existsByEmail(@Email String email) {
        return userRepository.existsByEmail(email);
    }

}

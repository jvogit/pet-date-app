package com.github.petdate.petdateapp.controller.account;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.github.petdate.petdateapp.jwt.JwtUserPrincipal;
import com.github.petdate.petdateapp.payload.LoginPayload;
import com.github.petdate.petdateapp.payload.SignupPayload;
import com.github.petdate.petdateapp.response.ApiResponse;
import com.github.petdate.petdateapp.response.ApiSuccess;
import com.github.petdate.petdateapp.service.UserService;

@RestController
@RequestMapping("/api/account")
public class AccountController {
    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    public ApiResponse signup(@Valid @RequestBody SignupPayload payload) {
        userService.createUser(payload);

        return new ApiSuccess();
    }

    @PostMapping("/login")
    public ApiResponse login(@Valid @RequestBody LoginPayload payload) {
        return userService.authenticate(payload);
    }

    @GetMapping("/me")
    public ApiResponse me(@AuthenticationPrincipal JwtUserPrincipal _user) {
        return new ApiSuccess() {
            @JsonProperty
            private Object user = _user;
        };
    }

}

package com.github.petdate.petdateapp.payload;

import lombok.Data;

@Data
public class SignupPayload {
    private String username;
    private String email;
    private String password;
}

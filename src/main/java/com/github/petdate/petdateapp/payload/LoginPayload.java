package com.github.petdate.petdateapp.payload;

import lombok.Data;

@Data
public class LoginPayload {
    private final String username;
    private final String password;
}

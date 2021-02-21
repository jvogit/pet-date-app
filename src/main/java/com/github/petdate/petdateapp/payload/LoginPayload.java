package com.github.petdate.petdateapp.payload;

import lombok.Data;

@Data
public class LoginPayload {
    private String username;
    private String password;
}

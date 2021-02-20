package com.github.petdate.petdateapp.response.account;

import com.github.petdate.petdateapp.response.ApiSuccess;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class LoginResponse extends ApiSuccess {
    private final Object user;
    private final String token;
}

package com.github.petdate.petdateapp.exception;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class BadRequestException extends RuntimeException {
    
    public BadRequestException(String message) {
        super(message);
    }
    
    public static BadRequestException badRequest() {
        return new BadRequestException("Bad request");
    }
    
}

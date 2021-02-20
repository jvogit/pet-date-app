package com.github.petdate.petdateapp.response;

import org.springframework.http.HttpStatus;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class ApiSuccess extends ApiResponse {
    
    public ApiSuccess() {
        super(HttpStatus.OK, "success");
    }
    
}

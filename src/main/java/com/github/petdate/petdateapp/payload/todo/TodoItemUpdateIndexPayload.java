package com.github.petdate.petdateapp.payload.todo;

import javax.validation.constraints.NotNull;

import lombok.Data;

@Data
public class TodoItemUpdateIndexPayload {
    @NotNull
    private Integer index;
}

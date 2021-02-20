package com.github.petdate.petdateapp.payload.todo;

import javax.validation.constraints.NotNull;

import lombok.Data;

@Data
public class TodoItemUpdatePayload {
    @NotNull
    private final String text;
    @NotNull
    private final Boolean completed;
}

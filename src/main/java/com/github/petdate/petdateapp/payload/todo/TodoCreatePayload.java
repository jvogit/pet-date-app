package com.github.petdate.petdateapp.payload.todo;

import java.time.LocalDate;
import java.util.List;

import lombok.Data;

@Data
public class TodoCreatePayload {
    private final LocalDate date;
    private final List<TodoItemCreatePayload> items;
}

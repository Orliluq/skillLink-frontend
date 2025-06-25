package com.skilllink.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder; // <<-- Asegúrate de que este import esté
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder // <<-- Asegúrate de que esta anotación esté aquí
@NoArgsConstructor
@AllArgsConstructor
public class AuthResponse {
    private String token;
    private String message;
}
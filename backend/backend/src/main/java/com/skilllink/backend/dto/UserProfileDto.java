package com.skilllink.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserProfileDto {
    private Long id; // El ID del usuario
    private String firstName;
    private String lastName;
    private String email;
    private String bio;
    // Podrías añadir listas para habilidades, experiencia, etc., más adelante
    // private List<String> skills;
    // private List<ExperienceDto> experience;
}
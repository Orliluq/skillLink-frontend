package com.skilllink.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails; // Importa UserDetails

import java.util.Collection;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "users")
public class User implements UserDetails { // Implementa UserDetails

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String firstName;

    @Column(nullable = false)
    private String lastName;

    private String bio;

    // --- Métodos de la interfaz UserDetails ---

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        // Por ahora, todos los usuarios tendrán el rol "USER".
        // En un futuro, podrías tener roles como "ADMIN", "MENTOR", etc.
        return List.of(new SimpleGrantedAuthority("ROLE_USER"));
    }

    @Override
    public String getUsername() {
        // El email será nuestro "nombre de usuario" para Spring Security
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true; // Asumimos que la cuenta nunca expira para el MVP
    }

    @Override
    public boolean isAccountNonLocked() {
        return true; // Asumimos que la cuenta nunca está bloqueada para el MVP
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true; // Asumimos que las credenciales nunca expiran para el MVP
    }

    @Override
    public boolean isEnabled() {
        return true; // Asumimos que la cuenta siempre está habilitada para el MVP
    }
    // --- Fin de métodos de UserDetails ---
}
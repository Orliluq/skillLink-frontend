package com.skilllink.backend.service;

import com.skilllink.backend.dto.AuthResponse;
import com.skilllink.backend.dto.LoginRequest;
import com.skilllink.backend.dto.RegisterRequest;
import com.skilllink.backend.model.User;
import com.skilllink.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager; // Lo inyectaremos después de configurarlo

    public AuthResponse register(RegisterRequest request) {
        if (userRepository.existsByEmail(request.getEmail())) {
            // Manejar caso donde el email ya existe
            // Podrías lanzar una excepción personalizada o devolver un mensaje de error
            throw new IllegalStateException("El email ya está registrado.");
        }

        var user = User.builder()
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword())) // Cifra la contraseña
                .build();
        userRepository.save(user); // Guarda el nuevo usuario en la base de datos

        var jwtToken = jwtService.generateToken(user); // Genera un token JWT para el nuevo usuario
        return AuthResponse.builder()
                .token(jwtToken)
                .message("Registro exitoso.")
                .build();
    }

    public AuthResponse login(LoginRequest request) {
        try {
            // Intenta autenticar al usuario usando el AuthenticationManager
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.getEmail(),
                            request.getPassword()
                    )
            );
            // Si la autenticación es exitosa, carga los detalles del usuario y genera un token
            var user = userRepository.findByEmail(request.getEmail())
                    .orElseThrow(() -> new IllegalStateException("Usuario no encontrado después de autenticación exitosa."));

            var jwtToken = jwtService.generateToken(user);
            return AuthResponse.builder()
                    .token(jwtToken)
                    .message("Inicio de sesión exitoso.")
                    .build();
        } catch (AuthenticationException e) {
            // Maneja fallos de autenticación (ej. contraseña incorrecta)
            throw new IllegalStateException("Credenciales inválidas.");
        }
    }
}
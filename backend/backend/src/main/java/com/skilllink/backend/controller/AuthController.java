package com.skilllink.backend.controller;

import com.skilllink.backend.dto.AuthResponse;
import com.skilllink.backend.dto.LoginRequest;
import com.skilllink.backend.dto.RegisterRequest;
import com.skilllink.backend.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController // Marca esta clase como un controlador REST
@RequestMapping("/api/auth") // Define el prefijo de la URL para todos los endpoints en este controlador
@RequiredArgsConstructor // Genera un constructor con los campos 'final' para inyección de dependencias
public class AuthController {

    private final AuthService authService;

    // Endpoint para registrar un nuevo usuario
    @PostMapping("/register") // Mapea las solicitudes POST a /api/auth/register
    public ResponseEntity<AuthResponse> register(
            @RequestBody RegisterRequest request // El cuerpo de la solicitud se mapea al objeto RegisterRequest
    ) {
        try {
            AuthResponse response = authService.register(request);
            return ResponseEntity.ok(response); // Devuelve 200 OK con el token
        } catch (IllegalStateException e) {
            // Manejar errores de registro (ej. email ya existe)
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(AuthResponse.builder().message(e.getMessage()).build());
        } catch (Exception e) {
            // Manejar otros errores inesperados
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(AuthResponse.builder().message("Error interno del servidor durante el registro.").build());
        }
    }

    // Endpoint para iniciar sesión
    @PostMapping("/login") // Mapea las solicitudes POST a /api/auth/login
    public ResponseEntity<AuthResponse> login(
            @RequestBody LoginRequest request // El cuerpo de la solicitud se mapea al objeto LoginRequest
    ) {
        try {
            AuthResponse response = authService.login(request);
            return ResponseEntity.ok(response); // Devuelve 200 OK con el token
        } catch (IllegalStateException e) {
            // Manejar errores de login (ej. credenciales inválidas)
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(AuthResponse.builder().message(e.getMessage()).build());
        } catch (Exception e) {
            // Manejar otros errores inesperados
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(AuthResponse.builder().message("Error interno del servidor durante el inicio de sesión.").build());
        }
    }
}
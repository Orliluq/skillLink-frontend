package com.skilllink.backend.repository;

import com.skilllink.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository // Indica que esta interfaz es un componente de Spring para acceso a datos
public interface UserRepository extends JpaRepository<User, Long> {
    // JpaRepository<Entity, IdType> proporciona métodos CRUD básicos

    // Método personalizado para encontrar un usuario por su email
    // Spring Data JPA puede crear automáticamente la implementación para este método
    Optional<User> findByEmail(String email);

    // Método para verificar si un email ya existe
    boolean existsByEmail(String email);
}
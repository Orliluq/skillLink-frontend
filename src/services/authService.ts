import apiClient from './api';
import type { UserDTO, UserRegistrationRequest, AuthRequest, /* AuthResponse */ } from '../types/index'; // Corregida la ruta y añadido 'type'

// Define tus tipos DTO en el frontend (pueden ser interfaces o types)
// Ejemplo: src/dto/user.dto.ts
/*
export interface UserRegistrationRequest {
    username?: string; // Hazlos opcionales si quieres o usa Partial<T>
    email?: string;
    password?: string;
    firstName?: string;
    lastName?: string;
}
export interface AuthRequest { usernameOrEmail?: string; password?: string; }
export interface UserDTO { id?: number; username?: string; email?: string; /* ...otros campos... */
export interface AuthResponse { accessToken?: string; tokenType?: string; user?: UserDTO; }


export const register = async (userData: UserRegistrationRequest): Promise<UserDTO> => {
    const response = await apiClient.post<UserDTO>('/auth/register', userData);
    return response.data;
};

// Si usas JWTs generados por tu backend Spring Boot
export const login = async (credentials: AuthRequest): Promise<AuthResponse> => {
    const response = await apiClient.post<AuthResponse>('/auth/login', credentials);
    if (response.data.accessToken) {
        localStorage.setItem('authToken', response.data.accessToken);
        if (response.data.user) {
            localStorage.setItem('user', JSON.stringify(response.data.user));
        }
    }
    return response.data;
};

export const logout = (): void => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    // Idealmente, llamar a un endpoint de logout del backend si invalida tokens del lado del servidor
};

export const getCurrentUserFromStorage = (): UserDTO | null => {
    const userStr = localStorage.getItem('user');
    if (!userStr) return null;
    try {
        return JSON.parse(userStr) as UserDTO;
    } catch (e) {
        console.error("Failed to parse user from localStorage", e);
        return null;
    }
};

export const getToken = (): string | null => {
    return localStorage.getItem('authToken');
};
import type { UserSkillDTO } from "./skill.types"; // Asumiendo que UserSkillDTO está en skill.types.ts
import type { ExperienceDTO } from "./experience.types"; // Asumiendo que ExperienceDTO está en experience.types.ts
import type { ProjectDTO } from ".";

// --- Enums (si los necesitas referenciar explícitamente en el frontend) ---
// Normalmente, los enums del backend se representan como strings en el frontend.
// No necesitas replicar los enums Java a menos que quieras usarlos para validación
// o para mostrar opciones en dropdowns de forma type-safe.

// --- DTOs de Respuesta ---
export interface UserDTO {
  id: number; // BIGINT se mapea a number
  username: string;
  email: string;
  firstName?: string;
  lastName?: string;
  avatarUrl?: string;
  projects?: ProjectDTO[];
  bio?: string;
  totalPoints: number; // INT se mapea a number
  createdAt: string; // OffsetDateTime se mapea a string (formato ISO)
  skills?: UserSkillDTO[]; // Lista de habilidades del usuario
  experiences?: ExperienceDTO[]; // Lista de experiencias del usuario
  // Otros campos que el backend UserDTO podría devolver
}

export interface UserSummaryDTO {
  id: number;
  username: string;
  email: string;
  avatarUrl?: string;
  firstName?: string;
  lastName?: string;
}

// --- DTOs de Solicitud (Request) ---
export interface UserRegistrationRequest {
  username?: string; // Usa '?' si son opcionales o Partial<T>
  email?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
}

export interface UserProfileUpdateRequest {
  firstName?: string;
  lastName?: string;
  bio?: string;
  // avatarUrl se manejaría por un endpoint de subida de archivos
}

export interface AuthRequest {
  usernameOrEmail?: string;
  password?: string;
}

export interface AuthResponse {
  accessToken?: string;
  tokenType?: string; // Generalmente "Bearer"
  user?: UserDTO; // El DTO del usuario autenticado
}

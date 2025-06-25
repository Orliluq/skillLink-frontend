// src/services/userService.ts
import apiClient from './api';
import type { 
    UserDTO, 
    UserProfileUpdateRequest, 
    UserSkillDTO, 
    AddUserSkillRequest, 
    ExperienceDTO, 
    ExperienceRequest 
} from '../types/index';
// Importa Page y Pageable si los usas para getAllUsers
// import type { Page } from '../types/index';
// import type { PageableParams } from './api'; // Si defines un tipo para params de pageable

export const getCurrentUserProfile = async (): Promise<UserDTO> => {
    const response = await apiClient.get<UserDTO>('/users/me');
    return response.data;
};

export const getUserProfileById = async (userId: number): Promise<UserDTO> => {
    const response = await apiClient.get<UserDTO>(`/users/${userId}`);
    return response.data;
};

export const updateUserProfile = async (userId: number, data: UserProfileUpdateRequest): Promise<UserDTO> => {
    // Si el endpoint es /users/me para el usuario actual:
    // const response = await apiClient.put<UserDTO>('/users/me', data);
    // Si el endpoint espera el ID del usuario:
    const response = await apiClient.put<UserDTO>(`/users/${userId}`, data); // Ajusta según tu API
    return response.data;
};

// Métodos para UserSkill
export const addUserSkill = async (userId: number, skillData: AddUserSkillRequest): Promise<UserSkillDTO> => {
    const response = await apiClient.post<UserSkillDTO>(`/users/${userId}/skills`, skillData); // O /users/me/skills
    return response.data;
};

export const removeUserSkill = async (userId: number, skillId: number): Promise<void> => {
    await apiClient.delete(`/users/${userId}/skills/${skillId}`); // O /users/me/skills/{skillId}
};

export const getUserSkills = async (userId: number): Promise<UserSkillDTO[]> => {
    const response = await apiClient.get<UserSkillDTO[]>(`/users/${userId}/skills`);
    return response.data;
};

// Métodos para Experience
export const addUserExperience = async (userId: number, experienceData: ExperienceRequest): Promise<ExperienceDTO> => {
    const response = await apiClient.post<ExperienceDTO>(`/users/${userId}/experiences`, experienceData); // O /users/me/experiences
    return response.data;
};

export const updateUserExperience = async (userId: number, experienceId: number, experienceData: ExperienceRequest): Promise<ExperienceDTO> => {
    const response = await apiClient.put<ExperienceDTO>(`/users/${userId}/experiences/${experienceId}`, experienceData); // O /users/me/experiences/{id}
    return response.data;
};

export const deleteUserExperience = async (userId: number, experienceId: number): Promise<void> => {
    await apiClient.delete(`/users/${userId}/experiences/${experienceId}`); // O /users/me/experiences/{id}
};

export const getUserExperiences = async (userId: number): Promise<ExperienceDTO[]> => {
    const response = await apiClient.get<ExperienceDTO[]>(`/users/${userId}/experiences`);
    return response.data;
};


// Si tienes un endpoint para administradores para obtener todos los usuarios con paginación
// export const getAllUsers = async (params?: PageableParams): Promise<Page<UserDTO>> => {
//    const response = await apiClient.get<Page<UserDTO>>('/users', { params });
//    return response.data;
// };
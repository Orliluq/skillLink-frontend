// src/services/mentorshipService.ts
import apiClient from './api';
import type {
  MentorshipDTO,
  MentorshipRequest,
  MentorshipUpdateRequest,
  Page,
} from '../types/index';

// Obtener lista paginada de mentorías
export const getAllMentorships = async (
  params?: { page?: number; size?: number; sort?: string }
): Promise<Page<MentorshipDTO>> => {
  const response = await apiClient.get<Page<MentorshipDTO>>('/mentorships', {
    params,
  });
  return response.data;
};

// Obtener mentoría por ID
export const getMentorshipById = async (
  mentorshipId: number | string
): Promise<MentorshipDTO> => {
  const response = await apiClient.get<MentorshipDTO>(
    `/mentorships/${mentorshipId}`
  );
  return response.data;
};

// Crear una nueva oferta de mentoría (o perfil de mentor)
export const createMentorship = async (
  data: MentorshipRequest
): Promise<MentorshipDTO> => {
  const response = await apiClient.post<MentorshipDTO>('/mentorships', data);
  return response.data;
};

// Actualizar mentoría existente (p. ej. cambiar estado o asignar mentee)
export const updateMentorship = async (
  mentorshipId: number | string,
  data: MentorshipUpdateRequest
): Promise<MentorshipDTO> => {
  const response = await apiClient.put<MentorshipDTO>(
    `/mentorships/${mentorshipId}`,
    data
  );
  return response.data;
};

// Eliminar mentoría
export const deleteMentorship = async (
  mentorshipId: number | string
): Promise<void> => {
  await apiClient.delete(`/mentorships/${mentorshipId}`);
};

// Opcional: si tu API soporta que un usuario solicite una mentoría existente
export const requestMentorship = async (
  mentorshipId: number | string,
  menteeId: number
): Promise<MentorshipDTO> => {
  // Asume que backend expone algo como POST /mentorships/{id}/request o PUT con menteeId
  const response = await apiClient.post<MentorshipDTO>(
    `/mentorships/${mentorshipId}/request`,
    { menteeId }
  );
  return response.data;
};

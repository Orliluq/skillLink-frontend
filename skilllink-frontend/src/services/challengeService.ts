// src/services/challengeService.ts
import apiClient from './api';
import type {
  ChallengeDTO,
  ChallengeRequest,
  Page,
} from '../types/index';

// Obtener lista paginada de desafíos
export const getAllChallenges = async (
  params?: { page?: number; size?: number; sort?: string }
): Promise<Page<ChallengeDTO>> => {
  const response = await apiClient.get<Page<ChallengeDTO>>('/challenges', {
    params,
  });
  return response.data;
};

// Obtener desafío por ID
export const getChallengeById = async (
  challengeId: number | string
): Promise<ChallengeDTO> => {
  const response = await apiClient.get<ChallengeDTO>(
    `/challenges/${challengeId}`
  );
  return response.data;
};

// Crear un nuevo desafío
export const createChallenge = async (
  data: ChallengeRequest
): Promise<ChallengeDTO> => {
  const response = await apiClient.post<ChallengeDTO>('/challenges', data);
  return response.data;
};

// Actualizar un desafío existente
export const updateChallenge = async (
  challengeId: number | string,
  data: ChallengeRequest
): Promise<ChallengeDTO> => {
  const response = await apiClient.put<ChallengeDTO>(
    `/challenges/${challengeId}`,
    data
  );
  return response.data;
};

// Eliminar un desafío
export const deleteChallenge = async (
  challengeId: number | string
): Promise<void> => {
  await apiClient.delete(`/challenges/${challengeId}`);
};

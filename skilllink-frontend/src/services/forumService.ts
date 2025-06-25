// src/services/forumService.ts
import apiClient from './api';
import type {
  ForumCategoryDTO,
  ForumCategoryRequest,
  ForumTopicDTO,
  ForumTopicRequest,
  ForumPostDTO,
  ForumPostRequest,
} from '../types/forum.types';
import type { Page } from '../types';

/**
 * Forum Categories
 */

// Obtener todas las categorías de foro (paginado o completo según backend)
export const getAllForumCategories = async (
  params?: { page?: number; size?: number; sort?: string }
): Promise<Page<ForumCategoryDTO>> => {
  const response = await apiClient.get<Page<ForumCategoryDTO>>('/forum/categories', {
    params,
  });
  return response.data;
};

// Obtener categoría por ID
export const getForumCategoryById = async (
  categoryId: number | string
): Promise<ForumCategoryDTO> => {
  const response = await apiClient.get<ForumCategoryDTO>(`/forum/categories/${categoryId}`);
  return response.data;
};

// Crear nueva categoría
export const createForumCategory = async (
  data: ForumCategoryRequest
): Promise<ForumCategoryDTO> => {
  const response = await apiClient.post<ForumCategoryDTO>('/forum/categories', data);
  return response.data;
};

// Actualizar categoría existente
export const updateForumCategory = async (
  categoryId: number | string,
  data: ForumCategoryRequest
): Promise<ForumCategoryDTO> => {
  const response = await apiClient.put<ForumCategoryDTO>(
    `/forum/categories/${categoryId}`,
    data
  );
  return response.data;
};

// Eliminar categoría
export const deleteForumCategory = async (
  categoryId: number | string
): Promise<void> => {
  await apiClient.delete(`/forum/categories/${categoryId}`);
};

/**
 * Forum Topics
 */

// Obtener lista de topics, opcionalmente filtrados por categoría o entidad relacionada
export const getAllForumTopics = async (
  params?: {
    page?: number;
    size?: number;
    sort?: string;
    categoryId?: number;
    relatedEntityType?: string;
    relatedEntityId?: number;
  }
): Promise<Page<ForumTopicDTO>> => {
  const response = await apiClient.get<Page<ForumTopicDTO>>('/forum/topics', {
    params,
  });
  return response.data;
};

// Obtener topic por ID (incluye metadatos; backend puede devolver postsPageContent o similar)
export const getForumTopicById = async (
  topicId: number | string,
  params?: { page?: number; size?: number }
): Promise<ForumTopicDTO> => {
  // Si backend soporta paginación de posts dentro del topic
  const response = await apiClient.get<ForumTopicDTO>(`/forum/topics/${topicId}`, {
    params,
  });
  return response.data;
};

// Crear nuevo topic (con post inicial)
export const createForumTopic = async (
  data: ForumTopicRequest
): Promise<ForumTopicDTO> => {
  const response = await apiClient.post<ForumTopicDTO>('/forum/topics', data);
  return response.data;
};

// Actualizar topic existente (p. ej. título, categoría, entidad relacionada)
export const updateForumTopic = async (
  topicId: number | string,
  data: ForumTopicRequest
): Promise<ForumTopicDTO> => {
  const response = await apiClient.put<ForumTopicDTO>(
    `/forum/topics/${topicId}`,
    data
  );
  return response.data;
};

// Eliminar topic
export const deleteForumTopic = async (
  topicId: number | string
): Promise<void> => {
  await apiClient.delete(`/forum/topics/${topicId}`);
};

/**
 * Forum Posts (inside a topic)
 */

// Obtener posts de un topic, paginados
export const getForumPostsByTopic = async (
  topicId: number | string,
  params?: { page?: number; size?: number; sort?: string }
): Promise<Page<ForumPostDTO>> => {
  const response = await apiClient.get<Page<ForumPostDTO>>(
    `/forum/topics/${topicId}/posts`,
    { params }
  );
  return response.data;
};

// Obtener post individual (si necesario)
export const getForumPostById = async (
  postId: number | string
): Promise<ForumPostDTO> => {
  const response = await apiClient.get<ForumPostDTO>(`/forum/posts/${postId}`);
  return response.data;
};

// Crear nuevo post en un topic (respuesta o post inicial)
export const createForumPost = async (
  topicId: number | string,
  data: ForumPostRequest
): Promise<ForumPostDTO> => {
  const response = await apiClient.post<ForumPostDTO>(
    `/forum/topics/${topicId}/posts`,
    data
  );
  return response.data;
};

// Actualizar post existente
export const updateForumPost = async (
  postId: number | string,
  data: ForumPostRequest
): Promise<ForumPostDTO> => {
  const response = await apiClient.put<ForumPostDTO>(
    `/forum/posts/${postId}`,
    data
  );
  return response.data;
};

// Eliminar post
export const deleteForumPost = async (
  postId: number | string
): Promise<void> => {
  await apiClient.delete(`/forum/posts/${postId}`);
};

// src/types/blog.types.ts

import type { UserSummaryDTO } from './index';

/**
 * DTO que representa un post de blog en la respuesta del backend.
 */
export interface BlogPostDTO {
  id: number;
  title: string;
  content: string;
  author: UserSummaryDTO;      // Quien publicó el post
  tags?: string[];             // Etiquetas opcionales
  createdAt: string;           // ISO string o OffsetDateTime
  updatedAt?: string;          // Opcional si el backend lo retorna
  // Puedes añadir campos extra como `excerpt?: string`, `commentsCount?: number`, etc.
}

/**
 * Request para crear un nuevo post de blog.
 * Ajusta campos obligatorios según tu API: aquí title y content son requeridos.
 */
export interface CreateBlogPostRequest {
  title: string;
  content: string;
  tags?: string[];
}

/**
 * Request para actualizar un post existente. Campos opcionales.
 */
export interface UpdateBlogPostRequest {
  title?: string;
  content?: string;
  tags?: string[];
}

/**
 * DTO para comentarios, si tu blog maneja comentarios.
 */
export interface CommentDTO {
  id: number;
  postId: number;
  author: UserSummaryDTO;
  content: string;
  createdAt: string;
  // updatedAt?: string;
}

/**
 * Request para crear un comentario en un post.
 */
export interface CreateCommentRequest {
  content: string;
}

/**
 * Paginación genérica que tu API podría devolver.
 * Asegúrate de que coincida con la estructura real de tu backend.
 */
export interface Page<T> {
  content: T[];
  number: number;       // índice de página actual (base 0)
  size: number;         // tamaño de página
  totalElements: number;
  totalPages: number;
  first: boolean;
  last: boolean;
  // Puedes añadir otros campos como `sort`, `numberOfElements`, etc., según tu API.
}
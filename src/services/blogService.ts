/* // src/services/blogService.ts
import apiClient from './api';
import type {
  BlogPostDTO,
  CreateBlogPostRequest,
  UpdateBlogPostRequest,
  Page,
} from '../types/index';

// Obtener lista paginada de posts de blog
export const getAllBlogPosts = async (
  params?: { page?: number; size?: number; sort?: string }
): Promise<Page<BlogPostDTO>> => {
  const response = await apiClient.get<Page<BlogPostDTO>>('/blog/posts', {
    params,
  });
  return response.data;
};

// Obtener un post por ID
export const getBlogPostById = async (postId: number): Promise<BlogPostDTO> => {
  const response = await apiClient.get<BlogPostDTO>(`/blog/posts/${postId}`);
  return response.data;
};

// Crear un nuevo post
export const createBlogPost = async (
  data: CreateBlogPostRequest
): Promise<BlogPostDTO> => {
  const response = await apiClient.post<BlogPostDTO>('/blog/posts', data);
  return response.data;
};

// Actualizar un post existente
export const updateBlogPost = async (
  postId: number,
  data: UpdateBlogPostRequest
): Promise<BlogPostDTO> => {
  const response = await apiClient.put<BlogPostDTO>(
    `/blog/posts/${postId}`,
    data
  );
  return response.data;
};

// Eliminar un post
export const deleteBlogPost = async (postId: number): Promise<void> => {
  await apiClient.delete(`/blog/posts/${postId}`);
};
 */
// Opcional: obtener comentarios de un post
// export const getCommentsByPost = async (postId: number): Promise<CommentDTO[]> => {
//   const response = await apiClient.get<CommentDTO[]>(`/blog/posts/${postId}/comments`);
//   return response.data;
// };

// Opcional: crear comentario
// export const addCommentToPost = async (postId: number, data: CreateCommentRequest): Promise<CommentDTO> => {
//   const response = await apiClient.post<CommentDTO>(`/blog/posts/${postId}/comments`, data);
//   return response.data;
// };

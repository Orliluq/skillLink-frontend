import type { UserSummaryDTO } from "./user.types";

export type ForumRelatedEntityType =
  | "PROJECT"
  | "MENTORSHIP"
  | "CHALLENGE"
  | "GENERAL";

export interface ForumCategoryDTO {
  id: number; // INT
  name: string;
  description?: string;
}

export interface ForumCategoryRequest {
  name?: string;
  description?: string;
}

export interface ForumPostDTO {
  id: number;
  topicId: number;
  user?: UserSummaryDTO; // Puede ser null si el usuario fue eliminado
  parentPostId?: number;
  content: string;
  createdAt: string; // OffsetDateTime
  updatedAt: string; // OffsetDateTime
  replies?: ForumPostDTO[]; // Para respuestas anidadas
}

export interface ForumTopicDTO {
  id: number;
  category?: ForumCategoryDTO;
  creator?: UserSummaryDTO;
  title: string;
  relatedEntityType?: ForumRelatedEntityType | string;
  relatedEntityId?: number;
  createdAt: string; // OffsetDateTime
  lastReplyAt?: string; // OffsetDateTime
  postCount?: number; // Si lo calculas y lo envías
  postsPageContent?: ForumPostDTO[]; // Si devuelves una página de posts
  currentPageNumber?: number;
  currentPageSize?: number;
  totalPosts?: number;
  totalPages?: number;
  // O simplemente:
  // posts?: ForumPostDTO[]; // Si solo devuelves una lista de la página actual
}

export interface ForumTopicRequest {
  categoryId?: number;
  title?: string;
  relatedEntityType?: ForumRelatedEntityType | string;
  relatedEntityId?: number;
  initialPostContent?: string;
}

export interface ForumPostRequest {
  parentPostId?: number;
  content?: string;
}
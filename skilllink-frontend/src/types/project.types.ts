import type { UserSummaryDTO } from "./user.types";

export enum ProjectStatus {
  PLANNING = "PLANNING",
  ACTIVE = "ACTIVE",
  COMPLETED = "COMPLETED",
  ARCHIVED = "ARCHIVED",
}

export interface ProjectMemberDTO {
  user: UserSummaryDTO;
  roleInProject?: string;
  joinedAt: string; // OffsetDateTime
}

export interface ProjectDTO {
  id: number;
  image: string;
  title: string;
  description?: string
  creator?: UserSummaryDTO;
  status: ProjectStatus;
  createdAt: string; // OffsetDateTime
  updatedAt: string; // OffsetDateTime
  members?: ProjectMemberDTO[]; // Cambiado a Array, ya que Set no es un tipo JSON nativo
}

export interface ProjectSummaryDTO {
  id: number;
  image: string;
  title: string;
  description?: string;
  creator?: UserSummaryDTO;
  status: ProjectStatus; 
  createdAt: string; // OffsetDateTime
  updatedAt: string; // OffsetDateTime
}

export interface ProjectRequest {
  title?: string;
  description?: string;
  status?: ProjectStatus;
}

export interface AddProjectMemberRequest {
  userId?: number;
  roleInProject?: string;
}

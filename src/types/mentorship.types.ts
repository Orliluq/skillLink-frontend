import type { UserSummaryDTO } from "./index";

export const MentorshipStatus = {
  REQUESTED: "REQUESTED",
  ACTIVE: "ACTIVE",
  COMPLETED: "COMPLETED",
  DECLINED: "DECLINED",
  AVAILABLE: "AVAILABLE"
} as const;

export type MentorshipStatus = typeof MentorshipStatus[keyof typeof MentorshipStatus];

export interface MentorshipDTO {
  id: number;
  mentor: UserSummaryDTO;
  mentee?: UserSummaryDTO;
  topic: string;
  description?: string;
  status: MentorshipStatus | string;
  createdAt: string; // OffsetDateTime
  updatedAt: string; // OffsetDateTime
}

export interface MentorshipRequest {
  // Para crear una oferta
  topic?: string;
  description?: string;
}

export interface MentorshipUpdateRequest {
  status?: MentorshipStatus | string;
  menteeId?: number;
}

export interface MentorshipUpdateRequest {
  // Para cambios de estado
  status?: MentorshipStatus | string;
  menteeId?: number; // Cuando un mentee solicita
}
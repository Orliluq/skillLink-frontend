import type { UserSummaryDTO } from "./index";

export const NotificationType = {
  NEW_MESSAGE: "NEW_MESSAGE",
  MEETING_REMINDER: "MEETING_REMINDER",
  CHALLENGE_COMPLETED: "CHALLENGE_COMPLETED",
  PROJECT_UPDATE: "PROJECT_UPDATE",
  MENTORSHIP_REQUEST: "MENTORSHIP_REQUEST",
  SYSTEM: "SYSTEM"
} as const;

export type NotificationType = typeof NotificationType[keyof typeof NotificationType];

export interface NotificationDTO {
  id: number;
  sender?: UserSummaryDTO; // Puede ser null para notificaciones del sistema
  type: NotificationType | string;
  content: string;
  linkUrl?: string;
  isRead: boolean;
  createdAt: string; // OffsetDateTime
}

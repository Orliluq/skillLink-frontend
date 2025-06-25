// src/types/chat.types.ts
import type { UserSummaryDTO } from "./user.types";

export const ConversationType = {
  DIRECT: "DIRECT",
  GROUP: "GROUP"
} as const;
export type ConversationType = typeof ConversationType[keyof typeof ConversationType];

export interface ChatMessageDTO {
  id: number;
  conversationId: number;
  sender: UserSummaryDTO;
  content: string;
  sentAt: string; // OffsetDateTime
  readAt?: string; // OffsetDateTime
}

export interface ChatConversationDTO {
  id: number;
  type: ConversationType | string;
  name?: string; // Para grupos
  createdAt: string; // OffsetDateTime
  participants?: UserSummaryDTO[];
  lastMessage?: ChatMessageDTO;
}

export interface CreateConversationRequest {
  type?: ConversationType | string;
  name?: string;
  participantUserIds?: number[];
}

export interface CreateChatMessageRequest {
  content?: string;
}

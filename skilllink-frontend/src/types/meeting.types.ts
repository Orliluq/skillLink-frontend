// src/types/meeting.types.ts
import type { UserSummaryDTO } from "./user.types";

export const MeetingRelatedEntityType = {
  PROJECT: "PROJECT",
  MENTORSHIP: "MENTORSHIP",
  CHALLENGE: "CHALLENGE",
  GENERAL: "GENERAL"
} as const;

export type MeetingRelatedEntityType = typeof MeetingRelatedEntityType[keyof typeof MeetingRelatedEntityType];

export type MeetingAttendeeStatus =
  | "ACCEPTED"
  | "DECLINED"
  | "TENTATIVE"
  | "NEEDS_ACTION"; // Nota: enums Java 'NEEDS_ACTION' se mapea a string

export interface MeetingAttendeeDTO {
  user: UserSummaryDTO;
  status: MeetingAttendeeStatus | string;
}

export interface MeetingDTO {
  id: number;
  organizer?: UserSummaryDTO;
  title: string;
  description?: string;
  startTime: string; // OffsetDateTime
  endTime: string; // OffsetDateTime
  locationUrl?: string;
  googleCalendarEventId?: string;
  relatedEntityType?: MeetingRelatedEntityType | string;
  relatedEntityId?: number;
  createdAt: string; // OffsetDateTime
  attendees?: MeetingAttendeeDTO[];
}

export interface MeetingRequest {
  title?: string;
  description?: string;
  startTime?: string; // OffsetDateTime
  endTime?: string; // OffsetDateTime
  locationUrl?: string;
  relatedEntityType?: MeetingRelatedEntityType | string;
  relatedEntityId?: number;
  attendeeUserIds?: number[];
}

export interface UpdateMeetingAttendeeStatusRequest {
  status?: MeetingAttendeeStatus | string;
}

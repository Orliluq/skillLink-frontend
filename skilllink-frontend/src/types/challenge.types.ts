// src/types/challenge.types.ts
import type { UserSummaryDTO } from "./user.types";

export const ChallengeDifficulty = {
  EASY: "EASY",
  MEDIUM: "MEDIUM",
  HARD: "HARD"
} as const;

export type ChallengeDifficulty = typeof ChallengeDifficulty[keyof typeof ChallengeDifficulty];

export const SubmissionStatus = {
  STARTED: "STARTED",
  SUBMITTED: "SUBMITTED",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED"
} as const;

export type SubmissionStatus = typeof SubmissionStatus[keyof typeof SubmissionStatus];

export interface ChallengeDTO {
  id: number;
  creator?: UserSummaryDTO;
  title: string;
  description: string;
  difficultyLevel?: ChallengeDifficulty | string;
  pointsReward: number;
  createdAt: string; // OffsetDateTime
  // updatedAt: string; // Si lo devuelves desde el backend
}

export interface ChallengeRequest {
  title?: string;
  description?: string;
  difficultyLevel?: ChallengeDifficulty | string;
  pointsReward?: number;
}

// Si quieres distinción:
export interface CreateChallengeRequest {
  title: string;
  description: string;
  difficultyLevel: ChallengeDifficulty | string;
  pointsReward: number;
}

export interface UpdateChallengeRequest {
  title?: string;
  description?: string;
  difficultyLevel?: ChallengeDifficulty | string;
  pointsReward?: number;
}

export interface ChallengeSubmissionDTO {
  id: number;
  challengeId: number;
  challengeTitle?: string; // Para conveniencia
  user: UserSummaryDTO;
  submissionContent?: string; // Podría ser una URL
  status: SubmissionStatus | string;
  scoreAwarded?: number;
  submittedAt?: string; // OffsetDateTime
  completedAt?: string; // OffsetDateTime
}

export interface ChallengeSubmissionRequest {
  submissionContent?: string;
}

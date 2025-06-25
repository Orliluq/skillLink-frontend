export interface ExperienceDTO {
  id: number;
  title: string;
  companyName?: string;
  description?: string;
  startDate?: string; // LocalDate se mapea a string (ej. "YYYY-MM-DD")
  endDate?: string;
  isCurrent?: boolean;
}

export interface ExperienceRequest {
  title?: string;
  companyName?: string;
  description?: string;
  startDate?: string;
  endDate?: string;
  isCurrent?: boolean;
}

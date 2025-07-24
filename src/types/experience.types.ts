export interface ExperienceDTO {
  id: number;
  title: string;
  companyName?: string;
  description?: string;
  startDate?: string; 
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
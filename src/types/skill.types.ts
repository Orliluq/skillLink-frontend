// ProficiencyLevel como union type de string literals para compatibilidad con "erasableSyntaxOnly"
export type ProficiencyLevel = 
  | "BEGINNER"
  | "INTERMEDIATE"
  | "ADVANCED"
  | "EXPERT";

export interface SkillDTO {
  id: number; // INT se mapea a number
  name: string;
  description?: string;
}

export interface UserSkillDTO {
  skillId: number;
  skillName: string; // Para mostrar fácilmente el nombre
  proficiencyLevel?: ProficiencyLevel | string; // Permitir string si el backend devuelve el string del enum
}

export interface AddUserSkillRequest {
  skillId?: number;
  proficiencyLevel?: ProficiencyLevel | string;
}

import apiClient from './api';
import type { Page, ProjectDTO, ProjectRequest, ProjectMemberDTO, AddProjectMemberRequest } from '../types/index'; // Ajusta la ruta

// Define un tipo para los parámetros de paginación si quieres ser explícito
export interface PageableParams {
    page?: number;
    size?: number;
    sort?: string; // ej. "createdAt,desc" o "title,asc"
}

export const getAllProjects = async (params?: PageableParams): Promise<Page<ProjectDTO>> => {
    const response = await apiClient.get<Page<ProjectDTO>>('/projects', { params });
    return response.data;
};

export const getPublicProjects = async (params?: PageableParams): Promise<Page<ProjectDTO>> => {
    // Asume que tienes un endpoint específico para proyectos públicos o un filtro
    // Podría ser el mismo endpoint con un query param: apiClient.get<Page<ProjectDTO>>('/projects', { params: {...params, publicOnly: true } });
    // O un endpoint dedicado:
    const response = await apiClient.get<Page<ProjectDTO>>('/projects/public', { params });
    return response.data;
};


export const getProjectById = async (projectId: number | string): Promise<ProjectDTO> => {
    const response = await apiClient.get<ProjectDTO>(`/projects/${projectId}`);
    return response.data;
};

export const createProject = async (projectData: ProjectRequest): Promise<ProjectDTO> => {
    const response = await apiClient.post<ProjectDTO>('/projects', projectData);
    return response.data;
};

export const updateProject = async (projectId: number | string, projectData: ProjectRequest): Promise<ProjectDTO> => {
    const response = await apiClient.put<ProjectDTO>(`/projects/${projectId}`, projectData);
    return response.data;
};

export const deleteProject = async (projectId: number | string): Promise<void> => {
    await apiClient.delete(`/projects/${projectId}`);
};

export const addMemberToProject = async (projectId: number | string, memberData: AddProjectMemberRequest): Promise<ProjectMemberDTO> => {
    const response = await apiClient.post<ProjectMemberDTO>(`/projects/${projectId}/members`, memberData);
    return response.data;
};

export const removeMemberFromProject = async (projectId: number | string, memberUserId: number): Promise<void> => {
    await apiClient.delete(`/projects/${projectId}/members/${memberUserId}`);
};

export const getProjectMembers = async (projectId: number | string): Promise<ProjectMemberDTO[]> => {
    const response = await apiClient.get<ProjectMemberDTO[]>(`/projects/${projectId}/members`);
    return response.data;
};
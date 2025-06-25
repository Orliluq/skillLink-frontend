// src/services/notificationService.ts
import apiClient from './api';
import type { NotificationDTO } from '../types/notification.types';
import type { Page } from '../types/index';

/**
 * Obtener todas las notificaciones del usuario actual, con paginación opcional.
 * Asume endpoint GET /notifications?page=0&size=10
 */
export const getNotifications = async (
  params?: { page?: number; size?: number; sort?: string }
): Promise<Page<NotificationDTO>> => {
  const response = await apiClient.get<Page<NotificationDTO>>('/notifications', {
    params,
  });
  return response.data;
};

/**
 * Obtener una notificación específica por ID.
 * Asume endpoint GET /notifications/{id}
 */
export const getNotificationById = async (
  notificationId: number | string
): Promise<NotificationDTO> => {
  const response = await apiClient.get<NotificationDTO>(`/notifications/${notificationId}`);
  return response.data;
};

/**
 * Marcar una notificación como leída.
 * Asume endpoint PUT o POST /notifications/{id}/read
 */
export const markNotificationAsRead = async (
  notificationId: number | string
): Promise<NotificationDTO> => {
  const response = await apiClient.put<NotificationDTO>(`/notifications/${notificationId}/read`);
  return response.data;
};

/**
 * Marcar una notificación como no leída (si tu API lo soporta).
 * Asume endpoint PUT o POST /notifications/{id}/unread
 */
export const markNotificationAsUnread = async (
  notificationId: number | string
): Promise<NotificationDTO> => {
  const response = await apiClient.put<NotificationDTO>(`/notifications/${notificationId}/unread`);
  return response.data;
};

/**
 * Marcar todas las notificaciones como leídas.
 * Asume endpoint POST /notifications/read-all o similar.
 */
export const markAllNotificationsAsRead = async (): Promise<void> => {
  await apiClient.post('/notifications/read-all');
};

/**
 * Eliminar una notificación.
 * Asume endpoint DELETE /notifications/{id}
 */
export const deleteNotification = async (
  notificationId: number | string
): Promise<void> => {
  await apiClient.delete(`/notifications/${notificationId}`);
};

/**
 * (Opcional) Crear una notificación manualmente (usualmente usado por admin o sistema).
 * Asume endpoint POST /notifications con payload según backend.
 * Usa solo si tu API permite crear notificaciones desde frontend o scripts de administración.
 */
export const createNotification = async (
  data: Partial<NotificationDTO>
): Promise<NotificationDTO> => {
  const response = await apiClient.post<NotificationDTO>('/notifications', data);
  return response.data;
};

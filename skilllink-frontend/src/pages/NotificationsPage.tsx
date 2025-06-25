import React, { useEffect, useState } from 'react';
import NotificationCard from './NotificationCard';
import styles from './NotificationsPage.module.css';

const NotificationsPage: React.FC = () => {
  const [notifications, setNotifications] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const mockNotifications = [
      {
        id: 1,
        sender: { username: 'Juan Pérez', avatarUrl: '/images/mentorship/mentor1.jpg' },
        type: 'NEW_MESSAGE',
        content: 'Tienes un nuevo mensaje de Juan Pérez.',
        linkUrl: '/messages/1',
        isRead: false,
        createdAt: new Date().toISOString(),
      },
      {
        id: 2,
        sender: { username: 'María López', avatarUrl: '/images/mentorship/mentor2.jpg' },
        type: 'MEETING_REMINDER',
        content: 'Recordatorio: Tienes una reunión con María López mañana.',
        linkUrl: '/meetings/2',
        isRead: true,
        createdAt: new Date().toISOString(),
      },
      {
        id: 3,
        sender: { username: 'Sistema', avatarUrl: '/images/system-icon.png' },
        type: 'SYSTEM',
        content: 'Se ha actualizado tu perfil correctamente.',
        linkUrl: '/profile',
        isRead: true,
        createdAt: new Date().toISOString(),
      },
      {
        id: 4,
        sender: { username: 'AlumniBot', avatarUrl: '/images/avatars/bot.png' },
        type: 'CHALLENGE_COMPLETED',
        content: '¡Felicidades! Has completado el desafío “React Avanzado”.',
        linkUrl: '/challenges/completed',
        isRead: false,
        createdAt: new Date().toISOString(),
      },
    ];

    setNotifications(mockNotifications);
    setLoading(false);
  }, []);

  if (loading) return <p>Cargando notificaciones...</p>;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Notificaciones</h2>
      <div className={styles.notificationsList}>
        {notifications.map((notification) => (
          <NotificationCard key={notification.id} notification={notification} />
        ))}
      </div>
    </div>
  );
};

export default NotificationsPage;

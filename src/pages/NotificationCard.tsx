import React from 'react';
import styles from './NotificationCard.module.css';
import { Link } from 'react-router-dom';

// Definir el tipo NotificationDTO según tu ejemplo
interface NotificationCardProps {
  notification: {
    id: number;
    sender?: {
      username: string;
      avatarUrl: string;
    };
    type: string;
    content: string;
    linkUrl?: string;
    isRead: boolean;
    createdAt: string;
  };
}

const NotificationCard: React.FC<NotificationCardProps> = ({ notification }) => {

  return (
    <div className={`${styles.card} ${notification.isRead ? styles.read : styles.unread}`}>
      <div className={styles.cardHeader}>
        {notification.sender ? (
          <img
            src={notification.sender.avatarUrl}
            alt={notification.sender.username}
            className={styles.avatar}
          />
        ) : (
          <div className={styles.systemIcon}>⚙️</div>
        )}
        <div className={styles.headerText}>
          <strong>{notification.sender ? notification.sender.username : 'Sistema'}</strong>
          <span className={styles.timestamp}>
            {new Date(notification.createdAt).toLocaleString()}
          </span>
        </div>
      </div>
      <p className={styles.content}>{notification.content}</p>
      {notification.linkUrl && (
        <Link to={notification.linkUrl} className={styles.link}>
          Ver más
        </Link>
      )}
      {/* <button className={styles.markAsReadButton} onClick={() => markAsRead(notification.id)}>
        Marcar como leído
      </button> */}
      
    </div>
  );
};

export default NotificationCard;

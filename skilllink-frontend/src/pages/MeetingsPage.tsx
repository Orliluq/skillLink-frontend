import React from 'react';
import styles from './MeetingsPage.module.css';
import { Link } from 'react-router-dom';

const meetings = [
  {
    id: 1,
    title: 'Reunión de Proyecto Alpaca',
    startTime: '2025-07-01T14:00:00Z',
    endTime: '2025-07-01T15:00:00Z',
    relatedEntityType: 'PROJECT',
    locationUrl: 'https://meet.google.com/alpaca-team'
  },
  {
    id: 2,
    title: 'Mentoría con María',
    startTime: '2025-07-03T10:00:00Z',
    endTime: '2025-07-03T11:00:00Z',
    relatedEntityType: 'MENTORSHIP',
    locationUrl: 'https://zoom.us/maria-mentoring',
    mentorProfileUrl: '/mentorships/2'
  },
  {
    id: 3,
    title: 'Desafío de UI Final',
    startTime: '2025-07-05T16:00:00Z',
    endTime: '2025-07-05T17:30:00Z',
    relatedEntityType: 'CHALLENGE',
    locationUrl: 'https://meet.google.com/ui-challenge'
  }
];

const formatDate = (isoString: string) => new Date(isoString).toLocaleString('es-ES', {
  dateStyle: 'medium',
  timeStyle: 'short'
});

const MeetingsPage: React.FC = () => {
  return (
    <div className={styles.meetingsContainer}>
      <h2 className={styles.title}>Reuniones Agendadas</h2>
      <div className={styles.meetingList}>
        {meetings.map(meeting => (
          <div key={meeting.id} className={styles.meetingCard}>
            <h3 className={styles.meetingTitle}>{meeting.title}</h3>
            <p className={styles.meetingDetail}><strong>Inicio:</strong> {formatDate(meeting.startTime)}</p>
            <p className={styles.meetingDetail}><strong>Fin:</strong> {formatDate(meeting.endTime)}</p>
            <p className={styles.meetingDetail}><strong>Tipo:</strong> {meeting.relatedEntityType}</p>
            <a
              href={meeting.locationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.meetingButton}
            >
              Ir a la reunión
            </a>
            {meeting.relatedEntityType === 'MENTORSHIP' && meeting.mentorProfileUrl && (
              <Link to={meeting.mentorProfileUrl} className={styles.profileButton}>
                Ver perfil del mentor
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetingsPage;


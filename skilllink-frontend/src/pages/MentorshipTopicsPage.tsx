import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './MentorshipTopicsPage.module.css';
import MentorshipsPage from './MentorshipsPage';
import ForumPage from './ForumPage';

interface Topic {
  id: number;
  title: string;
  description: string;
  mentorIds: number[]; // IDs de los mentores relacionados
}

interface Mentor {
  id: number;
  mentorName: string;
  avatar: string;
  specialty: string;
}

const mockMentors: Mentor[] = [
  {
    id: 1,
    mentorName: 'Juan Pérez',
    avatar: "/images/mentorship/mentor1.jpg",
    specialty: 'Desarrollo Web',
  },
  {
    id: 2,
    mentorName: 'María López',
    avatar: "/images/mentorship/mentor2.jpg",
    specialty: 'UX/UI Design',
  },
  {
    id: 3,
    mentorName: 'Carlos García',
    avatar: "/images/mentorship/mentor3.jpg",
    specialty: 'Ciberseguridad',
  },
  {
    id: 4,
    mentorName: 'Ana López',
    avatar: "/images/mentorship/mentor4.jpg",
    specialty: 'UX/UI Design',
  },
];

const mockTopics: Topic[] = [
  {
    id: 1,
    title: 'Fundamentos de React.js',
    description: 'Explora los hooks, el manejo del estado y cómo construir SPAs modernas.',
    mentorIds: [1],
  },
  {
    id: 2,
    title: 'Diseño centrado en el usuario',
    description: 'Aprende a crear interfaces intuitivas con un enfoque UX/UI.',
    mentorIds: [2, 4],
  },
  {
    id: 3,
    title: 'Buenas prácticas en ciberseguridad',
    description: 'Protege tus aplicaciones y usuarios de amenazas reales.',
    mentorIds: [3],
  },
];

const MentorshipTopicsPage: React.FC = () => {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [mentors, setMentors] = useState<Mentor[]>([]);

  useEffect(() => {
    // Simulación de carga de datos
    setTopics(mockTopics);
    setMentors(mockMentors);
  }, []);

  const getMentorsForTopic = (mentorIds: number[]) => {
    return mentors.filter(mentor => mentorIds.includes(mentor.id));
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Temas de Mentoría</h2>
      <div className={styles.topicsList}>
        {topics.map(topic => (
          <div key={topic.id} className={styles.card}>
            <h3 className={styles.cardTitle}>{topic.title}</h3>
            <p className={styles.cardDescription}>{topic.description}</p>
            <div className={styles.mentorsGroup}>
              {getMentorsForTopic(topic.mentorIds).map(mentor => (
                <div key={mentor.id} className={styles.mentorItem}>
                  <img src={mentor.avatar} alt={mentor.mentorName} className={styles.mentorAvatar} />
                  <div>
                    <p className={styles.mentorName}>{mentor.mentorName}</p>
                    <small className={styles.mentorSpecialty}>{mentor.specialty}</small>
                  </div>
                </div>
              ))}
            </div>
            <Link to={`/topics/${topic.id}`} className={styles.button}>Ver detalles</Link>
          </div>
        ))}
      </div>
      <MentorshipsPage />
      <ForumPage />
    </div>
  );
};

export default MentorshipTopicsPage;

import React, { useEffect, useState } from 'react';
import { NavLink, useParams, useNavigate } from 'react-router-dom';
import styles from './MentorshipDetailPage.module.css';

interface Mentorship {
  id: number;
  mentorName: string;
  avatar: string;
  specialty: string;
  bio: string;
}

const MentorshipDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [mentorship, setMentorship] = useState<Mentorship | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMentorshipDetail = async () => {
      try {
        const mockMentorships: Mentorship[] = [
          {
            id: 1,
            mentorName: 'Juan Pérez',
            avatar: "/images/mentorship/mentor1.jpg",
            specialty: 'Desarrollo Web',
            bio: 'Soy un desarrollador con 5 años de experiencia trabajando en diversas tecnologías como React, Node.js, y MongoDB.',
          },
          {
            id: 2,
            mentorName: 'María López',
            avatar: "/images/mentorship/mentor2.jpg",
            specialty: 'UX/UI Design',
            bio: 'Especialista en diseño y experiencia de usuario con un enfoque en la creación de interfaces intuitivas y atractivas.',
          },
          {
            id: 3,
            mentorName: 'Carlos García',
            avatar: "/images/mentorship/mentor3.jpg",
            specialty: 'Ciberseguridad',
            bio: 'Experto en seguridad informática, con más de 10 años protegiendo sistemas y datos de empresas de todo el mundo.',
          },
          {
            id: 4,
            mentorName: 'Ana López',
            avatar: "/images/mentorship/mentor4.jpg",
            specialty: 'UX/UI Design',
            bio: 'Especialista en diseño y experiencia de usuario con un enfoque en la creación de interfaces intuitivas y atractivas.',
          },
          {
            id: 5,
            mentorName: 'Fernando Rivas',
            avatar: '/images/mentorship/mentor5.jpg',
            specialty: 'DevOps',
            bio: 'Automatización de procesos e integración continua.',
          },
          {
            id: 6,
            mentorName: 'Lucía Sánchez',
            avatar: '/images/mentorship/mentor6.jpg',
            specialty: 'Machine Learning',
            bio: 'Modelado de datos y entrenamiento de modelos de IA.',
          },
        ];

        const mentorshipDetail = mockMentorships.find(m => m.id === Number(id));

        if (mentorshipDetail) {
          setMentorship(mentorshipDetail);
        } else {
          setError('Mentoría no encontrada');
        }
      } catch (err: any) {
        console.error(err);
        setError('Error al cargar los detalles de la mentoría');
      } finally {
        setLoading(false);
      }
    };

    fetchMentorshipDetail();
  }, [id]);

  if (loading) return <p className={styles.message}>Cargando detalles...</p>;
  if (error) return <p className={styles.error}>{error}</p>;
  if (!mentorship) return <p className={styles.error}>No se encontraron detalles para esta mentoría.</p>;

  const handleRequestMentorship = () => {
    navigate(`/profile/mentorship/${mentorship.id}`);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Perfil del Mentor</h2>
      <div className={styles.card}>
        <img src={mentorship.avatar} alt={mentorship.mentorName} className={styles.avatar} />
        <h3 className={styles.cardTitle}>{mentorship.mentorName}</h3>
        <p className={styles.cardSpecialty}><strong>Especialidad:</strong> {mentorship.specialty}</p>
        <p className={styles.cardBio}><strong>Biografía:</strong> {mentorship.bio}</p>

        <div className={styles.actions}>
          <NavLink to={`/mentorships/${mentorship.id}`} className={styles.linkButton}>
            Ver Perfil Completo
          </NavLink>
          <button className={styles.primaryButton} onClick={handleRequestMentorship}>
            Solicitar Mentoría
          </button>
        </div>
      </div>
    </div>
  );
};

export default MentorshipDetailPage;


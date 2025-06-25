import React, { useEffect, useState } from 'react';
import styles from './MentorshipsPage.module.css';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Navigation, Pagination } from 'swiper/modules';

interface Mentorship {
  id: number;
  mentorName: string;
  avatar: string;
  specialty: string;
  bio: string;
}

const MentorshipsPage: React.FC = () => {
  const [mentorships, setMentorships] = useState<Mentorship[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMentorships = async () => {
      try {
        const mockMentorships: Mentorship[] = [
          {
            id: 1,
            mentorName: 'Juan Pérez',
            avatar: '/images/mentorship/mentor1.jpg',
            specialty: 'Desarrollo Web',
            bio: '5 años de experiencia en React, Node.js y MongoDB.',
          },
          {
            id: 2,
            mentorName: 'María López',
            avatar: '/images/mentorship/mentor2.jpg',
            specialty: 'UX/UI Design',
            bio: 'Interfaces intuitivas y atractivas para mejorar la experiencia de usuario.',
          },
          {
            id: 3,
            mentorName: 'Carlos García',
            avatar: '/images/mentorship/mentor3.jpg',
            specialty: 'Ciberseguridad',
            bio: '10 años protegiendo sistemas y datos de empresas globales.',
          },
          {
            id: 4,
            mentorName: 'Ana López',
            avatar: '/images/mentorship/mentor4.jpg',
            specialty: 'UX/UI Design',
            bio: 'Especialista en diseño de productos digitales accesibles.',
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
        setMentorships(mockMentorships);
      } catch (err: any) {
        console.error(err);
        setError('Error cargando mentorías');
      } finally {
        setLoading(false);
      }
    };

    fetchMentorships();
  }, []);

  if (loading) return <p className={styles.message}>Cargando mentorías...</p>;
  if (error) return <p className={styles.error}>{error}</p>;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Mentores</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1.2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className={styles.slider}
      >
        {mentorships.map((m) => (
          <SwiperSlide key={m.id}>
            <div className={styles.card}>
              <img src={m.avatar} alt={m.mentorName} className={styles.cardAvatar} />
              <h3 className={styles.cardTitle}>{m.mentorName}</h3>
              <p className={styles.cardSpecialty}>{m.specialty}</p>
              <p className={styles.cardBio}>{m.bio}</p>
              <Link to={`/mentorships/${m.id}`} className={styles.button}>
                Ver Perfil
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MentorshipsPage;


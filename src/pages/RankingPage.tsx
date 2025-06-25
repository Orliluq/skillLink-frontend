import React from 'react';
import styles from './RankingPage.module.css';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
/* import 'swiper/css';
import 'swiper/css/pagination'; */

interface Collaborator {
  id: number;
  name: string;
  avatar: string;
  badges: string[];
  contributions: number;
  testimonial: string;
}

const badgeClassMap: Record<string, string> = {
  "🔥 Mentor Estrella": styles.badgeFire,
  "🌟 Top 1 Colaborador": styles.badgeTop,
  "🤝 Espíritu Comunitario": styles.badgeCommunity,
  "🌱 Mentora Junior": styles.badgeGrowth,
  "🎯 Constancia": styles.badgeFocus,
  "⚡ Colaborador Destacado": styles.badgeLightning,
  "❤️ Ayuda Solidaria": styles.badgeLove,
};

const collaborators: Collaborator[] = [
  {
    id: 1,
    name: "Alicia Guevara",
    avatar: "/images/avatars/avatar1.jpg",
    badges: ["🔥 Mentor Estrella", "🌟 Top 1 Colaborador", "🤝 Espíritu Comunitario"],
    contributions: 87,
    testimonial: "SkillLink me permitió enseñar, aprender y crecer. Es una tribu donde el conocimiento se multiplica y los sueños se hacen proyecto.",
  },
  {
    id: 2,
    name: "Ana López",
    avatar: "/images/avatars/avatar2.jpg",
    badges: ["🌱 Mentora Junior", "🎯 Constancia"],
    contributions: 52,
    testimonial: "Compartir lo que sé y ver crecer a otros es una experiencia transformadora. Aquí encontré propósito y comunidad.",
  },
  {
    id: 3,
    name: "Carlos Méndez",
    avatar: "/images/avatars/avatar3.jpg",
    badges: ["⚡ Colaborador Destacado", "❤️ Ayuda Solidaria"],
    contributions: 49,
    testimonial: "SkillLink es más que una plataforma, es un movimiento. Aquí todos sumamos y brillamos juntos.",
  },
  {
    id: 4,
    name: "Lucía Ramírez",
    avatar: "/images/avatars/avatar4.jpg",
    badges: ["🌟 Top 1 Colaborador", "🎯 Constancia"],
    contributions: 65,
    testimonial: "Con SkillLink descubrí una red donde cada aporte tiene valor y cada persona puede inspirar a otra.",
  },
  {
    id: 5,
    name: "Marcos Díaz",
    avatar: "/images/avatars/avatar5.jpg",
    badges: ["🤝 Espíritu Comunitario", "⚡ Colaborador Destacado"],
    contributions: 38,
    testimonial: "Desde que entré a la comunidad no he parado de aprender. La motivación y el apoyo son constantes.",
  },
  {
    id: 6,
    name: "Julieta Fernández",
    avatar: "/images/avatars/avatar6.jpg",
    badges: ["❤️ Ayuda Solidaria", "🌱 Mentora Junior"],
    contributions: 41,
    testimonial: "La mentoría en SkillLink me permitió devolver lo aprendido. Aquí se siembra con propósito.",
  },
  {
    id: 7,
    name: "Valentina Suárez",
    avatar: "/images/avatars/avatar7.jpg",
    badges: ["🌱 Mentora Junior", "🤝 Espíritu Comunitario"],
    contributions: 33,
    testimonial: "Ser parte de SkillLink ha sido un viaje de crecimiento, desafíos y logros que nunca imaginé.",
  },
  {
    id: 8,
    name: "Martín Ortega",
    avatar: "/images/avatars/avatar8.jpg",
    badges: ["⚡ Colaborador Destacado", "🎯 Constancia"],
    contributions: 47,
    testimonial: "Aquí encontré una tribu que valora cada paso, cada esfuerzo y cada idea.",
  },
  {
    id: 9,
    name: "Sofía Herrera",
    avatar: "/images/avatars/avatar9.jpg",
    badges: ["❤️ Ayuda Solidaria", "🌟 Top 1 Colaborador"],
    contributions: 59,
    testimonial: "Lo mejor de esta comunidad es cómo celebra el progreso individual y colectivo.",
  },
  {
    id: 10,
    name: "Gabriel Torres",
    avatar: "/images/avatars/avatar10.jpg",
    badges: ["🔥 Mentor Estrella", "🎯 Constancia"],
    contributions: 76,
    testimonial: "SkillLink me inspiró a guiar y a ser guiado. El ciclo del aprendizaje vivo.",
  },
];

const RankingPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Ranking de Colaboradores</h1>
      <p className={styles.subtitle}>Celebramos el compromiso, el conocimiento compartido y la pasión por crecer en comunidad.</p>

      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        pagination={{ clickable: true }}
        breakpoints={{
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
        className={styles.rankingList}
      >
        {collaborators.map((collab, index) => (
          <SwiperSlide key={collab.id}>
            <div className={styles.card}>
              <div className={styles.rank}>#{index + 1}</div>
              <img src={collab.avatar} alt={collab.name} className={styles.avatar} />
              <h3 className={styles.name}>{collab.name}</h3>
              <p className={styles.contributions}>
                Contribuciones: <strong>{collab.contributions}</strong>
              </p>

              <div className={styles.badges}>
                {collab.badges.map((badge, i) => (
                  <span key={i} className={`${styles.badge} ${badgeClassMap[badge] || ''}`}>
                    {badge}
                  </span>
                ))}
              </div>
              <blockquote className={styles.testimonial}>
                “{collab.testimonial}”
              </blockquote>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.ctaContainer}>
        <Link to="/badges" className={styles.ctaButton}>
          Quiero Ganar Badges
        </Link>
      </div>
    </div>
  );
};

export default RankingPage;
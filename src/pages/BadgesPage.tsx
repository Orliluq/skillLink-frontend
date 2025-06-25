import React from 'react';
import { FaComments, FaProjectDiagram, FaUserGraduate, FaChalkboardTeacher, FaTrophy, FaStar } from 'react-icons/fa';
import styles from './BadgesPage.module.css';

const badgeRules = [
  {
    icon: <FaComments size={40} color="#4f46e5" />,
    title: "Comunidad Forera",
    description:
      "Comparte ideas, ayuda a otros y gana puntos por cada publicación o respuesta útil en el foro.",
    points: 10,
    condition: "1 publicación útil = 10 puntos"
  },
  {
    icon: <FaProjectDiagram size={40} color="#10b981" />,
    title: "Creador de Proyectos",
    description:
      "Crea proyectos colaborativos o personales y publícalos en tu perfil.",
    points: 50,
    condition: "1 proyecto publicado = 50 puntos"
  },
  {
    icon: <FaChalkboardTeacher size={40} color="#f59e0b" />,
    title: "Mentor Inspirador",
    description:
      "Impulsa a otros como mentor en sesiones o procesos de acompañamiento.",
    points: 75,
    condition: "1 mentoría guiada = 75 puntos"
  },
  {
    icon: <FaUserGraduate size={40} color="#3b82f6" />,
    title: "Aprendiz Apasionado",
    description:
      "Completa cursos disponibles en la plataforma y demuestra tu crecimiento.",
    points: 30,
    condition: "1 curso finalizado = 30 puntos"
  },
  {
    icon: <FaTrophy size={40} color="#ec4899" />,
    title: "Desafiante Constante",
    description: "Participa en retos de código, diseño o innovación.",
    points: 20,
    condition: "1 desafío completado = 20 puntos"
  },
  {
    icon: <FaStar size={40} color="#ec4899" />,
    title: "Desarrollador Estrella",
    description: "Participa en retos de código, diseño o innovación.",
    points: 50,
    condition: "1 desafío completado = 50 puntos"
  }
];

const BadgesPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Sistema de Badges y Puntos</h1>
      <p className={styles.intro}>
        En SkillLink, cada acción con propósito suma. Comparte, crea, guía y aprende para obtener puntos
        y desbloquear badges únicos que demuestran tu impacto en la comunidad. ¡Diviértete mientras creces!
      </p>

      <div className={styles.badgesGrid}>
        {badgeRules.map((badge, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.icon}>{badge.icon}</div>
            <h3 className={styles.title}>{badge.title}</h3>
            <p className={styles.description}>{badge.description}</p>
            <p className={styles.points}>⭐ {badge.points} puntos</p>
            <p className={styles.condition}><em>{badge.condition}</em></p>
          </div>
        ))}
      </div>

      <div className={styles.termsSection}>
        <h2 className={styles.termsTitle}>Términos y Condiciones</h2>
        <ul className={styles.termsList}>
          <li>Los puntos se suman automáticamente al completar una acción válida.</li>
          <li>No se otorgan puntos por actividades repetitivas o sin valor comunitario.</li>
          <li>Los badges pueden usarse como criterio para acceder a mentorías premium o becas.</li>
          <li>SkillLink se reserva el derecho de modificar puntajes o condiciones en caso de abuso del sistema.</li>
          <li>Los puntos y badges son personales e intransferibles.</li>
        </ul>
        <p className={styles.motivation}>¡Sé parte del cambio, suma valor y deja tu huella digital! 🚀</p>
      </div>
    </div>
  );
};

export default BadgesPage;
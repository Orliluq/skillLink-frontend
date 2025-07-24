import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa';
import styles from './ProfilePage.module.css';
import { ProjectStatus } from '../types/project.types'; // Asegúrate de tener esto si usas enums

const ProfilePage: React.FC = () => {
  const [profileData, setProfileData] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, /* setError */] = useState<string | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setProfileData({
        username: "orliluq",
        email: "orliluq@gmail.com",
        firstName: "Orli",
        lastName: "Dun",
        bio: "Nuevas fronteras:\n- Incursionando en IA & Machine Learning para potenciar mis aplicaciones.\n- Fusiono mis habilidades técnicas con comunicación, empatía y adaptabilidad para lograr resultados excepcionales.",
        totalPoints: 6200,
        createdAt: "2020-02-14T08:30:00Z",
        avatarUrl: "https://i.ibb.co/39dfKqmF/avatar.png",
        badges: ["🔥 Mentor Estrella", "🌟 Top 1 Colaborador", "🤝 Espíritu Comunitario"],
        social: {
          github: "https://github.com/orliluq",
          linkedin: "https://linkedin.com/in/orliluq",
          website: "https://orliluq.dev"
        },
        skills: [
          { skillId: 1, skillName: "JavaScript", proficiencyLevel: "Advanced" },
          { skillId: 2, skillName: "React", proficiencyLevel: "Intermediate" },
          { skillId: 3, skillName: "Node.js", proficiencyLevel: "Intermediate" },
          { skillId: 4, skillName: "Next.js", proficiencyLevel: "Intermediate" },
          { skillId: 5, skillName: "Nest.js", proficiencyLevel: "Intermediate" },
          { skillId: 6, skillName: "TypeScript", proficiencyLevel: "Intermediate" },
          { skillId: 7, skillName: "Java", proficiencyLevel: "Intermediate" },
          { skillId: 8, skillName: "Spring Boot", proficiencyLevel: "Intermediate" },
          { skillId: 9, skillName: "Python", proficiencyLevel: "Intermediate" },
          { skillId: 10, skillName: "IA/ML", proficiencyLevel: "Beginner" }
        ],
        experiences: [
          {
            id: 1,
            title: "Full Stack Developer",
            companyName: "TechCorp",
            description: "Diseño e implementación de interfaces dinámicas y desarrollo de APIs robustas, integrando tanto el frontend como el backend para crear aplicaciones web escalables.",
            startDate: "2019-03-01T00:00:00Z",
            endDate: "2021-12-31T00:00:00Z",
            isCurrent: false
          }
        ],
        projects: [
          {
            id: 1,
            title: "DevPortfolio Generator",
            image: "/images/projects/project1.png",
            description:
              "Aplicación para generar portfolios de desarrolladores automáticamente con tecnologías como React y TailwindCSS.",
            status: ProjectStatus.ACTIVE,
            createdAt: "2025-06-01T12:00:00Z",
            updatedAt: "2025-06-10T12:00:00Z",
          },
        ],
      });
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) return <div>Loading profile...</div>;
  if (error) return <div style={{ color: "red" }}>Error: {error}</div>;
  if (!profileData) return <div>No profile data found.</div>;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Mi Perfil</h2>
      <div className={styles.profileCard}>
        {profileData.avatarUrl && (
          <img
            src={profileData.avatarUrl}
            alt={`${profileData.username}'s avatar`}
            className={styles.avatar}
          />
        )}
        <div className={styles.info}>
          <p><strong>Username:</strong> {profileData.username}</p>
          <p><strong>Email:</strong> {profileData.email}</p>
          <p><strong>Nombre:</strong> {profileData.firstName || 'N/A'} {profileData.lastName || ''}</p>
          <p><strong>Bio:</strong><br />{profileData.bio || 'No bio yet.'}</p>
          <p><strong>Puntos Totales:</strong> 🌟 {profileData.totalPoints}</p>
          <p>
            <strong>Miembro desde:</strong>{' '}
            <span className={styles.smallText}>
              {new Date(profileData.createdAt).toLocaleDateString()}
            </span>
          </p>

          <div className={styles.socialLinks}>
            {profileData.social?.github && (
              <a href={profileData.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
            )}
            {profileData.social?.linkedin && (
              <a href={profileData.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            )}
            {profileData.social?.website && (
              <a href={profileData.social.website} target="_blank" rel="noopener noreferrer" aria-label="Website">
                <FaGlobe />
              </a>
            )}
          </div>

          <div className={styles.badgesContainer}>
            <h4 className={styles.sectionTitle}>Badges</h4>
            {profileData.badges && profileData.badges.length > 0 ? (
              <div className={styles.badges}>
                {profileData.badges.map((badge: string, i: number) => (
                  <span key={i} className={styles.badge}>{badge}</span>
                ))}
              </div>
            ) : (
              <p className={styles.message}>Aún no tienes insignias.</p>
            )}
          </div>
        </div>
      </div>

      <h3 className={styles.sectionTitle}>Mis Skills</h3>
      {profileData.skills && profileData.skills.length > 0 ? (
        <ul className={styles.list}>
          {profileData.skills.map((skill: any) => (
            <li key={skill.skillId} className={styles.listItem}>
              {skill.skillName} ({skill.proficiencyLevel || 'N/A'})
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.message}>No se han agregado habilidades aún.</p>
      )}

      <h3 className={styles.sectionTitle}>Experiencias Profesionales</h3>
      {profileData.experiences && profileData.experiences.length > 0 ? (
        <ul className={styles.list}>
          {profileData.experiences.map((exp: any) => (
            <li key={exp.id} className={styles.listItem}>
              <strong>{exp.title}</strong> en {exp.companyName || 'N/A'}
              {exp.description && <p>{exp.description}</p>}
              <small className={styles.smallText}>
                {exp.startDate ? new Date(exp.startDate).toLocaleDateString() : ''} -{' '}
                {exp.isCurrent ? 'Actualidad' : exp.endDate ? new Date(exp.endDate).toLocaleDateString() : ''}
              </small>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.message}>No hay experiencias aún.</p>
      )}
        <div className={styles.actions}>
      {/* Editar perfil */}
      <Link to="/profile/edit" className={styles.editLink}>
        Editar Perfil
      </Link>
       <Link to="/meetings" className={styles.editLink}>
        Ver Reuniones
      </Link>
      </div>
      {/* 🔧 NUEVA SECCIÓN: Mis Proyectos */}
      <h3 className={styles.sectionTitle}>Mis Proyectos</h3>
      {profileData.projects && profileData.projects.length > 0 ? (
        <div className={styles.projectsGrid}>
          {profileData.projects.map((project: any) => (
            <div key={project.id} className={styles.projectCard}>
              {project.image && (
                <img src={project.image} alt={project.title} className={styles.projectImage} />
              )}
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <p className={styles.smallText}>
                Estado: <strong>{project.status}</strong> <br />
                Creado: {new Date(project.createdAt).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className={styles.message}>No hay proyectos aún.</p>
      )}
     

      <div className={styles.actions}>
        <Link to="/projects/create" className={styles.button}>
          Crear Proyecto
        </Link>
        <Link to="/forum/create" className={styles.button}>
          Crear Tema de Foro
        </Link>
        <Link to="/meetings/create" className={styles.button}>
          Crear Reunión
        </Link>
        <Link to="/challenges/create" className={styles.button}>
          Crear Desafío
        </Link> 
        <Link to="/mentorships/create" className={styles.button}>
          Crear Mentoría
        </Link>
      </div>

     
    </div>
  );
};

export default ProfilePage;

import React from 'react';
import styles from './AboutPage.module.css';
import { FaRocket, FaLightbulb, FaBullseye, FaUsers, FaHandshake, FaArrowRight } from 'react-icons/fa';

const AboutPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}><FaRocket className={styles.icon} /> Acerca de SkillLink</h1>
        <p className={styles.subtitle}>
          Conectamos talento con oportunidades reales de crecimiento profesional.
        </p>
      </div>

      <div className={styles.card}>
        <h2 className={styles.heading}><FaLightbulb className={styles.icon} /> Nuestra Misión</h2>
        <p className={styles.text}>
          Democratizar el acceso a oportunidades laborales reales mediante proyectos colaborativos, mentoría personalizada y conexión directa con el ecosistema tech. En SkillLink, creemos que el talento necesita oportunidades, no títulos.
        </p>
      </div>

      <div className={styles.card}>
        <h2 className={styles.heading}><FaBullseye className={styles.icon} /> Nuestra Visión</h2>
        <p className={styles.text}>
          Ser la comunidad líder en LATAM donde aprender haciendo, conectar con mentores y crear un portafolio sólido no sea un privilegio, sino un derecho para quienes sueñan con crecer en tecnología.
        </p>
      </div>

      <div className={styles.card}>
        <h2 className={styles.heading}><FaBullseye className={styles.icon} /> Objetivos</h2>
        <ul className={styles.list}>
          <li><FaHandshake className={styles.bulletIcon} /> Facilitar encuentros entre talentos emergentes y profesionales experimentados.</li>
          <li><FaRocket className={styles.bulletIcon} /> Promover el aprendizaje práctico con proyectos reales y retos colaborativos.</li>
          <li><FaLightbulb className={styles.bulletIcon} /> Brindar herramientas para desarrollar portafolios sólidos y currículums impactantes.</li>
          <li><FaUsers className={styles.bulletIcon} /> Crear una red inclusiva, diversa y de apoyo para el crecimiento profesional continuo.</li>
        </ul>
      </div>

      <div className={styles.card}>
        <h2 className={styles.heading}><FaUsers className={styles.icon} /> Nuestra Comunidad</h2>
        <p className={styles.text}>
          SkillLink está formado por estudiantes, profesionales, autodidactas, mentores, empresas y facilitadores que creen en el poder del conocimiento compartido. Aquí no importa de dónde venís, sino hacia dónde querés ir.
        </p>
        <p className={styles.quote}>
          “Cuando una comunidad crece, no solo cambia la vida de sus miembros… cambia el futuro del ecosistema.”
        </p>
      </div>

      <div className={`${styles.card} ${styles.cta}`}>
        <h3 className={styles.ctaTitle}><FaArrowRight className={styles.icon} /> ¿Listo para conectar, crear y crecer?</h3>
        <p>Únete a nuestra comunidad y comenzá tu viaje con propósito.</p>
        <a href="/contact" className={styles.ctaButton}>Quiero saber más</a>
      </div>
    </div>
  );
};

export default AboutPage;

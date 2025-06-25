// src/pages/HowItWorksPage.tsx
import React from 'react';
import styles from './HowItWorksPage.module.css';
// Opcional: importa iconos si los vas a usar
// import { FaUserPlus, FaSearch, FaComments, FaProjectDiagram, FaMedal } from 'react-icons/fa';

interface Step {
    id: number;
    // icon?: React.ElementType; // Para usar componentes de icono
    iconPlaceholder?: string; // Placeholder si no usas react-icons ahora
    title: string;
    description: string;
}

const stepsData: Step[] = [
    {
        id: 1,
        iconPlaceholder: "👤+", // FaUserPlus
        title: "1. Regístrate y Crea tu Perfil",
        description: "Únete a SkillLink de forma gratuita. Completa tu perfil destacando tus habilidades, experiencia e intereses para que otros puedan encontrarte."
    },
    {
        id: 2,
        iconPlaceholder: "🔍", // FaSearch
        title: "2. Explora Oportunidades",
        description: "Descubre proyectos colaborativos, desafíos para mejorar tus habilidades, o perfiles de mentores afines a tus metas profesionales."
    },
    {
        id: 3,
        iconPlaceholder: "🤝", // FaHandshake
        title: "3. Conecta con Personas Clave",
        description: "Envía solicitudes, únete a equipos o solicita mentoría. Construye relaciones valiosas que impulsen tu desarrollo."
    },
    {
        id: 4,
        iconPlaceholder: "💬", // FaComments
        title: "4. Colabora y Comunícate",
        description: "Utiliza las herramientas de SkillLink para trabajar en equipo, resolver dudas en tiempo real y avanzar hacia objetivos compartidos."
    },
    {
        id: 5,
        iconPlaceholder: "🚀", // FaRocket
        title: "5. Crea, Aprende y Comparte",
        description: "Participa activamente. Comparte tus conocimientos, recibe retroalimentación, y crece con cada proyecto o desafío completado."
    },
    {
        id: 6,
        iconPlaceholder: "🏆", // FaMedal
        title: "6. Impulsa tu Carrera",
        description: "Gana visibilidad, mejora tu reputación, y alcanza tus metas profesionales a través del impacto real de tus colaboraciones en la plataforma."
    }
];

const HowItWorksPage: React.FC = () => {
    return (
        <div className={styles.pageContainer}>
            <header className={styles.pageHeader}>
                <h1>¿Cómo Funciona SkillLink?</h1>
                <p>Te guiamos paso a paso para que aproveches al máximo nuestra plataforma.</p>
            </header>

            <section className={styles.stepsSection}>
                <div className={styles.stepsGrid}>
                    {stepsData.map((step) => (
                        <div key={step.id} className={styles.stepCard}>
                            <div className={styles.stepIconWrapper}>
                                {/* {step.icon && <step.icon className={styles.stepIcon} />} */}
                                <span className={styles.stepIconPlaceholder}>{step.iconPlaceholder}</span>
                            </div>
                            <h3 className={styles.stepTitle}>{step.title}</h3>
                            <p className={styles.stepDescription}>{step.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className={styles.ctaSection}>
                <h2>¿Listo para comenzar?</h2>
                <p>Tu viaje hacia nuevas habilidades y conexiones empieza ahora.</p>
                <a href="/register" className={styles.ctaButton}>
                    Únete a SkillLink
                </a>
            </section>
        </div>
    );
};

export default HowItWorksPage;
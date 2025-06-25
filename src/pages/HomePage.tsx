import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import HeroSlider from '../components/home/HeroSlider'; // Importa el slider
import styles from './HomePage.module.css'; // Tus estilos existentes para HomePage
import StatsSection from '../components/home/StatsSection';
import Testimonials from '../components/home/Testimonials';
import PartnersSlider from '../components/home/PartnersSlider';
import CallToAction from '../components/home/CallToAction';
import { FaLightbulb, FaProjectDiagram, FaPuzzlePiece } from 'react-icons/fa';
import NewsletterCTA from '../components/home/NewsletterCTA';

const HomePage: React.FC = () => {
    const { isAuthenticated, /* user */ } = useAuth();

    return (
        <div className={styles.homePage}>
            <HeroSlider /> {/* Reemplaza la sección hero con el slider */}

            {/* Podrías añadir un CTA debajo del slider si quieres */}
            {!isAuthenticated && (
                 <div className={styles.belowSliderCtaContainer}> {/* Contenedor para centrar/estilizar */}
                    <Link to="/register" className={styles.ctaButton}> {/* Asegúrate que esta clase exista en HomePage.module.css */}
                        ¡Únete Ahora y Transforma tu Carrera!
                    </Link>
                 </div>
            )}

            <section className={styles.featuresSection}>
                <h2 className={styles.sectionHeading}>Descubre lo que SkillLink te ofrece</h2> {/* Clase más genérica */}
                <div className={styles.featuresGrid}>
                    <div className={styles.featureCard}> {/* Cambiado de featureItem a featureCard */}
                        {/* Puedes añadir un icono aquí */}
                        <FaLightbulb className={styles.featureIcon} />
                        <h3 className={styles.cardTitle}>Comparte Conocimientos</h3>
                        <p className={styles.cardText}>Encuentra mentores o conviértete en uno para guiar a otros en su camino profesional.</p>
                    </div>
                    <div className={styles.featureCard}>
                       <FaProjectDiagram className={styles.featureIcon} />
                        <h3 className={styles.cardTitle}>Colabora en Proyectos</h3>
                        <p className={styles.cardText}>Únete a proyectos innovadores, aplica tus habilidades y aprende trabajando en equipo.</p>
                    </div>
                    <div className={styles.featureCard}>
                        <FaPuzzlePiece className={styles.featureIcon} />
                        <h3 className={styles.cardTitle}>Supera Desafíos</h3>
                        <p className={styles.cardText}>Pon a prueba tus límites con nuestros desafíos interactivos y gana reconocimiento.</p>
                    </div>
                </div>
            </section>

            <StatsSection />
            <Testimonials />
            <PartnersSlider />
            <CallToAction />
            <NewsletterCTA />
        </div>
    );
};

export default HomePage;
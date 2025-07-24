import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CallToAction.module.css';
import { useAuth } from '../../contexts/AuthContext';

const CallToAction: React.FC = () => {
    const { isAuthenticated } = useAuth();

    return (
        <section className={styles.ctaSection}>
            <div className={styles.ctaContent}>
                <h2 className={styles.ctaTitle}>¿Listo para impulsar tu potencial?</h2>
                <p className={styles.ctaSubtitle}>
                    Únete a miles de profesionales y estudiantes que están transformando su futuro con SkillLink.
                </p>
                {isAuthenticated ? (
                    <Link to="/dashboard" className={styles.ctaButton}> {/* O a /profile/me */}
                        Ir a mi Panel
                    </Link>
                ) : (
                    <Link to="/register" className={styles.ctaButton}>
                        Regístrate Gratis
                    </Link>
                )}
            </div>
        </section>
    );
};

export default CallToAction;
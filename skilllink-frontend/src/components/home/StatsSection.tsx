// src/components/home/StatsSection.tsx
import React, { useEffect, useState, useRef } from 'react';
import styles from './StatsSection.module.css';
// Opcional: un hook para detectar si el elemento está visible para animar los números
// import { useInView } from 'react-intersection-observer'; 

interface StatItem {
    id: string;
    value: number;
    label: string;
    suffix?: string; // Como '+' o 'K'
}

const statsData: StatItem[] = [
    { id: "users", value: 1500, label: "Usuarios Activos", suffix: "+" },
    { id: "projects", value: 350, label: "Proyectos Completados", suffix: "+" },
    { id: "mentors", value: 200, label: "Mentores Disponibles", suffix: "+" },
    { id: "challenges", value: 500, label: "Desafíos Superados", suffix: "+" }
];

// Hook simple para animar números (puedes usar librerías para animaciones más complejas)
const useAnimatedCount = (targetValue: number, duration: number = 1500, startAnimation: boolean) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!startAnimation) return;

        let startTimestamp: number | null = null;
        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * targetValue));
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }, [targetValue, duration, startAnimation]);

    return count;
};


const StatCard: React.FC<StatItem & { startAnimation: boolean }> = ({ value, label, suffix, startAnimation }) => {
    const animatedValue = useAnimatedCount(value, 2000, startAnimation);
    return (
        <div className={styles.statCard}>
            <div className={styles.statValue}>{animatedValue}{suffix}</div>
            <div className={styles.statLabel}>{label}</div>
        </div>
    );
};


const StatsSection: React.FC = () => {
    // Para activar la animación cuando la sección es visible (usando Intersection Observer)
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target); // Observar solo una vez
                }
            },
            {
                root: null, // viewport
                rootMargin: '0px',
                threshold: 0.3 // Cuando el 30% del elemento es visible
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);


    return (
        <section className={styles.statsSection} ref={sectionRef}>
            <div className={styles.sectionContainer}>
                <h2 className={styles.sectionTitle}>SkillLink en Números</h2>
                <div className={styles.statsGrid}>
                    {statsData.map((stat) => (
                        <StatCard key={stat.id} {...stat} startAnimation={isVisible} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
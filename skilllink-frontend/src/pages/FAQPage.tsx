// src/pages/FAQPage.tsx
import React, { useState } from 'react';
import styles from './FAQPage.module.css';
// Opcional: icono para el acordeón
// import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface FAQItem {
    id: string; // Para la key y el control del acordeón
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        id: 'q1',
        question: '¿Qué es SkillLink?',
        answer: 'SkillLink es una plataforma web diseñada para conectar a profesionales y estudiantes, permitiéndoles compartir conocimientos, colaborar en proyectos, recibir mentorías y mejorar sus habilidades a través de desafíos interactivos.'
    },
    {
        id: 'q2',
        question: '¿Cómo puedo encontrar un mentor?',
        answer: 'Puedes explorar nuestra sección de "Mentorías", filtrar por área de especialización o habilidad, y revisar los perfiles de los mentores disponibles. Luego, puedes enviar una solicitud de mentoría.'
    },
    {
        id: 'q3',
        question: '¿Unirme a SkillLink tiene algún costo?',
        answer: 'El registro básico y el acceso a muchas funcionalidades de SkillLink son gratuitos. Podríamos introducir planes premium con características avanzadas en el futuro.'
    },
    {
        id: 'q4',
        question: '¿Cómo funcionan los proyectos colaborativos?',
        answer: 'Los usuarios pueden crear proyectos y buscar colaboradores, o unirse a proyectos existentes. La plataforma facilita la comunicación y gestión de tareas dentro del equipo del proyecto.'
    },
    // Añade más preguntas y respuestas
];

const FAQAccordionItem: React.FC<{ item: FAQItem; isOpen: boolean; onClick: () => void }> = ({ item, isOpen, onClick }) => {
    return (
        <div className={styles.faqItem}>
            <button className={styles.faqQuestion} onClick={onClick} aria-expanded={isOpen}>
                {item.question}
                <span className={`${styles.faqIcon} ${isOpen ? styles.open : ''}`}>
                    {/* {isOpen ? <FaChevronUp /> : <FaChevronDown />} */}
                    {isOpen ? '−' : '+'}
                </span>
            </button>
            {isOpen && (
                <div className={styles.faqAnswer}>
                    <p>{item.answer}</p>
                </div>
            )}
        </div>
    );
};

const FAQPage: React.FC = () => {
    const [openQuestionId, setOpenQuestionId] = useState<string | null>(null);

    const handleToggleQuestion = (id: string) => {
        setOpenQuestionId(openQuestionId === id ? null : id);
    };

    return (
        <div className={styles.pageContainer}>
            <header className={styles.pageHeader}>
                <h1>Preguntas Frecuentes (FAQ)</h1>
                <p>Encuentra respuestas a las dudas más comunes sobre SkillLink.</p>
            </header>

            <section className={styles.faqList}>
                {faqData.map((item) => (
                    <FAQAccordionItem
                        key={item.id}
                        item={item}
                        isOpen={openQuestionId === item.id}
                        onClick={() => handleToggleQuestion(item.id)}
                    />
                ))}
            </section>
        </div>
    );
};

export default FAQPage;
// src/pages/NotFoundPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css'; // Importaremos el CSS Module

const NotFoundPage: React.FC = () => {
    return (
        <div className={styles.notFoundContainer}>
            <div className={styles.errorCode}>404</div>
            <h1 className={styles.title}>Página no Encontrada</h1>
            <p className={styles.message}>
                Oops! Parece que la página que buscas se ha perdido en el ciberespacio.
            </p>
            <Link to="/" className={styles.homeButton}>
                Volver al Inicio
            </Link>
        </div>
    );
};

export default NotFoundPage;
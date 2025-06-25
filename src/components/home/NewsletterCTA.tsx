import React, { useState } from 'react';
import styles from './NewsletterCTA.module.css';
import { NavLink } from 'react-router-dom';

const NewsletterCTA: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Aquí podrías hacer una llamada a tu backend o a un servicio como Mailchimp
    console.log('Subscribed:', email);
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaContent}>
        <h2 className={styles.ctaTitle}>Únete a nuestra Newsletter</h2>
        <p className={styles.ctaText}>
          Recibe inspiración, recursos y novedades directamente en tu bandeja de entrada.
        </p>
        {submitted ? (
          <p className={styles.successMessage}>¡Gracias por suscribirte! 💌</p>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <NavLink to="/contact">
            <button type="submit" className={styles.ctaButton}>
              Suscribirme
            </button>
            </NavLink>
            
          </form>
        )}
      </div>
    </section>
  );
};

export default NewsletterCTA;

import React, { useState } from 'react';
import styles from './ContactPage.module.css';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus('sending');
    setError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Error al enviar el mensaje.');

      setStatus('sent');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err: any) {
      setStatus('error');
      setError(err.message || 'Hubo un error.');
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Contáctanos</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Tu nombre"
          value={formData.name}
          onChange={handleChange}
          required
          className={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Tu correo"
          value={formData.email}
          onChange={handleChange}
          required
          className={styles.input}
        />
        <input
          type="text"
          name="subject"
          placeholder="Asunto"
          value={formData.subject}
          onChange={handleChange}
          required
          className={styles.input}
        />
        <textarea
          name="message"
          placeholder="Tu mensaje"
          value={formData.message}
          onChange={handleChange}
          required
          className={styles.textarea}
        ></textarea>

        <button type="submit" className={styles.button} disabled={status === 'sending'}>
          {status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
        </button>

        {status === 'sent' && <p className={styles.success}>✅ ¡Mensaje enviado correctamente!</p>}
        {status === 'error' && <p className={styles.error}>❌ {error}</p>}
      </form>
    </div>
  );
};

export default ContactPage;

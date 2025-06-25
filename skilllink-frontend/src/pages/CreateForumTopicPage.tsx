import React, { useState } from 'react';
import styles from './CreateForumTopicPage.module.css';
import { useNavigate } from 'react-router-dom';

const CreateForumTopicPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    category: '',
    relatedEntityType: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('📤 Enviado:', formData);
    // Aquí deberías enviar el formulario al backend
    navigate('/forum'); // Redirigir luego de crear
  };

  return (
    <div className={styles.page}>
      <h2 className={styles.title}>Crear Nuevo Tema en el Foro</h2>

      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>Título del Tema</label>
        <input
          type="text"
          name="title"
          placeholder="Ej: ¿Cómo empezar con inteligencia artificial?"
          value={formData.title}
          onChange={handleChange}
          className={styles.input}
          required
        />

        <label className={styles.label}>Categoría</label>
        <input
          type="text"
          name="category"
          placeholder="Ej: IA, DevOps, Entrevistas"
          value={formData.category}
          onChange={handleChange}
          className={styles.input}
          required
        />

        <label className={styles.label}>Tipo de Entidad Relacionada</label>
        <select
          name="relatedEntityType"
          value={formData.relatedEntityType}
          onChange={handleChange}
          className={styles.select}
          required
        >
          <option value="">Seleccionar...</option>
          <option value="PROJECT">🧪 Proyecto</option>
          <option value="MENTORSHIP">🧭 Mentoría</option>
          <option value="CHALLENGE">🏁 Desafío</option>
        </select>

        <label className={styles.label}>Descripción</label>
        <textarea
          name="description"
          rows={6}
          placeholder="Cuéntanos más sobre este tema..."
          value={formData.description}
          onChange={handleChange}
          className={styles.textarea}
          required
        />

        <button type="submit" className={styles.button}>
          Publicar Tema
        </button>
      </form>
    </div>
  );
};

export default CreateForumTopicPage;

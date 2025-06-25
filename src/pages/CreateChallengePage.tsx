import React, { useState } from 'react';
import styles from './CreateChallengePage.module.css';
import { useNavigate } from 'react-router-dom';

const CreateChallengePage: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: '',
    description: '',
    difficulty: 'Medium',
    tags: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simulación de envío
    console.log('Challenge creado:', form);
    alert('¡Desafío creado con éxito!');
    navigate('/challenges'); // Redirige a la lista de desafíos
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Crear Nuevo Desafío</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          Título:
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Ej: Optimiza esta función..."
            required
          />
        </label>

        <label>
          Descripción:
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Explica el objetivo del desafío y los criterios de éxito..."
            required
          />
        </label>

        <label>
          Dificultad:
          <select name="difficulty" value={form.difficulty} onChange={handleChange}>
            <option value="Easy">Fácil</option>
            <option value="Medium">Media</option>
            <option value="Hard">Difícil</option>
          </select>
        </label>

        <label>
          Etiquetas (separadas por coma):
          <input
            type="text"
            name="tags"
            value={form.tags}
            onChange={handleChange}
            placeholder="React, lógica, recursividad"
          />
        </label>

        <button type="submit" className={styles.submitButton}>Publicar Desafío</button>
      </form>
    </div>
  );
};

export default CreateChallengePage;
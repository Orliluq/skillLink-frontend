import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as projectService from '../services/projectService';  // Asume que este servicio existe
import { useAuth } from '../contexts/AuthContext';
import styles from './CreateProjectPage.module.css';  // Estilos específicos para esta página
import type { ProjectStatus } from '../types/project.types'; // Asegúrate de importar el tipo correctamente

const CreateProjectPage: React.FC = () => {
  const { user, isAuthenticated } = useAuth();  // Obtener usuario autenticado
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState<ProjectStatus>("PLANNING");  // Usar el valor directamente
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Verificar si el usuario está autenticado antes de permitir la creación de un proyecto
  if (!isAuthenticated) {
    return <p>You need to be logged in to create a project.</p>;
  }

  const handleCreateProject = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !description) {
      setError('Title and description are required.');
      return;
    }

    const projectData = {
      title,
      description,
      status,
      creatorId: user?.id,
    };

    setIsLoading(true);
    setError(null);

    try {
      const newProject = await projectService.createProject(projectData);  // Asume que este método existe en projectService.ts
      navigate(`/projects/${newProject.id}`);  // Redirige al detalle del proyecto
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to create project.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Crear Nuevo Proyecto</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleCreateProject} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="title" className={styles.label}>Titulo del Proyecto:</label>
          <input
            type="text"
            id="title"
            className={styles.input}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter project title"
            disabled={isLoading}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="description" className={styles.label}>Descripción del Proyecto:</label>
          <textarea
            id="description"
            className={styles.textarea}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter project description"
            disabled={isLoading}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="status" className={styles.label}>Estado del Proyecto:</label>
          <select
            id="status"
            className={styles.select}
            value={status}
            onChange={(e) => setStatus(e.target.value as unknown as ProjectStatus)}  // Usar los valores directamente
            disabled={isLoading}
          >
            <option value="PLANNING">Planning</option>
            <option value="ACTIVE">Active</option>
            <option value="COMPLETED">Completed</option>
            <option value="ARCHIVED">Archived</option>
          </select>
        </div>
        <button type="submit" className={styles.submitButton} disabled={isLoading}>
          {isLoading ? 'Creating...' : 'Crear Proyecto'}
        </button>
      </form>
    </div>
  );
};

export default CreateProjectPage;



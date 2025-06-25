import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as projectService from '../services/projectService';
import styles from './CreateProjectPage.module.css';

// Define ProjectStatus como un objeto readonly
const ProjectStatus = {
    PLANNING: 'PLANNING',
    ACTIVE: 'ACTIVE',
    COMPLETED: 'COMPLETED',
    ARCHIVED: 'ARCHIVED'
} as const;

// Tipo para valores de ProjectStatus
type ProjectStatusType = typeof ProjectStatus[keyof typeof ProjectStatus];

const CreateProjectPage: React.FC = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState<ProjectStatusType>(ProjectStatus.PLANNING);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError(null);
        setIsLoading(true);

        if (!title.trim() || !description.trim()) {
            setError('Title and description are required.');
            setIsLoading(false);
            return;
        }

        const projectData = { title, description, status };

        try {
            const createdProject = await projectService.createProject(projectData);
            navigate(`/projects/${createdProject.id}`); // Redirigir al proyecto creado
        } catch (err: any) {
            setError(err.response?.data?.message || err.message || 'Failed to create project.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Crear Nuevo Proyecto</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="title" className={styles.label}>Titulo del Proyecto:</label>
                    <input
                        type="text"
                        id="title"
                        className={styles.input}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
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
                        required
                        rows={5}
                        disabled={isLoading}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="status" className={styles.label}>Estado del Proyecto:</label>
                    <select
                        id="status"
                        className={styles.select}
                        value={status}
                        onChange={(e) => setStatus(e.target.value as ProjectStatusType)}
                        disabled={isLoading}
                    >
                        {Object.values(ProjectStatus).map((s) => (
                            <option key={s} value={s}>
                                {s}
                            </option>
                        ))}
                    </select>
                </div>
                {error && <p className={styles.errorMessage}>{error}</p>}
                <button
                    type="submit"
                    disabled={isLoading}
                    className={styles.submitButton}
                >
                    {isLoading ? 'Creating...' : 'Crear Proyecto'}
                </button>
            </form>
        </div>
    );
};

export default CreateProjectPage;
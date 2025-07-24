// src/pages/PublicProjectsPage.tsx
import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { type ProjectDTO, type Page, ProjectStatus } from '../types';
import styles from './PublicProjectsPage.module.css';

interface PaginationState {
  pageNumber: number;
  pageSize: number;
}

const mockProjects: ProjectDTO[] = [
  {
    id: 1,
    image: '/images/projects/chatbot.png', // Imagen para el proyecto
    title: 'Open Source Chatbot',
    description: 'Un chatbot comunitario para asistencia educativa.',
    status: ProjectStatus.ACTIVE,
    creator: {
      id: 1, username: 'orli',
      email: ''
    },
    createdAt: '2025-06-01T12:00:00Z',
    updatedAt: '2025-06-05T12:00:00Z',
    members: [],
  },
  {
    id: 2,
    image: '/images/projects/visual.png', // Imagen para el proyecto
    title: 'Visual Portfolio Builder',
    description: 'Generador de portafolios interactivos para developers.',
    status: ProjectStatus.COMPLETED,
    creator: {
      id: 2, username: 'lucasdev',
      email: ''
    },
    createdAt: '2025-05-20T08:30:00Z',
    updatedAt: '2025-06-03T14:12:00Z',
    members: [],
  },
  {
    id: 3,
    image: '/images/projects/health.png', // Imagen para el proyecto
    title: 'Mental Health Tracker',
    description: 'App open source para seguimiento de bienestar emocional.',
    status: ProjectStatus.PLANNING,
    creator: {
      id: 3, username: 'anahealth',
      email: ''
    },
    createdAt: '2025-06-10T09:45:00Z',
    updatedAt: '2025-06-11T10:00:00Z',
    members: [],
  },
];

const PublicProjectsPage: React.FC = () => {
  const [projectsPage, setProjectsPage] = useState<Page<ProjectDTO> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [pagination, setPagination] = useState<PaginationState>({
    pageNumber: 0,
    pageSize: 2,
  });

  const fetchMockedProjects = useCallback(() => {
    setIsLoading(true);

    setTimeout(() => {
      const start = pagination.pageNumber * pagination.pageSize;
      const end = start + pagination.pageSize;
      const paginated = mockProjects.slice(start, end);

      const mockPage: Page<ProjectDTO> = {
        content: paginated,
        totalPages: Math.ceil(mockProjects.length / pagination.pageSize),
        totalElements: mockProjects.length,
        number: pagination.pageNumber,
        size: pagination.pageSize,
        first: pagination.pageNumber === 0,
        last: end >= mockProjects.length,
        numberOfElements: paginated.length,
        pageable: {
          offset: start,
          pageSize: pagination.pageSize,
          pageNumber: pagination.pageNumber,
          paged: true,
          unpaged: false,
          sort: { empty: true, sorted: false, unsorted: true },
        },
        sort: { empty: true, sorted: false, unsorted: true },
        empty: paginated.length === 0,
        isLast: end >= mockProjects.length
      };

      setProjectsPage(mockPage);
      setIsLoading(false);
    }, 800);
  }, [pagination]);

  useEffect(() => {
    fetchMockedProjects();
  }, [fetchMockedProjects]);

  const handlePageChange = (newPageNumber: number) => {
    setPagination(prev => ({ ...prev, pageNumber: newPageNumber }));
  };

  if (isLoading) return <p className={styles.message}>Cargando proyectos públicos...</p>;
  if (!projectsPage || projectsPage.content.length === 0) {
    return <p className={styles.message}>No hay proyectos públicos disponibles.</p>;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Proyectos Open Source</h2>
      <div className={styles.projectsList}>
        {projectsPage.content.map(project => (
          <div key={project.id} className={styles.projectCard}>
            {/* Imagen del proyecto */}
            {project.image && (
              <div
                className={styles.projectCardImage}
                style={{ backgroundImage: `url(${project.image})` }}
              />
            )}
            <h3 className={styles.projectCardTitle}>
              <Link to={`/projects/${project.id}`}>{project.title}</Link>
            </h3>
            <p className={styles.projectCardDesc}>
              {project.description?.substring(0, 100)}...
            </p>
            <p className={styles.projectCardInfo}>
              Estado: <strong>{project.status}</strong>
            </p>
            <p className={styles.projectCardInfo}>
              Creador: {project.creator?.username || 'N/A'}
            </p>
            <small className={styles.projectCardSmall}>
              Creado: {new Date(project.createdAt).toLocaleDateString()}
            </small>
          </div>
        ))}
      </div>

      <div className={styles.pagination}>
      <button
 onClick={() => handlePageChange(pagination.pageNumber - 1)}
 disabled={projectsPage.first}
 className={styles.paginationButton}
>
  ← Anterior
</button>

<span className={styles.paginationInfo}>
  Página {projectsPage.number + 1} de {projectsPage.totalPages}
</span>

<button
 onClick={() => handlePageChange(pagination.pageNumber + 1)}
 disabled={projectsPage.last}
 className={styles.paginationButton}
>
  Siguiente →
</button>
      </div>
    </div>
  );
};

export default PublicProjectsPage;

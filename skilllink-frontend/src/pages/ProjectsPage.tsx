import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import styles from './ProjectsPage.module.css';
import { useAuth } from '../contexts/AuthContext'; // Para manejar autenticación
import { type ProjectSummaryDTO, type Page, ProjectStatus } from '../types';

// Define types for pagination and sorting parameters
interface PaginationState {
    pageNumber: number;
    pageSize: number;
}

const ProjectsPage: React.FC = () => {
    const { isAuthenticated } = useAuth(); // Verificar si el usuario está autenticado
    const [projectsPage, setProjectsPage] = useState<Page<ProjectSummaryDTO> | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [pagination, setPagination] = useState<PaginationState>({
        pageNumber: 0,
        pageSize: 10,
    });

    // Hardcoded mock data with correct ProjectStatus values
    const mockProjects: ProjectSummaryDTO[] = [
        {
          id: 1,
          title: "DevPortfolio Generator",
          image: "/images/projects/project1.png",
          description: "Aplicación para generar portfolios de desarrolladores automáticamente con tecnologías como React y TailwindCSS.",
          status: ProjectStatus.ACTIVE,
          creator: {
              id: 1, username: "orli",
              email: ''
          },
          createdAt: "2025-06-01T12:00:00Z",
          updatedAt: "2025-06-10T12:00:00Z",
        },
        {
          id: 2,
          title: "Plataforma de Cursos con NestJS",
          image: "/images/projects/project2.png",
          description: "Backend modular y escalable para gestionar cursos, usuarios y pagos usando NestJS, PostgreSQL y JWT.",
          status: ProjectStatus.PLANNING,
          creator: {
              id: 2, username: "sofia",
              email: ''
          },
          createdAt: "2025-06-03T09:00:00Z",
          updatedAt: "2025-06-11T10:00:00Z",
        },
        {
          id: 3,
          title: "Chatbot de Finanzas Personales",
          image: "/images/projects/project3.png",
          description: "Asistente virtual con IA para ayudar a los usuarios a organizar sus gastos mensuales y dar consejos financieros.",
          status: ProjectStatus.COMPLETED,
          creator: {
              id: 3, username: "lucas",
              email: ''
          },
          createdAt: "2025-05-10T08:30:00Z",
          updatedAt: "2025-06-01T13:45:00Z",
        },
        {
          id: 4,
          title: "Marketplace de Servicios Freelance",
          image: "/images/projects/project4.png",
          description: "Plataforma fullstack para conectar freelancers con empresas que buscan contratar desarrolladores.",
          status: ProjectStatus.ACTIVE,
          creator: {
              id: 4, username: "valentina",
              email: ''
          },
          createdAt: "2025-06-06T11:00:00Z",
          updatedAt: "2025-06-11T18:00:00Z",
        },
        {
          id: 5,
          title: "Sistema de Control de Inventario",
          image: "/images/projects/project5.png",
          description: "App empresarial para gestionar productos, stock y compras en tiempo real, desarrollada en React y Firebase.",
          status: ProjectStatus.PLANNING,
          creator: {
              id: 5, username: "marco",
              email: ''
          },
          createdAt: "2025-06-09T15:20:00Z",
          updatedAt: "2025-06-11T09:00:00Z",
        },
        {
          id: 6,
          title: "API RESTful para CVs Inteligentes",
          image: "/images/projects/project6.png",
          description: "Servicio backend que recibe, analiza y mejora currículums mediante IA, desarrollado con Flask y GPT APIs.",
          status: ProjectStatus.COMPLETED,
          creator: {
              id: 6, username: "emilia",
              email: ''
          },
          createdAt: "2025-05-20T10:00:00Z",
          updatedAt: "2025-06-04T14:30:00Z",
        },
      ];            
  
    // Lógica para obtener proyectos de forma simulada
    const fetchProjects = useCallback(() => {
        setIsLoading(true);
        setError(null);
        try {
            // Simulando llamada API con timeout
            setTimeout(() => {
                const page: Page<ProjectSummaryDTO> = {
                    content: mockProjects,
                    pageable: {
                        pageNumber: pagination.pageNumber,
                        pageSize: pagination.pageSize,
                        sort: {
                            sorted: false,
                            unsorted: true,
                            empty: true
                        },
                        offset: 0,
                        paged: true,
                        unpaged: false
                    },
                    last: true,
                    totalPages: 1,
                    totalElements: mockProjects.length,
                    size: pagination.pageSize,
                    number: pagination.pageNumber,
                    sort: {
                        sorted: false,
                        unsorted: true,
                        empty: true
                    },
                    first: pagination.pageNumber === 0,
                    numberOfElements: mockProjects.length,
                    empty: false,
                    isLast: true
                };
                setProjectsPage(page);
            }, 1000);
        } catch (err: any) {
            setError(err.message || 'Failed to fetch projects.');
        } finally {
            setIsLoading(false);
        }
    }, [pagination]);

    useEffect(() => {
        fetchProjects();
    }, [fetchProjects]);

    const handlePageChange = (newPage: number) => {
        setPagination(prev => ({
            ...prev,
            pageNumber: newPage,
        }));
    };

    if (isLoading) {
        return <div>Loading projects...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!projectsPage) {
        return <div>No projects found</div>;
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Proyectos</h2>
            {isAuthenticated && (
                <Link to="/projects/create" className={styles.createButton}>
                    Crear nuevo proyecto
                </Link>
            )}
            <div className={styles.projectsList}>
                {projectsPage.content.map(project => (
                    <div key={project.id} className={styles.projectCard}>
                        <img src={project.image} alt={project.title} className={styles.projectCardImage} />
                        <h3 className={styles.projectCardTitle}>
                            <Link to={`/projects/${project.id}`}>{project.title}</Link>
                        </h3>
                        <p className={styles.projectCardDesc}>
                            {project.description?.substring(0, 100)}...
                        </p>
                        <p className={styles.projectCardInfo}>Status: {project.status}</p>
                        <p className={styles.projectCardInfo}>
                            Creator: {project.creator?.username || 'N/A'}
                        </p>
                        <small className={styles.projectCardSmall}>
                            Created: {new Date(project.createdAt).toLocaleDateString()}
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

export default ProjectsPage;

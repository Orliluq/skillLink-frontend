import /* React, */ { useState } from "react";
import styles from "./ForumPage.module.css";
import { LucideMessageSquare, LucideRocket, LucideUsers } from "lucide-react";

const forumTopics = [
  {
    id: 1,
    title: "¿Cómo empezar en Inteligencia Artificial?",
    creator: { username: "aurora_dev" },
    category: { name: "IA" },
    relatedEntityType: "MENTORSHIP",
    createdAt: "2025-06-20",
    lastReplyAt: "2025-06-23",
    postCount: 12,
  },
  {
    id: 2,
    title: "Optimización de pipelines CI/CD con GitHub Actions",
    creator: { username: "felix.api" },
    category: { name: "DevOps" },
    relatedEntityType: "PROJECT",
    createdAt: "2025-06-18",
    lastReplyAt: "2025-06-22",
    postCount: 8,
  },
  {
    id: 3,
    title: "Consejos para entrevistas técnicas FAANG",
    creator: { username: "leo.backend" },
    category: { name: "Entrevistas" },
    relatedEntityType: "CHALLENGE",
    createdAt: "2025-06-10",
    lastReplyAt: "2025-06-20",
    postCount: 17,
  },
  // Agregar más temas si es necesario
];

const ForumPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 2; // Número de temas por página

  const handlePageChange = (direction: string) => {
    if (direction === "next") {
      setCurrentPage((prevPage) => prevPage + 1);
    } else if (direction === "prev") {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  // Paginación de los temas
  const paginatedTopics = forumTopics.slice(currentPage * pageSize, (currentPage + 1) * pageSize);

  return (
    <div className={styles.forumContainer}>
      <h1 className={styles.title}>Comunidad SkillLink: Foro Galáctico</h1>
      <div className={styles.grid}>
        {paginatedTopics.map((topic) => (
          <div key={topic.id} className={styles.card}>
            <div className={styles.iconHeader}>
              <LucideMessageSquare size={20} />
              <span className={styles.category}>{topic.category?.name}</span>
            </div>
            <h3 className={styles.topicTitle}>{topic.title}</h3>
            <p className={styles.meta}>
              <LucideUsers size={14} /> @{topic.creator?.username}
            </p>
            <p className={styles.meta}>
              <LucideRocket size={14} /> {topic.relatedEntityType} • {topic.postCount} respuestas
            </p>
            <p className={styles.date}>
              Última respuesta: {new Date(topic.lastReplyAt).toLocaleDateString()}
            </p>
            <p className={styles.date}>
              Creado: {new Date(topic.createdAt).toLocaleDateString()}
            </p>  
          </div>
        ))}
      </div>
      {/* Paginación */}
      <div className={styles.pagination}>
        <button
          onClick={() => handlePageChange("prev")}
          disabled={currentPage === 0}
          className={styles.paginationButton}
        >
          ← Anterior
        </button>

        <span className={styles.paginationInfo}>
          Página {currentPage + 1} de {Math.ceil(forumTopics.length / pageSize)}
        </span>

        <button
          onClick={() => handlePageChange("next")}
          disabled={currentPage === Math.ceil(forumTopics.length / pageSize) - 1}
          className={styles.paginationButton}
        >
          Siguiente →
        </button>
      </div>
    </div>
  );
};

export default ForumPage;

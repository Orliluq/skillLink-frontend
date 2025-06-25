// src/pages/BlogPage.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { blogPostsData } from '../data/blogPosts'; // Ajusta la ruta
import type { BlogPostPreview } from '../data/blogPosts';
import styles from './BlogPage.module.css';

const BlogPage: React.FC = () => {
    const [posts, setPosts] = useState<BlogPostPreview[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        // Simular carga de datos
        // En una app real, aquí harías una llamada API
        setTimeout(() => {
            setPosts(blogPostsData);
            setIsLoading(false);
        }, 500); // Simular un pequeño retraso
    }, []);

    if (isLoading) {
        return <div className={styles.loading}>Cargando artículos del blog...</div>;
    }

    if (posts.length === 0) {
        return <div className={styles.noPosts}>No hay artículos disponibles en este momento.</div>;
    }

    return (
        <div className={styles.pageContainer}>
            <header className={styles.pageHeader}>
                <h1>Blog de SkillLink</h1>
                <p>Consejos, noticias y perspectivas para impulsar tu crecimiento profesional y personal.</p>
            </header>

            <div className={styles.postsGrid}>
                {posts.map(post => (
                    <article key={post.id} className={styles.postCard}>
                        {post.imageUrl && (
                            <Link to={`/blog/${post.slug}`}>
                                <img src={post.imageUrl} alt={post.title} className={styles.postImage} />
                            </Link>
                        )}
                        <div className={styles.postContent}>
                            {post.category && <span className={styles.postCategory}>{post.category}</span>}
                            <h2 className={styles.postTitle}>
                                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                            </h2>
                            <p className={styles.postExcerpt}>{post.excerpt}</p>
                            <div className={styles.postMeta}>
                                <span className={styles.postAuthor}>{post.author}</span>
                                <span className={styles.postDate}>{new Date(post.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                            </div>
                            <Link to={`/blog/${post.slug}`} className={styles.readMoreLink}>
                                Leer más →
                            </Link>
                        </div>
                    </article>
                ))}
            </div>
            {/* Aquí podrías añadir paginación si tienes muchos posts */}
        </div>
    );
};

export default BlogPage;
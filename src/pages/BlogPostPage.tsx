// src/pages/BlogPostPage.tsx
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getBlogPostBySlug } from '../data/blogPosts'; // Ajusta la ruta
import type { BlogPost } from '../data/blogPosts';
import styles from './BlogPostPage.module.css';
// import ReactMarkdown from 'react-markdown';
// import remarkGfm from 'remark-gfm'; // Para soporte de GFM (GitHub Flavored Markdown)

const BlogPostPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const [post, setPost] = useState<BlogPost | null | undefined>(undefined); // undefined para estado inicial, null si no se encuentra
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const navigate = useNavigate();

    useEffect(() => {
        setIsLoading(true);
        if (slug) {
            // Simular carga de datos
            setTimeout(() => {
                const foundPost = getBlogPostBySlug(slug);
                setPost(foundPost);
                setIsLoading(false);
                if (!foundPost) {
                    // Opcional: redirigir a 404 si el post no se encuentra después de la "carga"
                    navigate('/404', { replace: true });
                }
            }, 300);
        } else {
            setIsLoading(false);
            setPost(null); // No slug, no post
        }
    }, [slug, navigate]);

    if (isLoading) {
        return <div className={styles.loading}>Cargando artículo...</div>;
    }

    if (!post) {
        return (
            <div className={styles.notFound}>
                <h2>Artículo no encontrado</h2>
                <p>El artículo que buscas no existe o ha sido movido.</p>
                <Link to="/blog" className={styles.backButton}>Volver al Blog</Link>
            </div>
        );
    }

    return (
        <article className={styles.pageContainer}>
            <header className={styles.postHeader}>
                {post.category && <span className={styles.postCategory}>{post.category}</span>}
                <h1 className={styles.postTitle}>{post.title}</h1>
                <div className={styles.postMeta}>
                    <span>Por: {post.author}</span> |
                    <span>Publicado: {new Date(post.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
            </header>

            {post.imageUrl && (
                <img src={post.imageUrl} alt={post.title} className={styles.featuredImage} />
            )}

<div className={`${styles.card} ${styles.markdownCard}`}>
  <div className={`${styles.postContent}`}>
    {/* <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        p: ({ children, ...props }) => (
          <p className="markdown-paragraph" {...props}>{children}</p>
        ),
        h1: ({ children, ...props }) => (
          <h1 className="markdown-heading" {...props}>{children}</h1>
        ),
        h2: ({ children, ...props }) => (
          <h2 className="markdown-heading" {...props}>{children}</h2>
        ),
        h3: ({ children, ...props }) => (
          <h3 className="markdown-heading" {...props}>{children}</h3>
        ),
        h4: ({ children, ...props }) => (
          <h4 className="markdown-heading" {...props}>{children}</h4>
        ),
        h5: ({ children, ...props }) => (
          <h5 className="markdown-heading" {...props}>{children}</h5>
        ),
        h6: ({ children, ...props }) => (
          <h6 className="markdown-heading" {...props}>{children}</h6>
        ),
        a: ({ children, href, ...props }) => (
          <a href={href} target="_blank" rel="noopener noreferrer" className="markdown-link" {...props}>
            {children}
          </a>
        ),
        code: ({ node, inline, className, children, ...props }: React.HTMLAttributes<HTMLElement> & { node?: any; inline?: boolean; className?: string }) => {
          const codeProps = {
            className: className || '',
            ...(inline ? {} : { as: 'pre' as const }),
            ...props
          };
          
          if (inline) {
            return <code {...codeProps}>{children}</code>;
          }
          
          return (
            <pre {...codeProps}>
              <code {...codeProps}>{children}</code>
            </pre>
          );
        },
      }}
    >
      {post.content}
    </ReactMarkdown> */}
  </div>
</div>


            {post.tags && post.tags.length > 0 && (
                <div className={styles.tagsSection}>
                    <strong>Etiquetas:</strong>
                    {post.tags.map(tag => (
                        <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                </div>
            )}

            <div className={styles.backLinkContainer}>
                <Link to="/blog" className={styles.backButton}>← Volver a todos los artículos</Link>
            </div>
        </article>
    );
};

export default BlogPostPage;
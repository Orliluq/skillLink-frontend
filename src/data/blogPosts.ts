// src/data/blogPosts.ts (o similar)
export interface BlogPostPreview {
    id: string; // O number
    slug: string; // Para la URL amigable
    title: string;
    excerpt: string; // Un resumen corto
    imageUrl?: string;
    author: string;
    date: string; // Formato YYYY-MM-DD
    category?: string;
    tags?: string[];
}

export interface BlogPost extends BlogPostPreview {
    content: string; // Contenido completo del post, podría ser Markdown o HTML
}

export const blogPostsData: BlogPostPreview[] = [
    {
        id: "1",
        slug: "como-encontrar-el-mentor-perfecto",
        title: "5 Claves para Encontrar el Mentor Perfecto en SkillLink",
        excerpt: "Descubre cómo identificar y conectar con el mentor que te ayudará a alcanzar tus metas profesionales y personales.",
        imageUrl: "/images/blog/mentorship.png", // Placeholder
        author: "Equipo SkillLink",
        date: "2025-06-15",
        category: "Mentoría",
        tags: ["desarrollo profesional", "mentoría", "carrera"]
    },
    {
        id: "2",
        slug: "maximizando-colaboracion-proyectos-remotos",
        title: "Maximizando la Colaboración en Proyectos Remotos",
        excerpt: "Herramientas y estrategias para mantener a tu equipo conectado y productivo, sin importar dónde estén.",
        imageUrl: "/images/blog/remote-work.png", // Placeholder
        author: "Jane Doe",
        date: "2025-06-10",
        category: "Colaboración",
        tags: ["trabajo remoto", "productividad", "equipos"]
    },
    {
        id: "3",
        slug: "superando-desafios-programacion-skilllink",
        title: "Superando Desafíos de Programación con SkillLink",
        excerpt: "Una guía paso a paso sobre cómo nuestros desafíos te ayudan a mejorar tus habilidades de codificación y resolución de problemas.",
        imageUrl: "/images/blog/programming.png", // Placeholder
        author: "Equipo SkillLink",
        date: "2025-06-01",
        category: "Desarrollo de Habilidades",
        tags: ["programación", "desafíos", "aprendizaje"]
    },
    // Añade más posts
];

// Simulación de obtener un post completo por slug (en una app real, esto sería una llamada API)
export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
    const preview = blogPostsData.find(post => post.slug === slug);
    if (preview) {
        return {
            ...preview,
            // Contenido de ejemplo, en una app real vendría de una fuente de datos
            content: `
                <h2>${preview.title}</h2>
                <p>Este es el contenido principal del artículo "${preview.title}". Aquí desarrollarías los puntos clave mencionados en el extracto.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <h3>Subtítulo Importante</h3>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <img src="${preview.imageUrl || 'https://via.placeholder.com/600x300'}" alt="${preview.title}" style="max-width: 100%; border-radius: 8px; margin: 20px 0;" />
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <ul>
                    <li>Punto clave 1</li>
                    <li>Punto clave 2</li>
                    <li>Punto clave 3</li>
                </ul>
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
            `
        };
    }
    return undefined;
};
export interface RouteInfo {
    path: string;          
    keywords: string[];    
    description: string;   
    response: string;      
    title?: string;        
}

export interface FAQEntry {
    keywords: string[];
    answer: string;
}

export const routeKnowledgeBase: RouteInfo[] = [
    {
        path: "/",
        keywords: ["inicio", "home", "principal", "skilllink", "qué es"],
        title: "Página de Inicio",
        description: "Página principal de SkillLink, donde puedes conocer la plataforma.",
        response: "Puedes encontrar información general sobre SkillLink en nuestra [página de inicio](/) o preguntarme qué te gustaría saber."
    },
    {
        path: "/login",
        keywords: ["login", "iniciar sesión", "acceder", "entrar", "cuenta"],
        title: "Iniciar Sesión",
        description: "Página para acceder a tu cuenta de SkillLink.",
        response: "Para acceder a tu cuenta, visita nuestra [página de login](/login)."
    },
    {
        path: "/register",
        keywords: ["registro", "registrarme", "crear cuenta", "unirme"],
        title: "Registro",
        description: "Página para crear una nueva cuenta en SkillLink.",
        response: "Puedes crear una nueva cuenta en la [página de registro](/register)."
    },
    {
        path: "/profile/me",
        keywords: ["perfil", "mi cuenta", "mis datos", "mi información"],
        title: "Mi Perfil",
        description: "Visualiza y edita tu perfil personal en SkillLink.",
        response: "Puedes ver y editar tu perfil en [Mi Perfil](/profile/me) una vez que hayas iniciado sesión."
    },
    {
        path: "/projects/explore",
        keywords: ["proyectos", "explorar proyectos", "ver proyectos", "colaborar"],
        title: "Explorar Proyectos",
        description: "Descubre proyectos públicos en los que puedes participar o inspirarte.",
        response: "Explora los proyectos disponibles en nuestra sección de [Explorar Proyectos](/projects/public)."
    },
    {
        path: "/projects/create",
        keywords: ["crear proyecto", "nuevo proyecto", "iniciar proyecto"],
        title: "Crear Proyecto",
        description: "Inicia un nuevo proyecto colaborativo en SkillLink.",
        response: "Si quieres iniciar un nuevo proyecto, puedes hacerlo desde [Crear Proyecto](/projects/create) (necesitas estar logueado)."
    },
    {
        path: "/mentorships",
        keywords: ["mentorías", "mentores", "buscar mentor", "ser mentor"],
        title: "Explorar Mentorías",
        description: "Encuentra mentores o ofrece tu conocimiento como mentor.",
        response: "Descubre oportunidades de mentoría en [Explorar Mentorías](/mentorships)."
    },
    {
        path: "/challenges",
        keywords: ["desafíos", "retos", "pruebas", "habilidades"],
        title: "Desafíos",
        description: "Pon a prueba y mejora tus habilidades con nuestros desafíos interactivos.",
        response: "Acepta nuevos retos en nuestra sección de [Desafíos](/challenges)."
    },
    {
        path: "/how-it-works",
        keywords: ["cómo funciona", "pasos", "empezar", "guía"],
        title: "Cómo Funciona",
        description: "Aprende cómo sacar el máximo provecho de SkillLink.",
        response: "Entiende mejor nuestra plataforma en [¿Cómo Funciona?](/how-it-works)."
    },
    {
        path: "/faq",
        keywords: ["faq", "preguntas frecuentes", "dudas", "ayuda"],
        title: "Preguntas Frecuentes",
        description: "Encuentra respuestas a las preguntas más comunes.",
        response: "Consulta nuestras [Preguntas Frecuentes](/faq) para resolver tus dudas."
    },
    {
        path: "/terms-of-service",
        keywords: ["términos", "condiciones", "servicio", "legal"],
        title: "Términos de Servicio",
        description: "Lee nuestros Términos de Servicio.",
        response: "Puedes leer nuestros [Términos de Servicio](/terms-of-service)."
    },
    {
        path: "/privacy-policy",
        keywords: ["privacidad", "política de privacidad", "datos", "legal"],
        title: "Política de Privacidad",
        description: "Entiende cómo manejamos tus datos.",
        response: "Consulta nuestra [Política de Privacidad](/privacy-policy)."
    },
    {
        path: "/cookie-policy",
        keywords: ["cookies", "política de cookies", "rastreo"],
        title: "Política de Cookies",
        description: "Información sobre el uso de cookies en nuestra plataforma.",
        response: "Lee más sobre cómo usamos las cookies en nuestra [Política de Cookies](/cookie-policy)."
    },
];

export const faqKnowledgeBase: FAQEntry[] = [
    {
        keywords: ["qué es skilllink", "skill link", "plataforma"],
        answer: "SkillLink es una plataforma web diseñada para conectar a personas que buscan compartir conocimientos, colaborar en proyectos y mejorar habilidades a través de mentorías y desafíos interactivos."
    },
    {
        keywords: ["contacto", "soporte", "email de contacto"],
        answer: "Puedes contactarnos a través de info@skilllink.com para cualquier consulta."
    }
];
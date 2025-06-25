// src/components/home/Testimonials.tsx
import React from 'react';
import styles from './Testimonials.module.css';
// Opcional: Swiper para un carrusel de testimonios
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/autoplay'; // A veces el bundle ya lo incluye

interface Testimonial {
    id: number;
    quote: string;
    author: string;
    role: string;
    avatarUrl?: string; // Opcional
}

const testimonialsData: Testimonial[] = [
    {
        id: 1,
        quote: "SkillLink transformó mi manera de aprender y colaborar. Encontré un mentor increíble que me guio en mi proyecto final.",
        author: "Ana Pérez",
        role: "Desarrolladora Junior",
        avatarUrl: "https://randomuser.me/api/portraits/women/44.jpg" // Placeholder
    },
    {
        id: 2,
        quote: "Como mentor, he podido compartir mis conocimientos y ver crecer a nuevos talentos. La plataforma es intuitiva y muy útil.",
        author: "Carlos L.",
        role: "Ingeniero de Software Senior",
        avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg" // Placeholder
    },
    {
        id: 3,
        quote: "SkillLink me permitió encontrar un mentor increíble que me guio en mi proyecto final.",
        author: "Patricia Sosa",
        role: "Desarrolladora",
        avatarUrl: "https://randomuser.me/api/portraits/women/33.jpg" // Placeholder
    },
    {
        id: 4,
        quote: "SkillLink es increíble, me permitió encontrar un facilitador que me guio en mi carrera profesional.",
        author: "Juan Ponce",
        role: "Técnico de Software",
        avatarUrl: "https://randomuser.me/api/portraits/men/35.jpg" // Placeholder
    },
    {
        id: 5,
        quote: "SkillLink transformó mi manera de aprender y colaborar. Encontré un mentor increíble que me guio en mi proyecto final.",
        author: "Carolina Arteaga",
        role: "Desarrolladora Backend",
        avatarUrl: "https://randomuser.me/api/portraits/women/49.jpg" // Placeholder
    },
    {
        id: 6,
        quote: "Excelente app SkillLink es ideal para el aprendizaje y colaboración.",
        author: "Luis Mendoza",
        role: "Desarrollador Frontend",
        avatarUrl: "https://randomuser.me/api/portraits/men/12.jpg" // Placeholder
    },
    // Añade más testimonios
];

const Testimonials: React.FC = () => {
    return (
        <section className={styles.testimonialsSection}>
            <div className={styles.sectionContainer}>
                <h2 className={styles.sectionTitle}>Lo que nuestra comunidad dice</h2>
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1} // Mostrar 1 a la vez en móvil
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 6000, disableOnInteraction: false }}
                    loop={true}
                    breakpoints={{
                        // Cuando el ancho de la ventana es >= 768px
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        },
                        // Cuando el ancho de la ventana es >= 1024px
                        1024: {
                            slidesPerView: testimonialsData.length > 2 ? 3 : testimonialsData.length, // Mostrar hasta 3, o menos si no hay suficientes
                            spaceBetween: 40
                        }
                    }}
                    className={styles.testimonialSwiper}
                >
                    {testimonialsData.map((testimonial) => (
                        <SwiperSlide key={testimonial.id} className={styles.testimonialCard}>
                            {testimonial.avatarUrl && (
                                <img src={testimonial.avatarUrl} alt={testimonial.author} className={styles.authorAvatar} />
                            )}
                            <p className={styles.quote}>"{testimonial.quote}"</p>
                            <div className={styles.authorInfo}>
                                <span className={styles.authorName}>{testimonial.author}</span>
                                <span className={styles.authorRole}>{testimonial.role}</span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;
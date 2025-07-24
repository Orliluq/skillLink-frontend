import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Grid } from 'swiper/modules'; // Grid para múltiples logos por slide si son pequeños
/* import 'swiper/css'; */

import styles from './PartnersSlider.module.css';

interface Partner {
    id: number;
    name: string;
    logoUrl: string; // Ruta al logo
    websiteUrl?: string; // Opcional
}

// Datos de ejemplo, reemplaza con los tuyos
const partnersData: Partner[] = [
    { id: 1, name: "Tech Solutions Inc.", logoUrl: "/images/partners/tech-solutions.png", websiteUrl: "#" },
    { id: 2, name: "Innovate Hub", logoUrl: "/images/partners/innovate-hub.png", websiteUrl: "#" },
    { id: 3, name: "EduFuture", logoUrl: "/images/partners/edufuture.png", websiteUrl: "#" },
    { id: 4, name: "CodeMasters", logoUrl: "/images/partners/codemasters.png", websiteUrl: "#" },
    { id: 5, name: "Global Connect", logoUrl: "/images/partners/global-connect.png", websiteUrl: "#" },
    { id: 6, name: "NextGen Academy", logoUrl: "/images/partners/nextgen-academy.png", websiteUrl: "#" },
    { id: 7, name: "Solutions Inc.", logoUrl: "/images/partners/solutions.png", websiteUrl: "#" },
    // Añade más partners
];

const PartnersSlider: React.FC = () => {
    if (partnersData.length === 0) return null; // No renderizar si no hay partners

    return (
        <section className={styles.partnersSection}>
            <div className={styles.sectionContainer}>
                <h2 className={styles.sectionTitle}>Nuestros Colaboradores</h2>
                <Swiper
                    modules={[Autoplay, Grid]}
                    spaceBetween={30}
                    slidesPerView={2} // Logos por slide en móviles
                    loop={true} // Habilitar loop para que el movimiento sea continuo
                    autoplay={{
                        delay: 1500, // El movimiento será continuo sin pausa entre slides
                        disableOnInteraction: false, // No detener el autoplay si se interactúa con el slider
                    }}
                    grid={{ // Opcional: para mostrar varios logos en filas si son pequeños
                        rows: 1, // O 2 si quieres apilarlos
                        fill: 'row',
                    }}
                    breakpoints={{
                        640: { slidesPerView: 3, spaceBetween: 30 },
                        768: { slidesPerView: 4, spaceBetween: 40 },
                        1024: { slidesPerView: 5, spaceBetween: 50 },
                    }}
                    className={styles.partnersSwiper}
                >
                    {partnersData.map(partner => (
                        <SwiperSlide key={partner.id} className={styles.partnerSlide}>
                            <a href={partner.websiteUrl || '#'} target="_blank" rel="noopener noreferrer" className={styles.partnerLink}>
                                <img src={partner.logoUrl} alt={partner.name} className={styles.partnerLogo} />
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default PartnersSlider;
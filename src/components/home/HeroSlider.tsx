import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import styles from './HeroSlider.module.css';

// 4. Import required Swiper modules
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';

interface SlideContent {
    id: number;
    title: string;
    description: string;
    imageUrl?: string;
    backgroundColor?: string;
    ctaText?: string; // Texto para un botón de llamada a la acción
    ctaLink?: string; // Enlace para el botón
}

const slidesData: SlideContent[] = [
    {
        id: 1,
        title: "Conecta con Mentores Expertos",
        description: "Encuentra la guía que necesitas para impulsar tu carrera o habilidades.",
        backgroundColor: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        ctaText: "Buscar Mentores",
        ctaLink: "/mentorships"
    },
    {
        id: 2,
        title: "Colabora en Proyectos Innovadores",
        description: "Aplica tus conocimientos y aprende trabajando en equipo en proyectos reales.",
        backgroundColor: "linear-gradient(135deg, #38ef7d 0%, #11998e 100%)",
        ctaText: "Ver Proyectos",
        ctaLink: "/projects/explore"
    },
    {
        id: 3,
        title: "Supera Desafíos y Crece",
        description: "Pon a prueba tus habilidades con nuestros desafíos interactivos y gana reconocimiento.",
        backgroundColor: "linear-gradient(135deg, #ff8c00 0%, #ffc107 100%)",
        ctaText: "Explorar Desafíos",
        ctaLink: "/challenges"
    },
    {
        id: 4,
        title: "Construye tu Red Profesional",
        description: "Conéctate con otros profesionales, comparte ideas y expande tus horizontes.",
        backgroundColor: "linear-gradient(135deg, #f77062 0%, #fe5196 100%)",
        ctaText: "Únete a la Comunidad",
        ctaLink: "/register" // O una página de comunidad si la tienes
    }
];

const HeroSlider: React.FC = () => {
  return (
    <div className={styles.heroSliderContainer}>
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]} // Asegúrate que los módulos estén aquí
        spaceBetween={30} // Espacio entre slides si tuvieras más de uno visible a la vez (no con effect: 'fade')
        centeredSlides={true}
        effect={'fade'}
        fadeEffect={{
          crossFade: true // Para una transición de fade más suave
        }}
        autoplay={{
          delay: 5000, // Aumentado ligeramente el delay
          disableOnInteraction: false, // Sigue reproduciendo después de interacción manual
          pauseOnMouseEnter: true, // Pausa el autoplay cuando el ratón está sobre el slider
        }}
        pagination={{
          clickable: true, // Permite hacer clic en los bullets de paginación
          dynamicBullets: true, // Opcional: para un efecto visual en los bullets
        }}
        navigation={true} // Habilita las flechas de navegación (prev/next)
        loop={true} // Permite el bucle infinito del slider
        className={styles.mySwiper} // Clase personalizada para el contenedor de Swiper
        // Otros props útiles:
        speed={1000} // Velocidad de la transición en ms
        // grabCursor={true} // Muestra un cursor de "agarrar"
      >
        {slidesData.map((slide) => (
          <SwiperSlide 
            key={slide.id} 
            className={styles.swiperSlideCustom} 
            style={{ background: slide.backgroundColor }}
          >
            {slide.imageUrl && ( // Si usaras imágenes de fondo en el slide
              <img 
                src={slide.imageUrl} 
                alt={slide.title} 
                className={styles.slideImageBackground} // Una clase para la imagen de fondo
              />
            )}
            <div className={styles.slideContent}>
              <h2 className={styles.slideTitle}>{slide.title}</h2>
              <p className={styles.slideDescription}>{slide.description}</p>
              {slide.ctaText && slide.ctaLink && (
                <a href={slide.ctaLink} className={styles.slideCtaButton}>
                    {slide.ctaText}
                </a>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
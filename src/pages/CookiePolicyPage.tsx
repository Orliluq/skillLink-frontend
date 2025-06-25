// src/pages/CookiePolicyPage.tsx
import React from 'react';
import legalStyles from '../styles/LegalPage.module.css'; // Reutiliza los estilos comunes

const CookiePolicyPage: React.FC = () => {
    const lastUpdatedDate = "7 de Junio de 2025"; // Actualiza esta fecha

    return (
        <div className={legalStyles.pageContainer}>
            <h1 className={legalStyles.pageTitle}>Política de Cookies</h1>
            <span className={legalStyles.lastUpdated}>Última actualización: {lastUpdatedDate}</span>

            <section className={legalStyles.section}>
                <h2 className={legalStyles.sectionTitle}>1. ¿Qué son las Cookies?</h2>
                <p>
                    Las cookies son pequeños archivos de texto que los sitios web que visitas colocan en tu computadora o dispositivo móvil.
                    Se utilizan ampliamente para hacer que los sitios web funcionen, o funcionen de manera más eficiente, así como para
                    proporcionar información a los propietarios del sitio.
                </p>
            </section>

            <section className={legalStyles.section}>
                <h2 className={legalStyles.sectionTitle}>2. ¿Cómo Utilizamos las Cookies?</h2>
                <p>
                    SkillLink utiliza cookies para mejorar tu experiencia en nuestra plataforma. Utilizamos los siguientes tipos de cookies:
                </p>
                <ul>
                    <li>
                        <strong>Cookies Estrictamente Necesarias:</strong> Estas cookies son esenciales para permitirte moverte
                        por la plataforma y utilizar sus funciones, como acceder a áreas seguras. Sin estas cookies,
                        los servicios que has solicitado, como el inicio de sesión o la adición de artículos a un carrito, no pueden proporcionarse.
                    </li>
                    <li>
                        <strong>Cookies de Rendimiento y Analíticas:</strong> Estas cookies recopilan información sobre cómo
                        los visitantes utilizan una plataforma, por ejemplo, qué páginas visitan más a menudo y si reciben
                        mensajes de error de las páginas web. Estas cookies no recopilan información que identifique a un
                        visitante. Toda la información que estas cookies recopilan es agregada y, por lo tanto, anónima.
                        Solo se utiliza para mejorar el funcionamiento de la plataforma.
                    </li>
                    <li>
                        <strong>Cookies de Funcionalidad:</strong> Estas cookies permiten que la plataforma recuerde las elecciones
                        que haces (como tu nombre de usuario, idioma o la región en la que te encuentras) y proporcionan
                        características mejoradas y más personales.
                    </li>
                    <li>
                        <strong>Cookies de Publicidad o Segmentación (si aplica):</strong> Estas cookies se utilizan para ofrecer
                        anuncios más relevantes para ti y tus intereses. También se utilizan para limitar el número de veces
                        que ves un anuncio, así como para ayudar a medir la efectividad de la campaña publicitaria.
                        (Indica si usas este tipo de cookies o no).
                    </li>
                </ul>
            </section>

            <section className={legalStyles.section}>
                <h2 className={legalStyles.sectionTitle}>3. Gestión de Cookies</h2>
                <p>
                    Puedes gestionar y/o eliminar las cookies como desees – para más detalles, consulta aboutcookies.org.
                    Puedes eliminar todas las cookies que ya están en tu computadora y puedes configurar la mayoría de los navegadores
                    para evitar que se coloquen. Sin embargo, si haces esto, es posible que tengas que ajustar manualmente
                    algunas preferencias cada vez que visites un sitio y algunos servicios y funcionalidades pueden no funcionar.
                </p>
            </section>

             {/* Añade más secciones según necesites:
                - Cookies específicas que utilizas (tabla opcional)
                - Cookies de terceros
                - Cambios a la política de cookies
                - Información de Contacto
            */}

            <section className={`${legalStyles.section} ${legalStyles.contactInfo}`}>
                <h2 className={legalStyles.sectionTitle}>Contacto</h2>
                <p>
                    Para cualquier pregunta relacionada con nuestra Política de Cookies, por favor contáctanos en:
                </p>
                <p>Email: cookies@skilllink.com</p> {/* Reemplaza con tu email real */}
            </section>
        </div>
    );
};

export default CookiePolicyPage;
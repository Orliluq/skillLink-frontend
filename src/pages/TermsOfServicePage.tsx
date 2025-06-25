// src/pages/TermsOfServicePage.tsx
import React from 'react';
import legalStyles from '../styles/LegalPage.module.css'; // Importa los estilos comunes
import { Link } from 'react-router-dom'; // Si necesitas enlazar a otras secciones

const TermsOfServicePage: React.FC = () => {
    const lastUpdatedDate = "7 de Junio de 2025"; // Actualiza esta fecha

    return (
        <div className={legalStyles.pageContainer}>
            <h1 className={legalStyles.pageTitle}>Términos de Servicio</h1>
            <span className={legalStyles.lastUpdated}>Última actualización: {lastUpdatedDate}</span>

            <section className={legalStyles.section}>
                <h2 className={legalStyles.sectionTitle}>1. Aceptación de los Términos</h2>
                <p>
                    Bienvenido a SkillLink. Al acceder o utilizar nuestra plataforma, aceptas estar sujeto a estos Términos de Servicio
                    y a nuestra <Link to="/privacy-policy">Política de Privacidad</Link>. Si no estás de acuerdo con alguno de estos términos,
                    no debes utilizar nuestros servicios.
                </p>
                {/* ... más párrafos ... */}
            </section>

            <section className={legalStyles.section}>
                <h2 className={legalStyles.sectionTitle}>2. Uso de la Plataforma</h2>
                <p>
                    SkillLink te otorga una licencia limitada, no exclusiva, intransferible y revocable para utilizar
                    la plataforma para tus fines personales y no comerciales, de acuerdo con estos Términos.
                </p>
                <p>Te comprometes a no utilizar la plataforma para ningún propósito ilegal o prohibido por estos Términos, incluyendo pero no limitándose a:</p>
                <ul>
                    <li>Publicar contenido infractor, difamatorio u obsceno.</li>
                    <li>Intentar obtener acceso no autorizado a nuestros sistemas o cuentas de otros usuarios.</li>
                    <li>Interferir con el funcionamiento adecuado de la plataforma.</li>
                </ul>
            </section>

            <section className={legalStyles.section}>
                <h2 className={legalStyles.sectionTitle}>3. Cuentas de Usuario</h2>
                <p>
                    Para acceder a ciertas funciones de SkillLink, es posible que debas crear una cuenta. Eres responsable
                    de mantener la confidencialidad de tu contraseña y de todas las actividades que ocurran bajo tu cuenta.
                </p>
            </section>

            {/* Añade más secciones según necesites:
                - Contenido del Usuario
                - Propiedad Intelectual
                - Terminación
                - Descargos de Responsabilidad
                - Limitación de Responsabilidad
                - Modificaciones a los Términos
                - Ley Aplicable
                - Información de Contacto
            */}

            <section className={`${legalStyles.section} ${legalStyles.contactInfo}`}>
                <h2 className={legalStyles.sectionTitle}>Información de Contacto</h2>
                <p>
                    Si tienes alguna pregunta sobre estos Términos de Servicio, por favor contáctanos en:
                </p>
                <p>Email: legal@skilllink.com</p> {/* Reemplaza con tu email real */}
            </section>
        </div>
    );
};

export default TermsOfServicePage;
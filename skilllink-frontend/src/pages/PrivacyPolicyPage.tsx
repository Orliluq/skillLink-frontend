// src/pages/PrivacyPolicyPage.tsx
import React from 'react';
import legalStyles from '../styles/LegalPage.module.css'; // Reutiliza los estilos comunes
import { Link } from 'react-router-dom';

const PrivacyPolicyPage: React.FC = () => {
    const lastUpdatedDate = "7 de Junio de 2025"; // Actualiza esta fecha

    return (
        <div className={legalStyles.pageContainer}>
            <h1 className={legalStyles.pageTitle}>Política de Privacidad</h1>
            <span className={legalStyles.lastUpdated}>Última actualización: {lastUpdatedDate}</span>

            <section className={legalStyles.section}>
                <h2 className={legalStyles.sectionTitle}>1. Introducción</h2>
                <p>
                    En SkillLink ("nosotros", "nuestro"), respetamos tu privacidad y nos comprometemos a proteger
                    tus datos personales. Esta política de privacidad te informará sobre cómo cuidamos tus datos personales
                    cuando visitas nuestra plataforma (independientemente de dónde la visites) y te informará sobre tus
                    derechos de privacidad y cómo la ley te protege.
                </p>
            </section>

            <section className={legalStyles.section}>
                <h2 className={legalStyles.sectionTitle}>2. Datos que Recopilamos Sobre Ti</h2>
                <p>
                    Podemos recopilar, usar, almacenar y transferir diferentes tipos de datos personales sobre ti, que hemos agrupado de la siguiente manera:
                </p>
                <ul>
                    <li>
                        <strong>Datos de Identidad:</strong> incluye nombre, apellido, nombre de usuario o identificador similar.
                    </li>
                    <li>
                        <strong>Datos de Contacto:</strong> incluye dirección de correo electrónico y números de teléfono.
                    </li>
                    <li>
                        <strong>Datos Técnicos:</strong> incluye dirección de protocolo de Internet (IP), tus datos de inicio de sesión, tipo y versión del navegador, configuración y ubicación de la zona horaria, tipos y versiones de plug-in del navegador, sistema operativo y plataforma, y otra tecnología en los dispositivos que utilizas para acceder a esta plataforma.
                    </li>
                    <li>
                        <strong>Datos de Perfil:</strong> incluye tu nombre de usuario y contraseña, compras u pedidos realizados por ti, tus intereses, preferencias, comentarios y respuestas a encuestas.
                    </li>
                    <li>
                        <strong>Datos de Uso:</strong> incluye información sobre cómo utilizas nuestra plataforma, productos y servicios.
                    </li>
                </ul>
            </section>

            {/* Añade más secciones según necesites:
                - Cómo utilizamos tus datos personales
                - Divulgación de tus datos personales
                - Transferencias internacionales
                - Seguridad de los datos
                - Retención de datos
                - Tus derechos legales
                - Uso de Cookies (puedes enlazar a la Política de Cookies)
                - Cambios a la política de privacidad
                - Información de Contacto
            */}

            <section className={`${legalStyles.section} ${legalStyles.contactInfo}`}>
                <h2 className={legalStyles.sectionTitle}>Preguntas</h2>
                <p>
                    Si tienes alguna pregunta sobre esta política de privacidad, incluyendo cualquier solicitud para ejercer
                    tus derechos legales, por favor contáctanos usando los detalles a continuación:
                </p>
                <p>Email: privacy@skilllink.com</p> {/* Reemplaza con tu email real */}
            </section>
        </div>
    );
};

export default PrivacyPolicyPage;
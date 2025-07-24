import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.appFooter}>
            <div className={`${styles.footerContent} ${styles.footerGrid}`}>
                {/* Sección Sobre SkillLink */}
                <div className={styles.footerSection}>
                    <h4 className={styles.footerHeading}>SkillLink</h4>
                    <p className={styles.footerDescription}>
                        Conectando talento, impulsando el crecimiento. Únete a nuestra comunidad para aprender, colaborar y desarrollar tus habilidades.
                    </p>
                    {/* Opcional: Logo pequeño si tienes */}
                    {/* <img src="/path/to/skilllink-logo-condensed.svg" alt="SkillLink Logo" className={styles.footerLogo} /> */}
                </div>

                {/* Sección de Enlaces Rápidos/Recursos */}
                <div className={styles.footerSection}>
                    <h4 className={styles.footerHeading}>Recursos</h4>
                    <ul className={styles.footerLinks}>
                        <li><Link to="/blog">Blog</Link></li> {/* Si tienes uno */}
                        <li><Link to="/faq">FAQ</Link></li>
                        <li><Link to="/how-it-works">Cómo Funciona</Link></li>
                        <li><Link to="/about">Acerca de SkillLink</Link></li>
                        <li><Link to="/challenges">Desafíos</Link></li>
                        <li><Link to="/projects/public">Explorar Proyectos</Link></li>
                    </ul>
                </div>

                {/* Sección Legal */}
                <div className={styles.footerSection}>
                    <h4 className={styles.footerHeading}>Legal</h4>
                    <ul className={styles.footerLinks}>
                        <li><Link to="/terms-of-service">Términos de Servicio</Link></li>
                        <li><Link to="/privacy-policy">Política de Privacidad</Link></li>
                        <li><Link to="/cookie-policy">Política de Cookies</Link></li>
                    </ul>
                </div>

                {/* Sección de Contacto/Redes Sociales */}
                <div className={styles.footerSection}>
                    <h4 className={styles.footerHeading}>Conéctate</h4>
                    <p>info@skilllink.com</p> {/* O tu email de contacto */}
                    <div className={styles.socialIcons}>
                        {/* Reemplaza con tus enlaces reales y considera usar una librería de iconos */}
                        <a href="https://facebook.com/skilllink" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <FaFacebookF />
                        </a>
                        <a href="https://twitter.com/skilllink" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <FaTwitter />
                        </a>
                        <a href="https://linkedin.com/company/skilllink" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                           <FaLinkedinIn />
                        </a>
                        <a href="https://instagram.com/skilllink" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </div>

            <div className={styles.footerBottom}>
                <p>
                    © {currentYear} SkillLink. Una plataforma para el futuro del aprendizaje colaborativo. Todos los derechos reservados. Desarrollado por{' '}
                    <a
                        href="https://www.linkedin.com/in/orlibetdungonzalez/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none', color: '#0077b5', fontWeight: 600 }}
                    >
                        Orli Dun
                    </a>.
                </p>
            </div>
        </footer>
    );
};

export default Footer;

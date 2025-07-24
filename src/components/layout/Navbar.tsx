import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import styles from './Navbar.module.css';
import {
  FaUserCircle,
  FaBars,
  FaTimes,
  FaSignOutAlt,
  FaSignInAlt,
  FaUserPlus
} from 'react-icons/fa';
import logo from '../../assets/logo.png';
import { IoNotifications } from "react-icons/io5";

const DEFAULT_AVATAR = "https://i.ibb.co/hFzRySjS/1744756637461-removebg-preview.png";

const Navbar: React.FC = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const profileDropdownRef = useRef<HTMLLIElement>(null);

  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);
  const toggleProfileDropdown = () => setIsProfileDropdownOpen(prev => !prev);

  const handleLogout = () => {
    logout();
    setIsProfileDropdownOpen(false);
    setIsMobileMenuOpen(false);
    navigate('/login');
  };

  const closeMenus = () => {
    setIsMobileMenuOpen(false);
    setIsProfileDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target as Node)
      ) {
        setIsProfileDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navBrand}>
        <img src={logo} alt="logo" className={styles.logo} />
        <Link to="/" onClick={closeMenus}>SkillLink</Link>
      </div>

      <div className={styles.mobileMenuIcon} onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`${styles.navLinks} ${isMobileMenuOpen ? styles.navLinksMobileOpen : ''}`}>
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? `${styles.navLinkItem} ${styles.active}` : styles.navLinkItem} onClick={closeMenus}>
            Home
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="/profile/me" className={({ isActive }) => isActive ? `${styles.navLinkItem} ${styles.active}` : styles.navLinkItem} onClick={closeMenus}>
            Perfil
          </NavLink>
        </li> */}
        <li>
          <NavLink to="/projects/explore" className={({ isActive }) => isActive ? `${styles.navLinkItem} ${styles.active}` : styles.navLinkItem} onClick={closeMenus}>
            Explorar Proyectos
          </NavLink>
        </li>
        <li>
          <NavLink to="/mentorship-topics" className={({ isActive }) => isActive ? `${styles.navLinkItem} ${styles.active}` : styles.navLinkItem} onClick={closeMenus}>
            Mentorías
          </NavLink>
        </li>
        <li>
          <NavLink to="/challenges" className={({ isActive }) => isActive ? `${styles.navLinkItem} ${styles.active}` : styles.navLinkItem} onClick={closeMenus}>
            Desafíos
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => isActive ? `${styles.navLinkItem} ${styles.active}` : styles.navLinkItem} onClick={closeMenus}>
            Contacto
          </NavLink>
        </li>

        {/* Avatar y Menú de Usuario */}
        <li className={styles.profileMenuContainer} ref={profileDropdownRef}>
          <button onClick={toggleProfileDropdown} className={styles.profileButton}>
            <img
              src={user?.avatarUrl || DEFAULT_AVATAR}
              alt="avatar"
              className={styles.avatarSmall}
            />
            <span>{user?.username || 'Cuenta'}</span>
          </button>

          {isProfileDropdownOpen && (
            <ul className={styles.profileDropdown}>
              {isAuthenticated && user ? (
                <>
                  <li>
                    <Link to={`/profile/${user.id}`} onClick={closeMenus}>Mi Perfil</Link>
                  </li>
                  <li>
                    <Link to="/settings" onClick={closeMenus}>Configuración</Link>
                  </li>
                  <li>
                    <button onClick={handleLogout} className={styles.logoutAction}>
                      <FaSignOutAlt /> Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                <li>
                    <Link to="/profile/me" onClick={closeMenus}>
                      <FaUserCircle style={{ marginRight: '5px' }} /> Perfil
                    </Link>
                  </li>
                  <li>
                    <Link to="/notifications" onClick={closeMenus}>
                      <IoNotifications style={{ marginRight: '5px' }} /> Notificaciones
                    </Link>
                  </li>
                  <li>
                    <Link to="/login" onClick={closeMenus}>
                      <FaSignInAlt style={{ marginRight: '5px' }} /> Login
                    </Link>
                  </li>
                  <li>
                    <Link to="/register" onClick={closeMenus}>
                      <FaUserPlus style={{ marginRight: '5px' }} /> Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
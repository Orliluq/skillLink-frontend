import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './EditProfilePage.module.css';

const EditProfilePage: React.FC = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    bio: '',
    avatarUrl: '',
    github: '',
    linkedin: '',
    website: ''
  });

  useEffect(() => {
    // Simulación de fetch
    setFormData({
      firstName: 'Orli',
      lastName: 'Dun',
      username: 'orliluq',
      email: 'orliluq@gmail.com',
      bio: 'Desarrollador Full Stack explorando el cosmos de la IA.',
      avatarUrl: 'https://i.ibb.co/39dfKqmF/avatar.png',
      github: 'https://github.com/orliluq',
      linkedin: 'https://linkedin.com/in/orliluq',
      website: 'https://orliluq.dev'
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('🚀 Perfil actualizado:', formData);
    navigate('/profile/me');
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Editar Perfil</h2>
      
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.avatarPreview}>
          <img src={formData.avatarUrl || '/default-avatar.png'} alt="Avatar" />
        </div>

        <input name="avatarUrl" type="url" placeholder="URL del avatar" value={formData.avatarUrl} onChange={handleChange} />
        <input name="firstName" type="text" placeholder="Nombre" value={formData.firstName} onChange={handleChange} />
        <input name="lastName" type="text" placeholder="Apellido" value={formData.lastName} onChange={handleChange} />
        <input name="username" type="text" placeholder="Username" value={formData.username} onChange={handleChange} />
        <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <textarea name="bio" placeholder="Biografía" value={formData.bio} onChange={handleChange} />

        <h4>🌐 Redes Sociales</h4>
        <input name="github" type="url" placeholder="GitHub" value={formData.github} onChange={handleChange} />
        <input name="linkedin" type="url" placeholder="LinkedIn" value={formData.linkedin} onChange={handleChange} />
        <input name="website" type="url" placeholder="Sitio Web" value={formData.website} onChange={handleChange} />

        <div className={styles.actions}>
          <button type="submit" className={styles.saveButton}>Guardar Cambios</button>
          <button type="button" className={styles.cancelButton} onClick={() => navigate('/profile/me')}>Cancelar</button>
        </div>
      </form>
    </div>
  );
};

export default EditProfilePage;

import React, { useEffect, useState } from 'react';
import styles from './ChallengesPage.module.css';
import { Link } from 'react-router-dom';
import RankingPage from './RankingPage';

// Definimos la estructura de un desafío
interface Challenge {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const ChallengesPage: React.FC = () => {
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchChallenges = () => {
      // Simulamos la respuesta con desafíos de programación y sus imágenes
      setTimeout(() => {
        const mockChallenges: Challenge[] = [
          { 
            id: 1, 
            title: 'El Desafío del Algoritmo Infinito', 
            description: 'Crea un algoritmo que no se detenga... ¡pero que no se quede atrapado en un loop infinito!', 
            imageUrl: 'https://i.ibb.co/WNk22qfn/challenge1.png' 
          },
          { 
            id: 2, 
            title: '¡Atrapando Errores!', 
            description: 'Haz un juego donde el objetivo sea capturar errores y corregirlos antes de que se apoderen del código.',
            imageUrl: 'https://i.ibb.co/N6BMjKtV/challenge2.png' 
          },
          { 
            id: 3, 
            title: 'El Laberinto de Bugs', 
            description: 'Construye un laberinto donde cada paso es un posible bug. ¿Podrás salir antes de que el tiempo se acabe?',
            imageUrl: 'https://i.ibb.co/Fb0VtmnT/challenge3.png' 
          },
          { 
            id: 4, 
            title: 'El Repositorio Secreto', 
            description: 'Desarrolla un sistema de control de versiones para almacenar y organizar código en una especie de “repositorio secreto”.',
            imageUrl: 'https://i.ibb.co/YFgtFdwq/challenge4.png' 
          },
          { 
            id: 5, 
            title: 'Desafío del Código en Espejo', 
            description: 'Haz que el código se ejecute hacia atrás. ¿Podrás crear una función que invierta su lógica?',
            imageUrl: 'https://i.ibb.co/VpTGcs5x/challenge5.png' 
          },
          { 
            id: 6, 
            title: 'Conquista el Framework', 
            description: 'Crea una pequeña app utilizando tu framework favorito... pero sin copiar y pegar código.',
            imageUrl: 'https://i.ibb.co/JwBwfcL6/challenge6.png' 
          },
          {
            id: 7,
            title: 'La Variable Viajera',
            description: 'Crea un programa donde una variable cambie de valor y tipo en cada línea, pero termine siendo útil. ¿Podrás domarla?',
            imageUrl: 'https://i.ibb.co/HftWcrF2/challenge7.png'
          },
          {
            id: 8,
            title: 'CSS a Ciegas',
            description: 'Estiliza una interfaz... ¡sin mirar el resultado en el navegador hasta el final! Confía en tu instinto visual y tu dominio de CSS.',
            imageUrl: 'https://i.ibb.co/WN8TzRTR/challenge8.png'
          }      
        ];
        setChallenges(mockChallenges);
        setLoading(false);
      }, 1000); // Simulamos un retraso de 1 segundo
    };
    fetchChallenges();
  }, []);

  if (loading) return <p className={styles.message}>Cargando desafíos...</p>;
  if (error) return <p className={styles.error}>{error}</p>;

  // Protección: asegurarse de que challenges sea un array
  if (!Array.isArray(challenges)) {
    return <p className={styles.error}>Los datos de desafíos no son una lista.</p>;
  }

  return (
    <><div className={styles.container}>
       <Link to="/challenges/create" className={styles.button}>
            Crear Desafío
          </Link>
      <h2 className={styles.title}>Desafíos</h2>
      {challenges.length === 0 ? (
        <p className={styles.message}>No hay desafíos disponibles.</p>
      ) : (
        <div className={styles.grid}>
          {challenges.map(challenge => (
            <div key={challenge.id} className={styles.card}>
              <img src={challenge.imageUrl} alt={challenge.title} className={styles.cardImage} />
              <h3 className={styles.cardTitle}>{challenge.title}</h3>
              <p className={styles.cardDesc}>{challenge.description}</p>
              <Link to={`/challenges/${challenge.id}`} className={styles.button}>
                Ver Detalles
              </Link>
            </div>
          ))}
         
        </div>
      )}
    </div><RankingPage /></>
  );
};

export default ChallengesPage;
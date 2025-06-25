import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Tu componente App principal
import './index.css'; // O tus estilos globales
import { AuthProvider } from './contexts/AuthContext'; // Importa el AuthProvider

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider> {/* Envuelve App con AuthProvider */}
      <App />
    </AuthProvider>
  </React.StrictMode>
);
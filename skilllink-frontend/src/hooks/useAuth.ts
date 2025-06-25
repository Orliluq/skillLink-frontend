// src/hooks/useAuth.ts
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext'; // Importa el CONTEXTO
import type { AuthContextType } from '../contexts/authContextTypes'; // Importa el TIPO

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context as AuthContextType;
};
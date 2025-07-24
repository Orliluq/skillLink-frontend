import type { UserDTO, AuthRequest, AuthResponse, UserRegistrationRequest } from '../types/user.types';
import type { ReactNode } from 'react';


export interface AuthContextType {
    user: UserDTO | null;
    token: string | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (credentials: AuthRequest) => Promise<AuthResponse>;
    register: (userData: UserRegistrationRequest) => Promise<UserDTO>;
    logout: () => void;
    setUser: React.Dispatch<React.SetStateAction<UserDTO | null>>;
}

export interface AuthProviderProps {
    children: ReactNode;
}
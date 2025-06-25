import { createContext, useState, useEffect, useContext } from 'react';
import apiClient from '../services/api';
import * as authService from '../services/authService';
import type { AuthRequest, AuthResponse, UserDTO, UserRegistrationRequest } from '../types/user.types';
import type { AuthProviderProps, AuthContextType } from './authContextTypes';

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserDTO | null>(null);
  const [token, setToken] = useState<string | null>(localStorage.getItem('authToken'));
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleAuthResponse = (data: AuthResponse) => {
    if (data.accessToken && data.user) {
      localStorage.setItem('authToken', data.accessToken);
      localStorage.setItem('user', JSON.stringify(data.user));
      apiClient.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`;
      setUser(data.user);
      setToken(data.accessToken);
    }
  };

  useEffect(() => {
    const initializeAuth = async () => {
      const storedToken = localStorage.getItem('authToken');
      const storedUser = authService.getCurrentUserFromStorage();

      if (storedToken && storedUser) {
        apiClient.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
        setUser(storedUser);
        setToken(storedToken);
      }
      setIsLoading(false);
    };

    initializeAuth();
  }, []);

  const login = async (credentials: AuthRequest): Promise<AuthResponse> => {
    try {
      const data = await authService.login(credentials);
      handleAuthResponse(data);
      return data;
    } catch (error) {
      logout(); 
      throw error;
    }
  };
  
  const register = async (
    userData: UserRegistrationRequest
  ): Promise<UserDTO> => {
    const registeredUser = await authService.register(userData);
    return registeredUser;
  };

  const logout = (): void => {
    authService.logout();
    delete apiClient.defaults.headers.common["Authorization"];
    setUser(null);
    setToken(null);
  };

  const value: AuthContextType = {
    user,
    token,
    isAuthenticated: !!token && !!user,
    isLoading,
    login,
    register,
    logout,
    setUser
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// src/pages/RegisterPage.tsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import * as authService from "../services/authService";
import type { UserRegistrationRequest } from "../types/index"; // O '../types/user.types'
import styles from './RegisterPage.module.css'; // Importar CSS Module

// Define una interfaz para la estructura esperada del error de la API si la conoces
interface ApiError {
  message: string;
  // Otros campos si tu backend los envía
}


const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState<UserRegistrationRequest>({
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setSuccess(null);
    setIsLoading(true);

    if (!formData.username || !formData.email || !formData.password) {
      setError("Username, email, and password are required.");
      setIsLoading(false);
      return;
    }
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long.");
      setIsLoading(false);
      return;
    }

    try {
      await authService.register(formData);
      setSuccess("Registration successful! Redirecting to login...");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err: unknown) {
      let errorMessage = "Registration failed. Please try again.";
      if (err && typeof err === 'object') {
        const potentialAxiosError = err as { response?: { data?: ApiError | { message?: string } }; message?: string };
        if (potentialAxiosError.response?.data) {
          const errorData = potentialAxiosError.response.data;
          if (typeof errorData === 'object' && errorData !== null && 'message' in errorData && typeof errorData.message === 'string') {
            errorMessage = errorData.message;
          }
        } else if (potentialAxiosError.message) {
          errorMessage = potentialAxiosError.message;
        }
      }
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.formContainer}>
        <h2>Register</h2>
        {error && <p className={styles.errorMessage}>{error}</p>}
        {success && <p className={styles.successMessage}>{success}</p>}
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              className={styles.formInput}
              value={formData.username}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className={styles.formInput}
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              className={styles.formInput}
              value={formData.password}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="firstName">First Name (Optional):</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className={styles.formInput}
              value={formData.firstName}
              onChange={handleChange}
              disabled={isLoading}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="lastName">Last Name (Optional):</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className={styles.formInput}
              value={formData.lastName}
              onChange={handleChange}
              disabled={isLoading}
            />
          </div>
          <button type="submit" className={styles.submitButton} disabled={isLoading}>
            {isLoading ? "Registering..." : "Register"}
          </button>
        </form>
        <p className={styles.switchFormLink}>
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;

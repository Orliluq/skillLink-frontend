import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Acceso a la variable de entorno
  headers: {
    "Content-Type": "application/json"
  }
});

apiClient.interceptors.request.use(
  config => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      console.error(
        "Unauthorized or token expired. Logging out or attempting refresh."
      );
      // Aquí podrías intentar refrescar el token si tienes esa lógica implementada
      // Por ahora, simplemente deslogueamos:
      localStorage.removeItem("authToken");
      localStorage.removeItem("user");
      // Podrías usar un evento o un state manager para propagar el logout
      // window.location.href = '/login'; // Redirección forzada
    }
    return Promise.reject(error);
  }
);

export default apiClient;

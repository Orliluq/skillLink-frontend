// // src/components/layout/ProtectedRoute.tsx (o src/routes/ProtectedRoute.tsx)
// import React from "react";
// import { Navigate, Outlet, useLocation } from "react-router-dom";
// import { useAuth } from "../../contexts/AuthContext"; // Ajusta la ruta

// /* interface ProtectedRouteProps {
//   // Puedes añadir props si necesitas más lógica, como roles permitidos
//   // allowedRoles?: string[];
// } */

// const ProtectedRoute: React.FC/* <ProtectedRouteProps> */ = () => {
//   const { isAuthenticated, isLoading } = useAuth();
//   const location = useLocation();

//   if (isLoading) {
//     // Muestra un indicador de carga mientras se verifica el estado de autenticación
//     return <div>Loading authentication...</div>; // O un spinner más elaborado
//   }

//   if (!isAuthenticated) {
//     // Si no está autenticado, redirige a la página de login
//     // Guarda la ruta original para redirigir de vuelta después del login
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }

//   // Si está autenticado, renderiza el componente hijo (la página protegida)
//   return <Outlet />; // Outlet renderizará el componente hijo de la ruta
// };

// export default ProtectedRoute;

// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
// import ProtectedRoute from "./components/layout/ProtectedRoute";
import ProjectsPage from './pages/ProjectsPage';
import NotFoundPage from './pages/NotFoundPage';
import PublicProjectsPage from './pages/PublicProjectsPage';
import CreateProjectPage from './pages/CreateProjectPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import HowItWorksPage from './pages/HowItWorksPage';
import FAQPage from './pages/FAQPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import CookiePolicyPage from './pages/CookiePolicyPage';
import Chatbot from './components/chatbot/Chatbot';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import ChallengesPage from "./pages/ChallengesPage";
import MentorshipsPage from "./pages/MentorshipsPage";
import MentorshipDetailPage from "./pages/MentorshipDetailPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import RankingPage from "./pages/RankingPage";
import ForumPage from "./pages/ForumPage";
import "./App.css"; // Un archivo CSS para estilos globales de la app
import MentorshipTopicsPage from "./pages/MentorshipTopicsPage";
import CreateForumTopicPage from "./pages/CreateForumTopicPage";
import EditProfilePage from "./pages/EditProfilePage";
import CreateChallengePage from "./pages/CreateChallengePage";
import CreateMeetingPage from "./pages/CreateMeetingPage";
import MeetingsPage from "./pages/MeetingsPage";
import NotificationsPage from "./pages/NotificationsPage";
import BadgesPage from "./pages/BadgesPage";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function AppRoutes() {
  // const { isLoading } = useAuth(); // Podrías usar esto para mostrar un loader global
  // if (isLoading) return <div>Loading Application...</div>;

  return (
    <Router>
      <div className="app-container">
        {" "}
        {/* Para layout flex */}
        <Navbar />
        <main className="main-content">
          {" "}
          {/* Para el contenido principal */}
          <Routes>
            {/* Rutas Públicas */}
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/projects/public" element={<PublicProjectsPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/terms-of-service" element={<TermsOfServicePage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/cookie-policy" element={<CookiePolicyPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/challenges" element={<ChallengesPage />} />
            <Route path="/mentorships" element={<MentorshipsPage />} />
            <Route path="/mentorship-topics" element={<MentorshipTopicsPage />} />
            <Route path="/mentorships/:id" element={<MentorshipDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/ranking" element={<RankingPage />} />
            <Route path="/forum" element={<ForumPage />} />
            <Route path="/forum/create" element={<CreateForumTopicPage />} />
            <Route path="/profile/edit" element={<EditProfilePage />} />
            <Route path="/challenges/create" element={<CreateChallengePage />} />
            <Route path="/meetings/create" element={<CreateMeetingPage />} />
            <Route path="/meetings" element={<MeetingsPage />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/badges" element={<BadgesPage />} />
            {/* Rutas Protegidas */}
            {/* <Route element={<ProtectedRoute />}> */}
              <Route path="/profile/me" element={<ProfilePage />} />
              {/* Ejemplo para perfil de otro usuario (si implementas) */}
              <Route path="/profile/:userId" element={<ProfilePage />} />
              <Route path="/projects/explore" element={<ProjectsPage />} />
              <Route path="/projects/create" element={<CreateProjectPage />} />
              <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
              {/* ... más rutas protegidas ... */}
            {/* </Route> */}

            {/* Ruta para Página no encontrada */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;

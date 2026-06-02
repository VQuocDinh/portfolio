import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Contact from './components/Contact';
import VisitNotifier from './components/VisitNotifier';
import HomePage from './pages/HomePage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import SkillDetailPage from './pages/SkillDetailPage';

function App() {
  return (
    <div className="min-h-screen bg-apple-bg text-apple-text antialiased transition-colors duration-200">
      <VisitNotifier />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <main className="relative">
                <HomePage />
              </main>
              <Contact />
            </>
          }
        />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
        <Route path="/skills/:slug" element={<SkillDetailPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;

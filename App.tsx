import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Contact from './components/Contact';
import HomePage from './pages/HomePage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import SkillDetailPage from './pages/SkillDetailPage';

function App() {
  return (
    <div className="min-h-screen bg-white text-apple-text antialiased">
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

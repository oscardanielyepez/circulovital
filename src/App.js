// src/App.js
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import BlogPage from './pages/BlogPage';
import ArticlePage from './pages/ArticlePage';
import CheckoutPage from './pages/CheckoutPage';
import AboutPage from './pages/AboutPage'; 
import LoginPage from './pages/LoginPage';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/servicios" element={<ServicesPage />} />
            <Route path="/servicios/:serviceId" element={<ServiceDetailPage />} />
            <Route path="/checkout/:serviceId/:planIndex" element={<CheckoutPage />} />
            <Route path="/nosotros" element={<AboutPage />} />
            <Route path="/login" element={<LoginPage />} />
            {/* Rutas nuevas del Blog */}
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:articleId" element={<ArticlePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
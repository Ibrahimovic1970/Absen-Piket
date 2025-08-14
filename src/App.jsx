// src/App.jsx
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PiketPagi from './pages/PiketPagi';
import PiketSore from './pages/PiketSore';
import RekapAbsensi from './pages/RekapAbsensi';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  // Navigasi manual dengan hash
  const navigate = (page) => {
    setCurrentPage(page);
    window.history.pushState({}, '', `#${page}`);
  };

  // Tangkap navigasi back/forward
  useEffect(() => {
    const handlePop = () => {
      const page = window.location.hash.slice(1) || 'home';
      setCurrentPage(page);
    };
    window.addEventListener('popstate', handlePop);
    handlePop(); // Inisialisasi halaman
    return () => window.removeEventListener('popstate', handlePop);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home navigate={navigate} />;
      case 'piket-pagi': return <PiketPagi />;
      case 'piket-sore': return <PiketSore />;
      case 'rekap-absensi': return <RekapAbsensi />;
      default: return <Home navigate={navigate} />;
    }
  };

  return (
    <div className="app">
      <Navbar navigate={navigate} />
      <main className="main-content">
        <div className="page-transition">
          {renderPage()}
        </div>
      </main>
    </div>
  );
};

export default App;
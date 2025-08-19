// src/components/Navbar.jsx
import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar = ({ navigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  return (
    <nav className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <h2>📝 Absen Piket</h2>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="menu-toggle"
          style={{
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
          }}
        >
          {isMenuOpen ? '←' : '☰'}
        </button>
      </div>
      <ul className="menu-items">
        <li onClick={() => navigate('home')}>
          <span role="img" aria-label="home">🏠</span> Home
        </li>
        <li onClick={() => navigate('piket-pagi')}>
          <span role="img" aria-label="pagi">🌅</span> Piket Pagi
        </li>
        <li onClick={() => navigate('piket-sore')}>
          <span role="img" aria-label="sore">🌇</span> Piket Sore
        </li>
        <li onClick={() => navigate('rekap-absensi')}>
          <span role="img" aria-label="rekap">📊</span> Rekap Absensi
        </li>
        <li>
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
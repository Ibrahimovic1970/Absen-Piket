// src/components/ThemeToggle.jsx
import React from 'react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
    const { darkMode, toggleTheme } = useTheme();

    // Update body class saat mode berubah
    React.useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [darkMode]);

    return (
        <div className="theme-toggle-wrapper">
            <button
                onClick={toggleTheme}
                className="theme-toggle-btn"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.4rem 0.8rem',
                    border: '1px solid #ccc',
                    borderRadius: '6px',
                    background: 'none',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    color: darkMode ? '#e0e0e0' : '#333',
                    transition: 'all 0.3s ease',
                }}
            >
                {darkMode ? '☀️ Siang' : '🌙 Malam'}
            </button>
        </div>
    );
}
// src/pages/Home.jsx
import React from 'react';

const Home = ({ navigate }) => {
    return (
        <section id="home" className="home-section">
            <div className="home-content">
                <h1>✨ Absen Piket</h1>
                <p className="tagline">
                    Sistem absensi piket sekolah berasrama
                </p>
                <div className="quote">
                    "Kedisiplinan dimulai dari hal kecil."
                </div>
                <div className="home-actions">
                    <button onClick={() => navigate('piket-pagi')} className="btn-primary">Piket Pagi</button>
                    <button onClick={() => navigate('piket-sore')} className="btn-secondary">Piket Sore</button>
                </div>
            </div>
        </section>
    );
};

export default Home;
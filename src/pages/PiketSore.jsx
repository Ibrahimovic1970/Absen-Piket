// src/pages/PiketSore.jsx
import React, { useState } from 'react';
import AbsensiPiket from '../components/AbsensiPiket';
import TanggalPicker from '../components/TanggalPicker';

const PiketSore = () => {
    const [tanggal, setTanggal] = useState(new Date());

    const initialStudents = [
        { id: 6, name: 'Fajar Wijaya', area: 'Lantai 3' },
        { id: 7, name: 'Gita Permata', area: 'Tangga Belakang' },
        { id: 8, name: 'Hendri Saputra', area: 'Kantin' },
        { id: 9, name: 'Indah Sari', area: 'Halaman Depan' },
        { id: 10, name: 'Joko Susanto', area: 'Ruang Ibadah' },
    ];

    return (
        <section id="piket-sore">
            <h2>🌇 Piket Sore</h2>
            <TanggalPicker selectedDate={tanggal} onChange={setTanggal} />
            <AbsensiPiket title="Piket Sore" initialStudents={initialStudents} date={tanggal} />
        </section>
    );
};

export default PiketSore;
// src/pages/PiketPagi.jsx
import React, { useState } from 'react';
import AbsensiPiket from '../components/AbsensiPiket';
import TanggalPicker from '../components/TanggalPicker';

const PiketPagi = () => {
    const [tanggal, setTanggal] = useState(new Date());

    const initialStudents = [
        { id: 1, name: 'Andi Pratama', area: 'Lantai 1' },
        { id: 2, name: 'Budi Santoso', area: 'Tangga Utama' },
        { id: 3, name: 'Citra Dewi', area: 'Lantai 2' },
        { id: 4, name: 'Dina Lestari', area: 'Perpustakaan' },
        { id: 5, name: 'Eka Putri', area: 'Ruang Guru' },
    ];

    return (
        <section id="piket-pagi">
            <h2>🌅 Piket Pagi</h2>
            <TanggalPicker selectedDate={tanggal} onChange={setTanggal} />
            <AbsensiPiket title="Piket Pagi" initialStudents={initialStudents} date={tanggal} />
        </section>
    );
};

export default PiketPagi;
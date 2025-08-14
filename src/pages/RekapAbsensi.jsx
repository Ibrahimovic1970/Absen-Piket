// src/pages/RekapAbsensi.jsx
import React, { useState } from 'react';
import TanggalPicker from '../components/TanggalPicker';
import { exportToExcel } from '../utils/exportExcel';

const RekapAbsensi = () => {
    const [tanggal, setTanggal] = useState(new Date());

    const handleExportAll = (type) => {
        const students = type === 'pagi'
            ? [
                { id: 1, name: 'Andi Pratama', area: 'Lantai 1' },
                { id: 2, name: 'Budi Santoso', area: 'Tangga Utama' },
            ]
            : [
                { id: 6, name: 'Fajar Wijaya', area: 'Lantai 3' },
                { id: 7, name: 'Gita Permata', area: 'Tangga Belakang' },
            ];

        const dayNames = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];
        const status = {};
        students.forEach(s => {
            dayNames.forEach(d => {
                status[`${s.id}-${d}`] = '✓';
            });
        });

        const exportData = students.map(s => {
            const row = { 'Nama': s.name, 'Area': s.area };
            dayNames.forEach(d => row[d] = status[`${s.id}-${d}`]);
            return row;
        });

        exportToExcel(exportData, `Rekap_${type === 'pagi' ? 'Pagi' : 'Sore'}_${tanggal.toISOString().split('T')[0]}`);
    };

    return (
        <section id="rekap-absensi" className="rekap-section">
            <h2>📊 Rekapan Absensi Piket</h2>
            <p>Pilih tanggal untuk melihat dan mengunduh rekap absensi piket pagi dan sore.</p>

            <TanggalPicker selectedDate={tanggal} onChange={setTanggal} />

            <div className="rekap-actions">
                <button onClick={() => handleExportAll('pagi')} className="rekap-btn">
                    📥 Unduh Rekap Piket Pagi
                </button>
                <button onClick={() => handleExportAll('sore')} className="rekap-btn">
                    📥 Unduh Rekap Piket Sore
                </button>
                <button onClick={() => handleExportAll('all')} className="rekap-btn" style={{ background: '#8e44ad' }}>
                    📎 Unduh Semua Rekap
                </button>
            </div>
        </section>
    );
};

export default RekapAbsensi;
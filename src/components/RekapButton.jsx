// src/components/RekapButton.jsx
import React from 'react';
import { exportToExcel } from '../utils/exportExcel';

const RekapButton = ({ students, status, title, date }) => {
    const dayNames = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];
    const dateStr = date.toLocaleDateString('id-ID');

    const handleExport = () => {
        const exportData = students.map((s) => ({
            'Nama Siswa': s.name,
            'Area': s.area || '-',
            ...dayNames.reduce((acc, day) => {
                acc[day] = status[`${s.id}-${day}`] || 'belum';
                return acc;
            }, {})
        }));

        exportToExcel(exportData, `Rekap_${title}_${dateStr.replace(/\//g, '-')}`);
    };

    return (
        <button onClick={handleExport} className="rekap-btn">
            📥 Unduh Rekap {title} (Excel)
        </button>
    );
};

export default RekapButton;
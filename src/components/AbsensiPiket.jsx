// src/components/AbsensiPiket.jsx
import React, { useState, useEffect } from 'react';
import RekapButton from './RekapButton';
import AddStudentArea from './AddStudentArea';
import '../App.css';

const daysOfWeek = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];

const AbsensiPiket = ({ title, initialStudents, date }) => {
    const [students, setStudents] = useState(initialStudents);
    const [status, setStatus] = useState(() => {
        const saved = localStorage.getItem(`absensi-${title}-${date.toISOString().split('T')[0]}`);
        if (saved) return JSON.parse(saved);

        const init = {};
        students.forEach((s) => {
            daysOfWeek.forEach((day) => {
                init[`${s.id}-${day}`] = 'belum';
            });
        });
        return init;
    });

    useEffect(() => {
        localStorage.setItem(`absensi-${title}-${date.toISOString().split('T')[0]}`, JSON.stringify(status));
    }, [status, title, date]);

    const updateStatus = (id, day, newStatus) => {
        setStatus((prev) => ({ ...prev, [`${id}-${day}`]: newStatus }));
    };

    const resetAll = () => {
        if (window.confirm(`Reset semua status ${title}?`)) {
            const resetStatus = {};
            students.forEach((s) => {
                daysOfWeek.forEach((day) => {
                    resetStatus[`${s.id}-${day}`] = 'belum';
                });
            });
            setStatus(resetStatus);
        }
    };

    // Kelompokkan siswa berdasarkan area piket
    const groupedStudents = students.reduce((acc, student) => {
        const area = student.area;
        if (!acc[area]) {
            acc[area] = [];
        }
        acc[area].push(student);
        return acc;
    }, {});

    return (
        <section className="absensi-section">
            <div className="section-header">
                <h3>{title}</h3>
                <div className="info-date">
                    📅 {date.toLocaleDateString('id-ID', {
                        day: '2-digit',
                        month: 'long',
                        year: 'numeric'
                    })}
                </div>
            </div>

            <AddStudentArea students={students} setStudents={setStudents} />

            <div className="actions">
                <RekapButton students={students} status={status} title={title} date={date} />
                <button onClick={resetAll} className="reset-btn">🗑️ Reset Semua</button>
            </div>

            {/* Tabel Piket */}
            <table className="absensi-table">
                <thead>
                    <tr>
                        <th>Nama Siswa</th>
                        <th>Area</th>
                        {daysOfWeek.map(day => (
                            <th key={day}>{day}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(groupedStudents).map(([area, group]) => (
                        <React.Fragment key={area}>
                            {/* Header Area */}
                            <tr className="area-header">
                                <td colSpan={2}>{area}</td>
                                {daysOfWeek.map(day => (
                                    <td key={day}></td>
                                ))}
                            </tr>
                            {/* Data Siswa */}
                            {group.map(student => (
                                <tr key={student.id}>
                                    <td>{student.name}</td>
                                    <td>{student.area}</td>
                                    {daysOfWeek.map(day => (
                                        <td key={day} className={`status-cell ${status[`${student.id}-${day}`]}`}>
                                            <button
                                                className="status-btn"
                                                onClick={() => updateStatus(student.id, day, '✓')}
                                            >
                                                ✓
                                            </button>
                                            <button
                                                className="status-btn"
                                                onClick={() => updateStatus(student.id, day, '✗')}
                                            >
                                                ✗
                                            </button>
                                            <button
                                                className="status-btn"
                                                onClick={() => updateStatus(student.id, day, 'I')}
                                            >
                                                I
                                            </button>
                                            <button
                                                className="status-btn"
                                                onClick={() => updateStatus(student.id, day, 'S')}
                                            >
                                                S
                                            </button>
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </section>
    );
};

export default AbsensiPiket
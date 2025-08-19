// src/components/AddStudentArea.jsx
import React, { useState } from 'react';

const AddStudentArea = ({ students, setStudents }) => {
    const [newName, setNewName] = useState('');
    const [newArea, setNewArea] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newName || !newArea) return;

        const newId = Math.max(...students.map(s => s.id), 0) + 1;
        const newStudent = { id: newId, name: newName, area: newArea };
        setStudents([...students, newStudent]);
        setNewName('');
        setNewArea('');
    };

    return (
        <form onSubmit={handleSubmit} className="add-student-form">
            <h3>➕ Tambah Siswa</h3>
            <div className="form-group">
                <label>Nama Siswa</label>
                <input
                    type="text"
                    placeholder="Masukkan Nama Siswa"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label>Area Piket</label>
                <input
                    type="text"
                    placeholder="Masukkan Area Piket"
                    value={newArea}
                    onChange={(e) => setNewArea(e.target.value)}
                    required
                />
            </div>
            <button type="submit" className="btn-add">Tambah Siswa</button>
        </form>
    );
};

export default AddStudentArea;
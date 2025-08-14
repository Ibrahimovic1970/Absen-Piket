// src/components/TanggalPicker.jsx
import React from 'react';

const TanggalPicker = ({ selectedDate, onChange }) => {
    const handleDateChange = (e) => {
        const date = new Date(e.target.value);
        if (!isNaN(date.getTime())) {
            onChange(date);
        }
    };

    return (
        <div className="tanggal-picker">
            <label>📅 Pilih Tanggal: </label>
            <input
                type="date"
                value={selectedDate.toISOString().split('T')[0]}
                onChange={handleDateChange}
            />
        </div>
    );
};

export default TanggalPicker;
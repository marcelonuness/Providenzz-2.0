"use client"
import { useState } from 'react';

export default function Popup({ addConsult, selectedDate, setSelectedDate, closePopUp }) {
  const [patientName, setPatientName] = useState('');
  const [duration, setDuration] = useState('15 min');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    
    e.preventDefault()
    const newConsult = { nome, data: selectedDate, duration, description }
    addConsult(newConsult)
    setPatientName("")
    setDuration("")
    setDescription("")   
  };

  return (
    <div id='popupAgendamento' className="popup-overlay" onSubmit={handleSubmit}>
      <form className="popup" onClick={e => e.stopPropagation()}>
        <h2>Agendar Consulta</h2>
        <div className="input-container">
          <label>Nome do Paciente</label>
          <input
            type="text"
            value={patientName}
            onChange={e => setPatientName(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label>Dia</label>
          <input
            type="date"
            value={selectedDate}
            onChange={e => setSelectedDate(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label>Duração da Consulta</label>
          <select value={duration} onChange={e => setDuration(e.target.value)}>
            <option value="15 min">15 min</option>
            <option value="30 min">30 min</option>
            <option value="60 min">60 min</option>
          </select>
        </div>
        <div className="input-container">
          <label>Descrição</label>
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>
        <div className="button-container">
          <button className="save-button" onClick={handleSubmit}>
            Salvar
          </button>
          <button className="cancel-button" onClick={closePopUp}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};
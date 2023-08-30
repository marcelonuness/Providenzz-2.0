"use client"
import { useState, useEffect } from "react"

export default function PopUp ({ selectedDate, onClose }) {
  const [patientName, setPatientName] = useState("")
  const [dataPopUp, setDataPopUp] = useState("")
  const [duration, setDuration] = useState("15 min")
  const [description, setDescription] = useState("")

  useEffect(() => {
    if (selectedDate) {
      const formattedDate = selectedDate.toISOString().split('T')[0]
      setDataPopUp(formattedDate)
    }
  }, [selectedDate])

  const handleSave = () => {
    const appointmentData = {
      patientName,
      selectedDate: dataPopUp,
      duration,
      description
    };
    onClose(appointmentData)
};

const handleClose = () => {
  setDataPopUp("")
  onClose()
};

  return (
    <div className="popup-overlay" onClick={handleClose}>
      <div className="popup" onClick={e => e.stopPropagation()}>
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
            value={dataPopUp}
            onChange={(e) => setDataPopUp(e.target.value)}
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
          <button className="save-button" onClick={handleSave}>
            Salvar
          </button>
          <button className="cancel-button" onClick={handleClose}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  )
}

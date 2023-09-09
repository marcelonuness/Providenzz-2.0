"use client"

export default function Consults({data}) {
    return (
        <div className="border border-black border-opacity-40 rounded-md p-5 flex flex-col items-center">
            <h2 className="text-3xl font-semibold mb-4">Consultas Marcadas</h2>
        <ul>
          {data?.map((consults) => (
            <li key={consults.id} className="shadow-lg m-2 p-3">
              <strong>Paciente:</strong> {consults.patientName},{' '}
              <strong>Médico:</strong> {consults.doctorName},{' '}
              <strong>Data:</strong> {consults.selectedDate.toString()},{' '}
              <strong>Duração:</strong> {consults.duration},{' '}
              <strong>Descrição:</strong> {consults.description}
            </li>
          ))}
        </ul>
        </div>
          
    )
}
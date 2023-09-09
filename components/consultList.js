"use client"
import { useEffect, useState } from 'react';
import { PrismaClient } from '@prisma/client';

export default function ConsultList() {
    const [appointments, setAppointments] = useState([]);

    const prisma = new PrismaClient();
    useEffect(() => {
        const fetchAppointments = async () => {
          try {
            const fetchedAppointments = await prisma.appointment.findMany();
            setAppointments(fetchedAppointments);
          } catch (error) {
            console.error('Erro ao buscar as consultas:', error);
          }
        };
    
        fetchAppointments();
      }, []);
    
    return(
        <div className="w-full flex flex-col items-center justify-center mt-10">
            <h1 className="text-2xl cursor-pointer font-semibold mb-7 hover:border-b-2 hover:border-[#1F4D36]">Consultas Agendadas:</h1>
            <div className="w-full shadow-inner p-5">
            <ul>
                {appointments.map((appointment) => (
                <li key={appointment.id}>
                    <strong>Paciente:</strong> {appointment.patientName},{' '}
                    <strong>Data:</strong> {appointment.selectedDate.toString()},{' '}
                    <strong>Duração:</strong> {appointment.duration},{' '}
                    <strong>Descrição:</strong> {appointment.description}
                </li>
                ))}
            </ul>
            </div>
        </div>
    )
}
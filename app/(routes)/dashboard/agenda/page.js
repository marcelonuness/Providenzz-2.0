"use client"
import Calendar from "@/components/calendar";
import ConsultList from "@/components/consultList";
import Popup from "@/components/popup";
import { useState } from "react";

export default function Agenda() {
    const [consults, setConsults] = useState([])
    const [isPopUpFormOpen, setIsPopupOpenFormOpen] = useState(false)
    const [consultPopUp, setConsultPopUp] = useState(null)
    const [selectedDate, setSelectedDate] = useState("")

    const addConsult = (newConsult) => {
        setConsults([...consults, newConsult])
    }

    const openPopUp = (consult) => {
        setConsultPopUp(consult)
    }

    const closePopUp = () => {
        setConsultPopUp(null)
    }

    const handleSelectedDate = (date) => {
        setSelectedDate(date)
    }

    return (
        <div className="w-full">
            <div className="w-full flex flex-col items-center justify-center p-5">
                <h1 className="text-5xl m-8 hover:border-b-2 cursor-pointer hover:border-[#1F4D36]">Minha Agenda</h1>
<<<<<<< HEAD
<<<<<<< HEAD
                <Calendar onDataSelect={handleSelectedDate} ></Calendar>
                <Popup addConsult={addConsult} selectedDate={selectedDate}></Popup>
                <div className="w-full flex flex-col items-center justify-center mt-10">
                    <h1 className="text-2xl cursor-pointer font-semibold mb-7 hover:border-b-2 hover:border-[#1F4D36]">Consultas Agendadas:</h1>
                    <div className="w-full shadow-inner p-5">
                        <ConsultList consults={consults} openPopUp={openPopUp}></ConsultList>
                        {consultPopUp && (
                            <div className="popup-overlay">
                                <h2>{popUpconsult.name}</h2>
                                <p>Data: {popUpconsult.date}</p>
                                <p>Duração: {popUpconsult.duration}</p>
                                <p>Descricao: {popUpconsult.description}</p>
                                <button onClick={closePopUp}>Fechar</button>
                            </div>
                        )}
                    </div>
                </div>
=======
                <Calendar></Calendar>
                <ConsultList></ConsultList>
>>>>>>> parent of b84a17e (ult-commit)
=======
                <Calendar></Calendar>
                <ConsultList></ConsultList>
>>>>>>> parent of b84a17e (ult-commit)
            </div>
        </div>
    )
}
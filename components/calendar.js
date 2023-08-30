"use client"

import { useState } from 'react';
import PopUp from "@/components/popup"


export default function Calendar() {
  const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']
  const months = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ]

  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState(null)
  const [currentDate, setCurrentDate] = useState(new Date())

  const prevMonth = () => {
    const newDate = new Date(currentDate)
    newDate.setMonth(newDate.getMonth() - 1)
    setCurrentDate(newDate);
  }

  const nextMonth = () => {
    const newDate = new Date(currentDate)
    newDate.setMonth(newDate.getMonth() + 1)
    setCurrentDate(newDate)
  }


  const handleDayClick = (date) => {
    setIsPopupOpen(true)
    setSelectedDate(date) 
  }

  const handleClosePopup = () => {
    setIsPopupOpen(false)
  }


  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate()

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay()

  const renderDays = () => {
    const days = []
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div className="day empty" key={`empty-${i}`}></div>)
    }
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), i)
      days.push(
        <div
          className="day"
          key={i}
          onClick={() => handleDayClick(date)}
        >
          {i}
        </div>
      );
    }
    return days
  }


  return (
    <section className="calendar-container flex-col">
      <h1 className="mb-5 text-4xl font-semibold">Meu Calendário</h1>
      <div className="calendar">
        <div className="header">
          <button onClick={prevMonth}>&lt;</button>
          <div className="month-year">
            {months[currentDate.getMonth()]} {currentDate.getFullYear()}
          </div>
          <button onClick={nextMonth}>&gt;</button>
        </div>
        <div className="days-of-week">
          {daysOfWeek.map(day => (
            <div className="day-of-week" key={day}>{day}</div>
          ))}
        </div>
        <div className="days">{renderDays(handleDayClick)}</div>
      </div>
      {isPopupOpen && <PopUp selectedDate={selectedDate} onClose={handleClosePopup} />}
    </section>
  )
}

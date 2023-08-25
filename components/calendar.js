"use client"
import { useState } from 'react';

export default function Calendar() {
  const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  const months = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'November', 'Dezembro'
  ];

  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null)
  

   const handleDayClick = (date) => {
    if (date) {
      setSelectedDate(date)
      setIsPopupOpen(true); // Abra o pop-up ao clicar em um dia específico
    }
  };   

  const prevMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() - 1);
    setCurrentDate(newDate);
  };

  const nextMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + 1);
    setCurrentDate(newDate);
  };

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const renderDays = () => {
    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div className="day empty" key={`empty-${i}`}></div>);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), i)  
      days.push(
        <div className="day" key={i} onClick={() => {handleDayClick(date)}}>{i}</div>
      );
    }
    return days
  };

  return (
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
      <div className="days">{renderDays()}</div>
    </div>
  );
};
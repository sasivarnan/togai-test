import React, { useState } from "react";
import Day from "./Day";

let days =  Array.from(new Array(30), (item, index) => index + 1);

console.log(days)

// const getChunks = (days) => {
//   const chunk = []
//   return 
// }

// console.log(weeks);

// days.fill()

// days = [...days.map((day, index) => index + 1)]


// const days = [1, 2, 3, 4, 5, 6, 7];

const Calendar = () => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [hoverDate, setHoverDate] = useState();

  const handleDateClick = (day) => {
    if (!startDate) {
      setStartDate(day);
    } else {
      setEndDate(day);
    }
  };

  const handleDateHover = (day) => {
    setHoverDate(day);
  };

  const handleDateHoverOut = (day) => {
    setHoverDate();
  };

  return (
    <div className="text-black flex flex-wrap w-52">
      {days.map((day) => (
        <Day
          key={day}
          day={day}
          onClick={handleDateClick}
          isEndDate={day === endDate}
          isStartDate={day === startDate}
          isWithinRange={day > startDate && (day < endDate || day < hoverDate)}
          onHover={handleDateHover}
          onHoverOut={handleDateHoverOut}
        />
      ))}
    </div>
  );
};

export default Calendar;

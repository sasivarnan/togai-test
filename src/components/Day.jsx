import React from "react";
import clsx from "clsx";

const Day = ({ day, isStartDate, isEndDate, isWithinRange, onClick, onHover, onHoverOut }) => {
  return (
    <div
      onClick={(event) => {
        event.stopPropagation();
        onClick(day);
      }}
      className={clsx("w-7 my-2 h-7 flex justify-center items-center", {
        "rounded-full bg-blue-500": isStartDate || isEndDate,
        "bg-blue-100": isWithinRange,
      })}
      onMouseEnter={() => onHover(day)}
      onMouseLeave={() => onHoverOut(day)}
    >
      {day}
    </div>
  );
};

export default Day;

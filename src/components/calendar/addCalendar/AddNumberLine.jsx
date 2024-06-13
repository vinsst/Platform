import React, { useState } from "react";
import { useSelector } from "react-redux";

function AddNumberLine() {
  const { lineNumCalendar } = useSelector(
    (state) => state.calendar.counterLinesCalendarReducer
  );

  let addH;

  switch (lineNumCalendar) {
    case 1:
      addH = "General info";
      break;
    case 2:
      addH = "Groups";
      break;
    case 3:
      addH = "Users";
      break;
    case 4:
      addH = "Automation";
      break;
    default:
      addH = "General info";
      break;
  }

  return (
    <div className="numberLineAndTxt_container">
      <div className="numberLine_container">
        {[1, 2, 3, 4].map((num, index) => (
          <div className="numberLine_circPline">
            <div
              key={num}
              className={`${
                num <= lineNumCalendar
                  ? "numberLine__circle numberLine__circle_black"
                  : "numberLine__circle"
              }`}
            >
              {num}
            </div>
            <div
              className={`${
                num <= lineNumCalendar
                  ? "numberLine_line numberLine_line_black"
                  : "numberLine_line"
              }`}
            ></div>
          </div>
        ))}
      </div>
      <div className="numberLine_h">
        <span className="numberLine_h_txt">{addH}</span>
      </div>
    </div>
  );
}

export default AddNumberLine;

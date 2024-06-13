import React from "react";

import LeftNav from "../components/leftFullNav/LeftNav";
import CalendarMain from "../components/calendar/calendar/CalendarMain";

function Calendar() {
  return (
    <main className="homeMain">
      <LeftNav />
      <CalendarMain />
    </main>
  );
}

export default Calendar;

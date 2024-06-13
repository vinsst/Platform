import React from "react";

import LeftNav from "../components/leftFullNav/LeftNav";
import AddCalendarMain from "../components/calendar/addCalendar/AddCalendarMain";

function AddCalendar() {
  return (
    <main className="homeMain">
      <LeftNav />
      <AddCalendarMain />
    </main>
  );
}

export default AddCalendar;

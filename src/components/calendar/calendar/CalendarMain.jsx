import React from "react";

import RightMainRoutes from "../../RightMainRoutes";
import CalendarConnectMail from "./CalendarConnectMail";
import CalendarAdd from "./CalendarAdd";

function CalendarMain() {
  return (
    <div className="rightMain_container container">
      <div className="rightMain_content">
        <RightMainRoutes routeName="Calendar" showBurger />
        <CalendarAdd />
        <CalendarConnectMail />
      </div>
    </div>
  );
}

export default CalendarMain;

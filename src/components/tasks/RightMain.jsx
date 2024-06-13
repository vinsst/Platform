import React from "react";

import RightMainRoutes from "../RightMainRoutes";
import RightMainAdd from "./RightMainAdd";
import Task from "./Task";

function RightMain() {
  return (
    <div className="rightMain_container container">
      <div className="rightMain_content">
        <RightMainRoutes routeName="My tasks" />
        <RightMainAdd />
        <Task />
      </div>
    </div>
  );
}

export default RightMain;

import React from "react";

import RightMainRoutes from "../components/RightMainRoutes";
import RightMainAdd from "../components/RightMainAdd";
import RightMainZero from "../components/RightMainZero";
import RightMainService from "../components/RightMainService";

function RightMain() {
  return (
    <div className="rightMain_container container">
      <div className="rightMain_content">
        <RightMainRoutes />
        <RightMainAdd />
        <RightMainZero />
        <RightMainService />
      </div>
    </div>
  );
}

export default RightMain;

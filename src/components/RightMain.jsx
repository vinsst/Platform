import React from "react";

import { useSelector } from "react-redux";

import RightMainRoutes from "../components/RightMainRoutes";
import RightMainAdd from "../components/RightMainAdd";
import RightMainZero from "../components/RightMainZero";
import RightMainService from "../components/RightMainService";

function RightMain() {
  const { services } = useSelector((state) => state.counterReducer);

  const servicesArray = Array.from({ length: services }, (_, index) => (
    <RightMainService key={index} />
  ));

  function showZero() {
    if (services === 0) {
      return <RightMainZero />;
    } else {
      return <div className="space_inst_zero"></div>;
    }
  }
  return (
    <div className="rightMain_container container">
      <div className="rightMain_content">
        <RightMainRoutes />
        <RightMainAdd />
        {showZero()}
        {servicesArray}
      </div>
    </div>
  );
}

export default RightMain;

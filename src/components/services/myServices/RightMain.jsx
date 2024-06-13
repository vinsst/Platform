import React from "react";

import { useSelector } from "react-redux";

import RightMainRoutes from "../../RightMainRoutes";
import RightMainAdd from "./RightMainAdd";
import RightMainZero from "./RightMainZero";
import RightMainService from "./RightMainService";

function RightMain() {
  const { services } = useSelector((state) => state.services.counterReducer);

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
        <RightMainRoutes routeName="My Services" showBurger />
        <RightMainAdd />
        {showZero()}
        {servicesArray}
      </div>
    </div>
  );
}

export default RightMain;

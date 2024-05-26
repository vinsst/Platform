import React from "react";
import { useSelector } from "react-redux";

import RightMainRoutes from "../myServices/RightMainRoutes";
import BackNext from "./BackNext";
import AddNumberLine from "./AddNumberLine";
import AddGeneral from "./AddGeneral";
import AddPrices from "./AddPrices";
import AddMedia from "./AddMedia";
import AddSupplier from "./AddSupplier";

function RightMain() {
  const { lineNum } = useSelector((state) => state.counterLinesReducer);
  let componentToRender;

  switch (lineNum) {
    case 1:
      componentToRender = <AddGeneral />;
      break;
    case 2:
      componentToRender = <AddPrices />;
      break;
    case 3:
      componentToRender = <AddMedia />;
      break;
    case 4:
      componentToRender = <AddSupplier />;
      break;
    default:
      componentToRender = <AddGeneral />;
      break;
  }
  return (
    <div className="rightMain_container container">
      <div className="rightMain_content">
        <RightMainRoutes />
        <div className="addRightMain_h1">Add Service</div>
        <AddNumberLine />
        {componentToRender}
        <BackNext />
      </div>
    </div>
  );
}

export default RightMain;

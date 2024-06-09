import React from "react";
import RightMainRoutes from "./RightMainRoutes";
import RightMainAdd from "./RightMainAdd";
import RightMainPhotos from "./RightMainPhotos";
import RightMainNameDescription from "./RightMainNameDescription";
import RightMainPrices from "./RightMainPrices";
import RightMainSupplier from "./RightMainSupplier";

function RightMain() {
  return (
    <div className="rightMain_container container">
      <div className="rightMain_content">
        <RightMainRoutes />
        <RightMainAdd />
        <RightMainPhotos />
        <RightMainNameDescription />
        <RightMainPrices />
        <RightMainSupplier />
      </div>
    </div>
  );
}

export default RightMain;

import React from "react";
import hatRoutes from "../assets/img/hatRoutes.svg";

function RightMainRoutes() {
  return (
    <div className="rightMain__content_routes">
      <img src={hatRoutes} alt="" className="rightMain__content_img" />
      <span className="rightMain__content_slash">/</span>
      <span className="rightMain__content_routeName">My Services</span>
    </div>
  );
}

export default RightMainRoutes;

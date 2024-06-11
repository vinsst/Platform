import React from "react";
import hatRoutes from "../../assets/img/hatRoutes.svg";

function RightMainRoutes() {
  return (
    <div className="rightMain__content_routes">
      <div className="rightMain__content_routes_content">
        <img src={hatRoutes} alt="" className="rightMain__content_img" />
        <span className="rightMain__content_slash rightMain__content_routeName_lighter">
          /
        </span>
        <div className="rightMain__content_routeName">My tasks</div>
      </div>
    </div>
  );
}

export default RightMainRoutes;

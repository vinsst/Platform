import React, { useState } from "react";

import edit from "../assets/img/edit.svg";
import pause from "../assets/img/pause.svg";
import verticalPoints from "../assets/img/verticalPoints.svg";

function RightMainService() {
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat";
  const words = text.split(" ");
  const displayedText = words.slice(0, 7).join(" ");
  const shouldDisplayEllipsis = words.length > 7;
  return (
    <div className="rightMain__content_service">
      <div className="rightMain__content_service_leftSide">
        <div className="rightMain__content_service_rect"></div>
        <div className="rightMain__content_service_txt">
          <div className="rightMain__content_service_txt_title">Title</div>
          <div className="rightMain__content_service_txt_span">
            {shouldDisplayEllipsis ? `${displayedText}...` : displayedText}
          </div>
        </div>
      </div>

      <div className="rightMain__content_service_btns">
        <div className="rightMain__content_service_btns_content">
          <img src={edit} alt="" className="rightMain__content_service_btn" />
          <img src={pause} alt="" className="rightMain__content_service_btn" />
          <img
            src={verticalPoints}
            alt=""
            className="rightMain__content_service_btn"
          />
        </div>
      </div>
    </div>
  );
}

export default RightMainService;

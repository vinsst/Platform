import React from "react";

import platform1_img_img from "../../../assets/img/platform1_img_img.svg";

function CalendarConnectMail() {
  return (
    <div className="rightMain__content_zero_container">
      <div className="rightMain__content_zero_content">
        <img
          src={platform1_img_img}
          alt=""
          className="rightMain__content_zero_img"
          width="100px"
        />
        <h5 className="rightMain__content_zero_txt1">Connect Your Account</h5>
        <span className="rightMain__content_zero_txt2">
          Clicking on “Connect” will open the Gmail connection page in order to
          create this integration.
        </span>
        <div className="calendar__connect_btn_container">
          <div className="calendar__connect_btn">Connect Outlook Account</div>
          <div className="calendar__connect_btn_txt">or</div>
          <div className="calendar__connect_btn">
            Continue with Gmail Account
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalendarConnectMail;

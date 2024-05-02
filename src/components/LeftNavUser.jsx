import React from "react";

import LeftNavUserCompo from "../components/LeftNavUserCompo";

import shopping_bag from "../assets/img/shopping_bag.svg";
import user from "../assets/img/user.svg";
import fluent_payment from "../assets/img/fluent_payment.svg";
import calendar from "../assets/img/calendar.svg";
import file_text from "../assets/img/file_text.svg";
import alertInfocircle from "../assets/img/alertInfocircle.svg";
import logOut from "../assets/img/logOut.svg";

function LeftNavUser() {
  return (
    <div className="homeMain__left_nav_bottom_clicked ">
      <LeftNavUserCompo img={shopping_bag} text="Plan" />
      <LeftNavUserCompo img={user} text="Personal Info" />
      <LeftNavUserCompo img={fluent_payment} text="Payment details" />
      <LeftNavUserCompo img={calendar} text="Calendars settings" />
      <LeftNavUserCompo img={file_text} text="Document settings" />
      <LeftNavUserCompo img={file_text} text="Blog" />
      <LeftNavUserCompo img={file_text} text="Video lessons" />
      <LeftNavUserCompo img={alertInfocircle} text="Support" />
      <LeftNavUserCompo img={logOut} text="Logout" />
    </div>
  );
}

export default LeftNavUser;

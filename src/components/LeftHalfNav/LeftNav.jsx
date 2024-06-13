import React, { useState } from "react";

import LeftNavCompo from "./LeftNavCompo";
import LeftNavCompoBottom from "./LeftNavCompoBottom";
import LeftNavUser from "./LeftNavUser";

import nav_left from "../../assets/img/nav_left.svg";
import file_text from "../../assets/img/file_text.svg";
import calendar from "../../assets/img/calendar.svg";
import message_circle from "../../assets/img/message_circle.svg";
import tabler_folder from "../../assets/img/tabler_folder.svg";
import tabler_list_check from "../../assets/img/tabler_list_check.svg";
import tabler_subtask from "../../assets/img/tabler_subtask.svg";

function LeftNav() {
  const [LeftNavUserShowed, setLeftNavUserShowed] = useState(false);

  const showSidebar = () => setLeftNavUserShowed(!LeftNavUserShowed);

  return (
    <nav className="left_nav_half">
      <div className="left_nav_top_half">
        <div className="left_nav_logoBurger_half">
          <div className="left_nav_logo_half">Logo</div>
        </div>
        <LeftNavCompo img={nav_left} />
        <LeftNavCompo img={tabler_folder} />
        <LeftNavCompo img={tabler_subtask} />
        <LeftNavCompo img={tabler_list_check} to="/tasks" />
        <LeftNavCompo img={calendar} to="/calendar" />
        <LeftNavCompo img={file_text} />
        <LeftNavCompo img={message_circle} />
      </div>
      <LeftNavCompoBottom onClick={showSidebar} />
      {LeftNavUserShowed ? <LeftNavUser /> : <></>}
    </nav>
  );
}

export default LeftNav;

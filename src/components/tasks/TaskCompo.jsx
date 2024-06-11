import React from "react";

import checkbox from "../../assets/img/checkbox.svg";
import calendar from "../../assets/img/calendar.svg";
import sliders from "../../assets/img/sliders.svg";
import mailAva from "../../assets/img/mailAva.svg";
import threeDots from "../../assets/img/verticalPoints.svg";

function TaskCompo() {
  return (
    <div className="task_compo">
      <div className="task_compo_left">
        <div className="rightMain__task_static_cell rightMain__task_static_txtParr_container">
          <img
            src={checkbox}
            alt=""
            className="rightMain__task_static_cell_img"
          />
        </div>
        <div className="rightMain__task_static_name rightMain__task_static_txtParr_container">
          Task 1
        </div>
        <div className="rightMain__task_static_type rightMain__task_static_txtParr_container">
          Call back
        </div>
        <div className="rightMain__task_static_time rightMain__task_static_txtParr_container">
          <img src={calendar} alt="" className="task_calendar" />
          <div className="task_compo_time_txt">26 Jan, 17:00</div>
        </div>
        <div className=" rightMain__task_static_desc rightMain__task_static_txtParr_container">
          Lorem ipsum dolor sit amet, consectetur
        </div>
        <div className="rightMain__task_static_user rightMain__task_static_txtParr_container">
          <img src={mailAva} alt="" className="task_compo_user_ava" />
          <div className="task_compo_user_mailText">email@email.com</div>
          <img src={sliders} alt="" className="task_compo_user_set_img" />
        </div>
      </div>
      <img src={threeDots} alt="" className="task_compo_threeDots" />
    </div>
  );
}

export default TaskCompo;

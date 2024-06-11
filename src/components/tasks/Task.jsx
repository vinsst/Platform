import React from "react";
import updownArr from "../../assets/img/updownArr.svg";
import checkbox from "../../assets/img/checkbox.svg";
import TaskCompo from "./TaskCompo";

function Task() {
  return (
    <div className="rightMain_task">
      <div className="rightMain__task_static">
        <div className="rightMain__task_static_cell rightMain__task_static_txtParr_container">
          <img
            src={checkbox}
            alt=""
            className="rightMain__task_static_cell_img"
          />
        </div>
        <div className="rightMain__task_static_name rightMain__task_static_txtParr_container">
          <div className="rightMain__task_static_txt">Task Name</div>
          <img src={updownArr} alt="" className="rightMain__task_upDown_img" />
        </div>
        <div className="rightMain__task_static_type rightMain__task_static_txtParr_container">
          <div className="rightMain__task_static_txt">Type</div>
          <img src={updownArr} alt="" className="rightMain__task_upDown_img" />
        </div>
        <div className="rightMain__task_static_time rightMain__task_static_txtParr_container">
          <div className="rightMain__task_static_txt">Start time</div>
          <img src={updownArr} alt="" className="rightMain__task_upDown_img" />
        </div>
        <div className="rightMain__task_static_txt rightMain__task_static_desc rightMain__task_static_txtParr_container">
          Description
        </div>
        <div className="rightMain__task_static_user rightMain__task_static_txtParr_container">
          <div className="rightMain__task_static_txt">User</div>
          <img src={updownArr} alt="" className="rightMain__task_upDown_img" />
        </div>
      </div>
      <TaskCompo />
      <TaskCompo />
      <TaskCompo />
      <TaskCompo />
    </div>
  );
}

export default Task;

import React, { useEffect, useState } from "react";
import GroupsCompo from "./GroupsCompo";
import plusCircle from "../../../assets/img/plusCircle.svg";

function Groups() {
  return (
    <div className="addCalendar__groups_container">
      <div className="addCalendar__groups_static">
        <div className=" addCalendar__groups_static_txtColor">Color</div>
        <div className="">Name</div>
      </div>
      <GroupsCompo />
      <div className="add__prices_addLine addCalendar__groups_Pluscontainer">
        <img
          src={plusCircle}
          alt="Add line"
          className="add__prices_addLine_img"
          width="24px"
        />
        <span className="add__prices_addLine_txt">Add line</span>
      </div>
    </div>
  );
}

export default Groups;

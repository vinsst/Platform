import React, { useEffect, useState } from "react";
import checkbox from "../../../assets/img/checkbox.svg";
import arr from "../../../assets/img/arrRight.svg";
import trash from "../../../assets/img/trash.svg";

function GroupsCompo() {
  const [clickedSortBtnAdd, setClickedSortBtnAdd] = useState(false);
  const [selectedColor, setSelectedColor] = useState({
    colorClass: "calendar__general_color_dropdown_el_circOr",
  });

  const handleSortBtnClicking = () => {
    setClickedSortBtnAdd(!clickedSortBtnAdd);
  };

  const handleColorChange = (colorClass) => {
    setSelectedColor({ colorClass });
    setClickedSortBtnAdd(false);
  };
  return (
    <div className="addCalendar__groupsCompo_container">
      <div className="addCalendar__groups_left">
        <img
          src={checkbox}
          alt=""
          className="addCalendar__groups_left_checkbox"
        />
        <div
          className="addCalendar__groups_left_colorSelector"
          onClick={handleSortBtnClicking}
        >
          <div
            className={`calendar__general_color_dropdown_el_circ ${selectedColor.colorClass}`}
          ></div>
          <img
            src={arr}
            alt=""
            className={`${
              clickedSortBtnAdd
                ? "rightMain__content_add_sort_arrUp"
                : "rightMain__content_add_sort_arr"
            }`}
          />
        </div>
        <div className="addCalendar__groups_left_groupName">Group Name 1</div>
      </div>
      <img src={trash} alt="" className="addCalendar__groups_bin" />
    </div>
  );
}

export default GroupsCompo;

import React, { useState } from "react";
import arrRight from "../../assets/img/arrRight.svg";
import search from "../../assets/img/search.svg";

function RightMainAdd() {
  const [clickedSortBtnAdd, setClickedSortBtnAdd] = useState(false);

  const handleSortBtnClicking = () => {
    setClickedSortBtnAdd(!clickedSortBtnAdd);
  };

  return (
    <div className="rightMain__content_add rightMain__content_add_view">
      <h1 className="rightMain__content_add_h">Tasks</h1>
      <div className="rightMain__content_add_right">
        <div className="rightMain__content_add_sort">
          <div className="rightMain__content_add_sort_txt">Sort by orders</div>
          <img
            src={arrRight}
            alt=""
            className={`${
              clickedSortBtnAdd
                ? "rightMain__content_add_sort_arrUp"
                : "rightMain__content_add_sort_arr"
            }`}
            onClick={handleSortBtnClicking}
          />
        </div>
        <div className="rightMain__content_add_search_container">
          <input
            name="txt"
            type="txt"
            placeholder="Search"
            className="rightMain__content_add_search_inp"
            // value=
          />
          <img
            src={search}
            alt=""
            className="rightMain__content_add_search_img"
          />
        </div>
        <div className="rightMain__content_add_button">Add</div>
      </div>
    </div>
  );
}

export default RightMainAdd;

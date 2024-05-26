import React from "react";

import user_img_nav from "../../assets/img/user_img_nav.svg";
import arrRight from "../../assets/img/arrRight.svg";

function LeftNavCompoBottom(props) {
  return (
    <div className="homeMain__left_nav_top_bottom" onClick={props.onClick}>
      <div className="homeMain__left_nav_top_bottom_user_info">
        <img
          src={user_img_nav}
          alt=""
          className="homeMain__left_nav_top_bottom_img"
        />
        <span className="homeMain__left_nav_top_bottom_span">Ivan</span>
      </div>
      <img
        src={arrRight}
        alt=""
        className="homeMain__left_nav_top_bottom_arrRight"
      />
    </div>
  );
}

export default LeftNavCompoBottom;

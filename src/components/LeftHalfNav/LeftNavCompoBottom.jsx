import React from "react";

import user_img_nav from "../../assets/img/user_img_nav.svg";

function LeftNavCompoBottom(props) {
  return (
    <div className="homeMain__left_nav_top_bottom" onClick={props.onClick}>
      <div className="left_nav_top_bottom_user_info_half">
        <img
          src={user_img_nav}
          alt=""
          className="left_nav_top_bottom_img_half"
        />
      </div>
    </div>
  );
}

export default LeftNavCompoBottom;

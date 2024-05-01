import React from "react";

import shopping_bag from "../assets/img/shopping_bag.svg";

function LeftNavUser() {
  return (
    <div className="homeMain__left_nav_bottom_clicked ">
      <div className="homeMain__left_nav_bottom_clicked_compo">
        <img
          src={shopping_bag}
          alt=""
          className="left_nav_bottom_clicked_img"
        />
        <span className="left_nav_bottom_clicked_txt">Plan</span>
      </div>
      <div className="homeMain__left_nav_bottom_clicked_compo">
        <img
          src={shopping_bag}
          alt=""
          className="left_nav_bottom_clicked_img"
        />
        <span className="left_nav_bottom_clicked_txt">Plan</span>
      </div>
      <div className="homeMain__left_nav_bottom_clicked_compo">
        <img
          src={shopping_bag}
          alt=""
          className="left_nav_bottom_clicked_img"
        />
        <span className="left_nav_bottom_clicked_txt">Plan</span>
      </div>
      <div className="homeMain__left_nav_bottom_clicked_compo">
        <img
          src={shopping_bag}
          alt=""
          className="left_nav_bottom_clicked_img"
        />
        <span className="left_nav_bottom_clicked_txt">Plan</span>
      </div>
    </div>
  );
}

export default LeftNavUser;

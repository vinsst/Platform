import React from "react";

function LeftNavUserCompo({ img, text }) {
  return (
    <div className="homeMain__left_nav_bottom_clicked_compo">
      <img src={img} alt="" className="left_nav_bottom_clicked_img" />
      <span className="left_nav_bottom_clicked_txt">{text}</span>
    </div>
  );
}

export default LeftNavUserCompo;

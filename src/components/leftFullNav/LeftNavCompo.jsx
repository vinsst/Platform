import React from "react";

function LeftNavCompo({ img, text }) {
  return (
    <div className="homeMain__left_nav_compo">
      <img src={img} alt="" className="homeMain__left_nav_compo_img" />
      <span className="homeMain__left_nav_compo_span">{text}</span>
    </div>
  );
}

export default LeftNavCompo;

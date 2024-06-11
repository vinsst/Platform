import React from "react";

function LeftNavCompo({ img }) {
  return (
    <div className="homeMain__left_nav_compo">
      <img src={img} alt="" className="left_nav_compo_img_half" />
    </div>
  );
}

export default LeftNavCompo;

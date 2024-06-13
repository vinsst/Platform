import React from "react";
import { Link } from "react-router-dom";

function LeftNavCompo({ img, to }) {
  return (
    <Link to={to} className="homeMain__left_nav_compo">
      <img src={img} alt="" className="left_nav_compo_img_half" />
    </Link>
  );
}

export default LeftNavCompo;

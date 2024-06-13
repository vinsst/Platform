import React from "react";
import { Link } from "react-router-dom";

function LeftNavCompo({ img, text, to }) {
  return (
    <Link to={to} className="homeMain__left_nav_compo">
      <img src={img} alt="" className="homeMain__left_nav_compo_img" />
      <span className="homeMain__left_nav_compo_span">{text}</span>
    </Link>
  );
}

export default LeftNavCompo;

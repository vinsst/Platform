import React from "react";

import platform1_img_img from "../../assets/img/platform1_img_img.svg";

function RightMainZero() {
  return (
    <div className="rightMain__content_zero_container">
      <div className="rightMain__content_zero_content">
        <img
          src={platform1_img_img}
          alt=""
          className="rightMain__content_zero_img"
          width="100px"
        />
        <h5 className="rightMain__content_zero_txt1">
          You haven’t added any services yet
        </h5>
        <span className="rightMain__content_zero_txt2">
          Try to use our pre-saved services or add Your own by clicking button
          “Add”
        </span>
      </div>
    </div>
  );
}

export default RightMainZero;

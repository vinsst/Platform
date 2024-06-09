import React from "react";
import file from "../../../assets/img/file.svg";
import share from "../../../assets/img/share2.svg";

function RightMainAdd() {
  return (
    <div className="rightMain__content_add rightMain__content_add_view">
      <h1 className="rightMain__content_add_h">View Service</h1>
      <div className="rightMain__content_add_right">
        <div className="rightMain__content_add_addPriceList">
          <img
            src={file}
            alt=""
            className="rightMain__content_add_addPriceList_img rightMain__content_add_img"
          />
          <div className="rightMain__content_add_addPriceList_txt rightMain__content_add_txt">
            Add Price List
          </div>
        </div>
        <div className="rightMain__content_add_share">
          <img
            src={share}
            alt=""
            className="rightMain__content_add_share_img rightMain__content_add_img"
          />
          <div className="rightMain__content_add_share_txt rightMain__content_add_txt">
            Share
          </div>
        </div>
        <div className="rightMain__content_add_button">Edit</div>
      </div>
    </div>
  );
}

export default RightMainAdd;

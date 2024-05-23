import React from "react";
import AddPhotoImg from "./AddPhotoImg";
import plusCircle from "../../../assets/img/plusCircle.svg";

function AddVideo() {
  return (
    <div className="add__media_photo_container">
      <div className="add__media_video_h1">Video</div>
      <div className="add__media_video_h2">Upload up to 5 video</div>
      <div className="add__media_photo_photo_container">
        <div className="add__media_photo_photo_add_btn">
          <img
            src={plusCircle}
            alt=""
            className="add__media_photo_photo_add_btn_img"
          />
          <span className="add__media_photo_photo_add_btn_txt">Add Video</span>
        </div>
        <AddPhotoImg />
        <AddPhotoImg />
        <AddPhotoImg />
        <AddPhotoImg />
      </div>
    </div>
  );
}

export default AddVideo;

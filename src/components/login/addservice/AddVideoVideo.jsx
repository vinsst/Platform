import React, { useState } from "react";
import trash from "../../../assets/img/trash.svg";

import { useSelector, useDispatch } from "react-redux";
import { deletingUploadedVideo } from "../../../redux/actions";

function AddVideoVideo({ index }) {
  const dispatch = useDispatch();

  const handleDeletingUploadedVideo = () => {
    dispatch(deletingUploadedVideo(index)); //redux
  };

  const { uploadedVideo } = useSelector((state) => state.uploadedVideosReducer);

  return (
    <div className="add__media_photo_photo">
      <video
        autoPlay
        src={uploadedVideo[index]}
        alt=""
        className="add__media_photo_photo_add_btn_img"
      />

      <div
        className="add__media_photo_photo_trash_container"
        onClick={handleDeletingUploadedVideo}
      >
        <img src={trash} alt="" className="add__media_photo_photo_trash" />
      </div>
    </div>
  );
}

export default AddVideoVideo;

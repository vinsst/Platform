import React from "react";
import trash from "../../../assets/img/trash.svg";

import { useSelector, useDispatch } from "react-redux";
import { deletingUploadedPhoto } from "../../../redux/actions";

function AddPhotoImg({ index }) {
  const dispatch = useDispatch();

  const handleDeletingUploadedPhoto = () => {
    dispatch(deletingUploadedPhoto(index)); //redux
  };

  const { uploadedPhoto } = useSelector((state) => state.uploadedPhotosReducer);

  console.log(uploadedPhoto);

  return (
    <div className="add__media_photo_photo">
      <img
        src={uploadedPhoto[index]}
        alt=""
        className="add__media_photo_photo_add_btn_img"
      />
      <div
        className="add__media_photo_photo_trash_container"
        onClick={handleDeletingUploadedPhoto[index]}
      >
        <img src={trash} alt="" className="add__media_photo_photo_trash" />
      </div>
    </div>
  );
}

export default AddPhotoImg;

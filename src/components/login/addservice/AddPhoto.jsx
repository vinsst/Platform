import React from "react";
import AddPhotoImg from "./AddPhotoImg";
import plusCircle from "../../../assets/img/plusCircle.svg";

import { useSelector, useDispatch } from "react-redux";
import { addUploadedPhoto } from "../../../redux/actions";

function AddPhoto() {
  const dispatch = useDispatch();
  const { uploadedPhoto } = useSelector((state) => state.uploadedPhotosReducer);

  const addingUploadedPhoto = (e) => {
    e.preventDefault();
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = handleFileInputChange;
    input.click();
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        dispatch(addUploadedPhoto(reader.result));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="add__media_photo_container">
      <div className="add__media_photo_h">Upload up to 20 photo</div>
      <div className="add__media_photo_photo_container">
        <div
          className="add__media_photo_photo_add_btn"
          onClick={addingUploadedPhoto}
        >
          <img
            src={plusCircle}
            alt=""
            className="add__media_photo_photo_add_btn_img"
          />
          <span className="add__media_photo_photo_add_btn_txt">Add Photo</span>
        </div>
        {uploadedPhoto.map((uploadedPhoto, index) => (
          <AddPhotoImg key={index} index={index} />
        ))}
      </div>
    </div>
  );
}

export default AddPhoto;

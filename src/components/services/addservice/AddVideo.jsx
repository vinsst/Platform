import React from "react";
import AddVideoVideo from "./AddVideoVideo";
import plusCircle from "../../../assets/img/plusCircle.svg";

import { useSelector, useDispatch } from "react-redux";
import { addUploadedVideo } from "../../../redux/actions";

function AddVideo() {
  const dispatch = useDispatch();
  const { uploadedVideo } = useSelector((state) => state.uploadedVideosReducer);

  const addingUploadedVideo = (e) => {
    e.preventDefault();
    if (uploadedVideo.length < 5) {
      const input = document.createElement("input");
      input.type = "file";
      input.accept = "video/*";
      input.onchange = handleFileInputChange;
      input.click();
    } else {
      alert("Maximum 5 videos can be uploaded.");
    }
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        dispatch(addUploadedVideo(reader.result));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="add__media_photo_container">
      <div className="add__media_video_h1">Video</div>
      <div className="add__media_video_h2">Upload up to 5 video</div>
      <div className="add__media_photo_photo_container">
        <div
          className="add__media_photo_photo_add_btn"
          onClick={addingUploadedVideo}
        >
          <img
            src={plusCircle}
            alt=""
            className="add__media_photo_photo_add_btn_img"
          />
          <span className="add__media_photo_photo_add_btn_txt">Add Video</span>
        </div>
        {uploadedVideo.map((uploadedVideo, index) => (
          <AddVideoVideo key={index} index={index} />
        ))}
      </div>
    </div>
  );
}

export default AddVideo;

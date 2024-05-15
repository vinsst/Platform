import React, { useState } from "react";

import edit from "../../assets/img/edit.svg";
import pause from "../../assets/img/pause.svg";
import verticalPoints from "../../assets/img/verticalPoints.svg";

function RightMainService() {
  const [isEditing, setIsEditing] = useState(false);

  const changeEditingStatus = () => setIsEditing(true);

  const [inputValueTitle, setInputValueTitle] = useState("");

  const [inputValueArea, setInputValueArea] = useState("");

  const hasValueTitle = inputValueTitle.trim().length > 0;
  const hasValueArea = inputValueArea.trim().length > 0;

  const handleChangeTitle = (event) => {
    setInputValueTitle(event.target.value);
  };

  const handleChangeArea = (event) => {
    setInputValueArea(event.target.value);
  };

  const hasValue = hasValueTitle && hasValueArea;

  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat";
  const words = text.split(" ");
  const displayedText = words.slice(0, 7).join(" ");
  const shouldDisplayEllipsis = words.length > 7;
  return (
    <div className="rightMain__content_service">
      <div className="rightMain__content_service_leftSide">
        <div className="rightMain__content_service_rect"></div>
        <div className="rightMain__content_service_txt">
          {isEditing ? (
            <input
              type="text"
              className="rightMain__content_service_txt_title_input"
              placeholder="Edit Title"
              onChange={handleChangeTitle}
            />
          ) : (
            <div className="rightMain__content_service_txt_title">Title</div>
          )}

          {isEditing ? (
            <textarea
              type="text"
              placeholder="Write a description"
              className="rightMain__content_service_txt_title_txtArea"
              onChange={handleChangeArea}
            />
          ) : (
            <div className="rightMain__content_service_txt_span">
              {shouldDisplayEllipsis ? `${displayedText}...` : displayedText}
            </div>
          )}
        </div>
      </div>

      <div className="rightMain__content_service_btns">
        {isEditing ? (
          <div
            className={
              hasValue
                ? "rightMain__content_service_btn_save"
                : "rightMain__content_service_btn_save_blured"
            }
          >
            Save
          </div>
        ) : (
          <div className="rightMain__content_service_btns_content">
            <div
              className="rightMain__content_service_btns_content_add_clicking"
              onClick={changeEditingStatus}
            >
              <img
                src={edit}
                alt=""
                className="rightMain__content_service_btn"
              />
            </div>

            <img
              src={pause}
              alt=""
              className="rightMain__content_service_btn"
            />
            <img
              src={verticalPoints}
              alt=""
              className="rightMain__content_service_btn"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default RightMainService;

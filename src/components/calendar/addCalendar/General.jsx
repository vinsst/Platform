import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import arr from "../../../assets/img/arrRight.svg";
// import { setCalendarName, setCalendarColor } from "../../../redux/actions";

function AddGeneral() {
  //   const dispatch = useDispatch();
  //   const calendarName = useSelector(
  //     (state) => state.calendar.nameColorCalendarReducer.setCalendarName
  //   );
  //   const calendarColor = useSelector(
  //     (state) => state.calendar.nameColorCalendarReducer.setCalendarColor
  //   );

  //   useEffect(() => {
  //     dispatch(setCalendarName(calendarName));
  //     dispatch(setCalendarColor(calendarColor));
  //   }, [calendarName, calendarColor, dispatch]);
  const [clickedSortBtnAdd, setClickedSortBtnAdd] = useState(false);
  const [selectedColor, setSelectedColor] = useState({
    colorClass: "calendar__general_color_dropdown_el_circOr",
    colorText: "Orange",
  });

  const handleSortBtnClicking = () => {
    setClickedSortBtnAdd(!clickedSortBtnAdd);
  };

  const handleColorChange = (colorClass, colorText) => {
    setSelectedColor({ colorClass, colorText });
    setClickedSortBtnAdd(false);
  };

  return (
    <div className="add__genInfo_container">
      <div className="add__genInfo_input-container">
        <label htmlFor="serviceName" className="input-label">
          Name
        </label>
        <input
          type="text"
          className="add__genInfo_in1 add__genInfo_in"
          placeholder="Enter the name of your service"
          maxLength="20"
          required
        />
      </div>
      <div className="add__genInfo_input-container">
        <label htmlFor="serviceDescription" className="input-label">
          Color
        </label>
        <div
          className="add__genInfo_in calendar__general_color_container"
          onClick={handleSortBtnClicking}
        >
          <div className="calendar__general_color_container_left">
            <div
              className={`calendar__general_color_dropdown_el_circ ${selectedColor.colorClass}`}
            ></div>
            <div className="calendar__general_color_txt">
              {selectedColor.colorText}
            </div>
          </div>
          <img
            src={arr}
            alt=""
            className={`${
              clickedSortBtnAdd
                ? "rightMain__content_add_sort_arrUp"
                : "rightMain__content_add_sort_arr"
            }`}
          />
        </div>
        {clickedSortBtnAdd && (
          <div className="calendar__general_color_dropdown">
            <div
              className="calendar__general_color_dropdown_el"
              onClick={() =>
                handleColorChange(
                  "calendar__general_color_dropdown_el_circRed",
                  "Red"
                )
              }
            >
              <div className="calendar__general_color_dropdown_el_circ calendar__general_color_dropdown_el_circRed"></div>
              <div className="calendar__general_color_dropdown_el_txt">Red</div>
            </div>
            <div
              className="calendar__general_color_dropdown_el"
              onClick={() =>
                handleColorChange(
                  "calendar__general_color_dropdown_el_circOr",
                  "Orange"
                )
              }
            >
              <div className="calendar__general_color_dropdown_el_circ calendar__general_color_dropdown_el_circOr"></div>
              <div className="calendar__general_color_dropdown_el_txt">
                Orange
              </div>
            </div>
            <div
              className="calendar__general_color_dropdown_el"
              onClick={() =>
                handleColorChange(
                  "calendar__general_color_dropdown_el_circGr",
                  "Green"
                )
              }
            >
              <div className="calendar__general_color_dropdown_el_circ calendar__general_color_dropdown_el_circGr"></div>
              <div className="calendar__general_color_dropdown_el_txt">
                Green
              </div>
            </div>
            <div
              className="calendar__general_color_dropdown_el"
              onClick={() =>
                handleColorChange(
                  "calendar__general_color_dropdown_el_circBl",
                  "Blue"
                )
              }
            >
              <div className="calendar__general_color_dropdown_el_circ calendar__general_color_dropdown_el_circBl"></div>
              <div className="calendar__general_color_dropdown_el_txt">
                Blue
              </div>
            </div>
            <div
              className="calendar__general_color_dropdown_el"
              onClick={() =>
                handleColorChange(
                  "calendar__general_color_dropdown_el_circPur",
                  "Purple"
                )
              }
            >
              <div className="calendar__general_color_dropdown_el_circ calendar__general_color_dropdown_el_circPur"></div>
              <div className="calendar__general_color_dropdown_el_txt">
                Purple
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AddGeneral;

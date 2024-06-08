import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearSamePrice,
  clearSeparatePriceText,
  deleteSepInputs,
  setSelectedRadio,
} from "../../../redux/actions";
import SamePrices from "./SamePrices";
import SeparatePrices from "./SeparatePrices";

function AddPrices() {
  const dispatch = useDispatch();
  const selectedRadio = useSelector(
    (state) => state.radioReducer.selectedRadio
  );

  const handleRadio1Click = () => {
    dispatch(clearSeparatePriceText());
    dispatch(deleteSepInputs());
    dispatch(setSelectedRadio("1"));
  };

  const handleRadio2Click = () => {
    dispatch(clearSamePrice());
    dispatch(setSelectedRadio("2"));
  };

  return (
    <div className="add__prices_container">
      <div className="add__prices_checkBoxes">
        <label className="add__prices_checkBox">
          <div
            className="add__prices_checkBox_inputContainer"
            onClick={handleRadio1Click}
          >
            <input
              type="radio"
              name="choice"
              value="1"
              className="add__prices_checkBox_input"
              checked={selectedRadio === "1"}
              readOnly
            />
            <div className="checkmark"></div>
          </div>
          <span className="add__prices_checkBox_span">
            Same price for all clients
          </span>
        </label>
        <label className="add__prices_checkBox">
          <div
            className="add__prices_checkBox_inputContainer"
            onClick={handleRadio2Click}
          >
            <input
              type="radio"
              name="choice"
              value="2"
              className="add__prices_checkBox_input"
              checked={selectedRadio === "2"}
              readOnly
            />
            <div className="checkmark"></div>
          </div>
          <span className="add__prices_checkBox_span">Separate prices</span>
        </label>
      </div>
      {selectedRadio === "2" ? <SeparatePrices /> : <SamePrices />}
    </div>
  );
}

export default AddPrices;

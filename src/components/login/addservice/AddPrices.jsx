import React, { useState } from "react";
import SamePrices from "./SamePrices";
import SeparatePrices from "./SeparatePrices";
import plusCircle from "../../../assets/img/plusCircle.svg";

function AddPrices() {
  const [separate, setSeparate] = useState(false);

  const handleRadio1Click = () => {
    setSeparate(false);
  };

  const handleRadio2Click = () => {
    setSeparate(true);
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
            />
            <div class="checkmark"></div>
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
            />
            <div class="checkmark"></div>
          </div>
          <span className="add__prices_checkBox_span">Separate prices</span>
        </label>
      </div>
      {separate ? <SeparatePrices /> : <SamePrices />}
    </div>
  );
}

export default AddPrices;

import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { incrementSepInputs, decrementSepInputs } from "../../../redux/actions";

import trash from "../../../assets/img/trash.svg";

function SeparatePricesInput({ index }) {
  const dispatch = useDispatch();

  const deletingInputs = () => {
    dispatch(decrementSepInputs(index)); //redux
  };

  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const inputValue = e.target.value;
    const numericValue = inputValue.replace(/[^\d]/g, "");
    setValue(numericValue);
  };
  return (
    <div className="prices__separatePricesInput_container">
      <input
        type="text"
        placeholder="Private clients"
        className="prices__separatePrices_inp"
      />
      <input
        type="text"
        value={value ? `${value}$` : ""}
        onChange={handleChange}
        placeholder="Enter amount"
        className="prices__separatePrices_inp_2"
      />

      <div
        className="prices__separatePrices_trash_container"
        onClick={deletingInputs}
      >
        <img src={trash} alt="" className="prices__separatePrices_trash" />
      </div>
    </div>
  );
}

export default SeparatePricesInput;

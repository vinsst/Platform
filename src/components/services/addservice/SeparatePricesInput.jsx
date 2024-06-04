import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addSeparatePrice,
  decrementSepInputs,
  deleteSeparatePrice,
  setSeparatePriceText,
} from "../../../redux/actions";
import trash from "../../../assets/img/trash.svg";

function SeparatePricesInput({ index }) {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [text, setText] = useState("");

  const handleChange = (e) => {
    const inputValue = e.target.value;
    const numericValue = inputValue.replace(/[^\d]/g, "");
    setValue(numericValue);
    dispatch(addSeparatePrice(numericValue));
  };

  const handleTextChange = (e) => {
    const textValue = e.target.value;
    setText(textValue);
    dispatch(setSeparatePriceText(index, textValue));
  };

  const deletingInputs = () => {
    dispatch(decrementSepInputs(index));
    dispatch(deleteSeparatePrice(index));
  };

  return (
    <div className="prices__separatePricesInput_container">
      <input
        type="text"
        placeholder="Private clients"
        className="prices__separatePrices_inp"
        value={text}
        onChange={handleTextChange}
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

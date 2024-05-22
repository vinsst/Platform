import React from "react";
import SeparatePricesInput from "./SeparatePricesInput";

import plusCircle from "../../../assets/img/plusCircle.svg";

import { useSelector, useDispatch } from "react-redux";
import { incrementSepInputs, decrementSepInputs } from "../../../redux/actions";

function SeparatePrices() {
  const { inputs } = useSelector((state) => state.counterSepInputsReducer);
  const dispatch = useDispatch();

  const addingInputs = () => {
    dispatch(incrementSepInputs()); //redux
  };

  return (
    <div className="prices__separatePrices_container">
      <div className="prices__separatePrices_typePrice">
        <div className="prices__separatePrices_type_container">
          <span className="prices__separatePrices_type">Client Type</span>
        </div>
        <span className="prices__separatePrices_price">Price</span>
      </div>
      <div className="prices__separatePrices_inputs">
        {inputs.map((input, index) => (
          <SeparatePricesInput key={input.id} index={index} />
        ))}
      </div>
      <div className="add__prices_addLine" onClick={addingInputs}>
        <img
          src={plusCircle}
          alt=""
          className="add__prices_addLine_img"
          width="24px"
        />
        <span className="add__prices_addLine_txt">Add line</span>
      </div>
    </div>
  );
}

export default SeparatePrices;

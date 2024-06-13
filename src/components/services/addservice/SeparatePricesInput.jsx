import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateSeparatePriceText,
  deleteSeparatePriceText,
} from "../../../redux/actions";
import trash from "../../../assets/img/trash.svg";

function SeparatePricesInput({ index }) {
  const dispatch = useDispatch();
  const pricetxt = useSelector(
    (state) => state.services.separate.pricetxtMassive[index]
  ) || { txt: "", price: "" };
  const [inputValues, setInputValues] = useState(pricetxt);

  useEffect(() => {
    setInputValues(pricetxt);
  }, [pricetxt]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newValue = name === "price" ? value.replace(/[^0-9]/g, "") : value;
    const updatedPricetxt = { ...inputValues, [name]: newValue };
    setInputValues(updatedPricetxt);
    dispatch(updateSeparatePriceText(index, updatedPricetxt));
  };

  const deletingInputs = () => {
    dispatch(deleteSeparatePriceText(index));
  };

  return (
    <div className="prices__separatePricesInput_container">
      <input
        name="txt"
        type="text"
        placeholder="Private clients"
        className="prices__separatePrices_inp"
        value={inputValues.txt}
        onChange={handleInputChange}
      />
      <input
        name="price"
        type="text"
        value={inputValues.price ? `${inputValues.price}$` : ""}
        onChange={handleInputChange}
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

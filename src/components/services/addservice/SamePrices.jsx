import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSamePrice } from "../../../redux/actions";

function SamePrices() {
  const dispatch = useDispatch();
  const savedValue = useSelector((state) => state.samePriceReducer);
  const [value, setValue] = useState(savedValue);

  useEffect(() => {
    setValue(savedValue);
  }, [savedValue]);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    const numericValue = inputValue.replace(/[^\d]/g, "");
    setValue(numericValue);
    dispatch(setSamePrice(numericValue));
  };

  return (
    <input
      type="text"
      value={value ? `${value}$` : ""}
      onChange={handleChange}
      placeholder="Enter amount"
      className="prices__samePrices_inp"
    />
  );
}

export default SamePrices;

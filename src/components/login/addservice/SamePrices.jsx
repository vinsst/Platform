import React, { useState } from "react";

function SamePrices() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const inputValue = e.target.value;
    const numericValue = inputValue.replace(/[^\d]/g, "");
    setValue(numericValue);
  };

  return (
    <>
      <input
        type="text"
        value={value ? `${value}$` : ""}
        onChange={handleChange}
        placeholder="Enter amount"
        className="prices__samePrices_inp"
      />
    </>
  );
}

export default SamePrices;

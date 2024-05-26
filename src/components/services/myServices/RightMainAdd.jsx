import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { increment } from "../../../redux/actions";

function RightMainAdd() {
  const [countServices, setCountServices] = useState(0);
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(increment()); //redux
    setCountServices(countServices + 1); //local
  };
  return (
    <div className="rightMain__content_add">
      <h1 className="rightMain__content_add_h">My Services</h1>
      <div className="rightMain__content_add_button " onClick={handleAdd}>
        Add
      </div>
    </div>
  );
}

export default RightMainAdd;

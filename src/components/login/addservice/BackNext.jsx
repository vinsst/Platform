import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementLines, decrementLines } from "../../../redux/actions";

function BackNext() {
  const { lineNum } = useSelector((state) => state.counterLinesReducer);

  const dispatch = useDispatch();

  const addingLines = () => {
    dispatch(incrementLines()); //redux
  };

  const minusingLines = () => {
    dispatch(decrementLines()); //redux
  };

  console.log(lineNum);

  return (
    <div className="Add__back_next_container">
      <div
        className="Add__back_next_back_btn Add__back_next_btns"
        onClick={minusingLines}
      >
        <span className="Add__back_next_back_btn_txt">Back</span>
      </div>
      <div
        className="Add__back_next_next_btn Add__back_next_btns"
        onClick={addingLines}
      >
        <span className="Add__back_next_back_btn_txt">Continue</span>
      </div>
    </div>
  );
}

export default BackNext;

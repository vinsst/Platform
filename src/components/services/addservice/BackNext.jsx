import React, { useState, useEffect } from "react";

import axios from "axios";
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
        {lineNum === 4 ? (
          <span className="Add__back_next_back_btn_txt">Finish</span>
        ) : (
          <span className="Add__back_next_back_btn_txt">Continue</span>
        )}
      </div>
    </div>
  );
}

export default BackNext;

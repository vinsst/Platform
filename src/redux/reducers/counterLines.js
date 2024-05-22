const counterLineReducer = (state = { lineNum: 1 }, action) => {
  switch (action.type) {
    case "INCREMENT-LINENUM":
      return {
        ...state,
        lineNum: state.lineNum < 4 ? state.lineNum + 1 : 4,
      };

    case "DECREMENT-LINENUM":
      return {
        ...state,
        lineNum: state.lineNum > 1 ? state.lineNum - 1 : 1,
      };
    default:
      return state;
  }
};
export default counterLineReducer;

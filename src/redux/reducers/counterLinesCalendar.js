const counterLineReducer = (state = { lineNumCalendar: 1 }, action) => {
  switch (action.type) {
    case "INCREMENT-LINENUM-CALENDAR":
      return {
        ...state,
        lineNumCalendar:
          state.lineNumCalendar < 4 ? state.lineNumCalendar + 1 : 4,
      };

    case "DECREMENT-LINENUM-CALENDAR":
      return {
        ...state,
        lineNumCalendar:
          state.lineNumCalendar > 1 ? state.lineNumCalendar - 1 : 1,
      };
    default:
      return state;
  }
};
export default counterLineReducer;

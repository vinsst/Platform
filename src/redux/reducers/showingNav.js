const showingNavReducer = (state = {}, action) => {
  switch (action.type) {
    case "TOGGLE_NAV":
      return {
        ...state,
        showNav: !state.showNav,
      };
    default:
      return state;
  }
};

export default showingNavReducer;

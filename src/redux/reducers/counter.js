const counterReducer = (state = { services: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        services: state.services + 1,
      };
    default:
      return state;
  }
};

export default counterReducer;

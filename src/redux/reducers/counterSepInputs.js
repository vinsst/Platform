// counterSepInputsReducer.js
const initialState = {
  inputs: [], // Track inputs by their index
};

const counterSepInputsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT-SEPINPUTS":
      return {
        ...state,
        inputs: [...state.inputs, { id: state.inputs.length }],
      };
    case "DECREMENT-SEPINPUTS":
      return {
        ...state,
        inputs: state.inputs.filter((input, idx) => idx !== action.payload),
      };
    default:
      return state;
  }
};

export default counterSepInputsReducer;

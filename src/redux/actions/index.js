export const increment = () => {
  return {
    type: "INCREMENT",
  };
};

export const toggleNav = () => {
  return {
    type: "TOGGLE_NAV",
  };
};

export const incrementLines = () => {
  return {
    type: "INCREMENT-LINENUM",
  };
};

export const decrementLines = () => {
  return {
    type: "DECREMENT-LINENUM",
  };
};

export const incrementSepInputs = () => {
  return {
    type: "INCREMENT-SEPINPUTS",
  };
};

export const decrementSepInputs = (index) => ({
  type: "DECREMENT-SEPINPUTS",
  payload: index,
});

const quantityAddDeduct = (state = 1, action) => {
  switch (action.type) {
    case "add-quant":
      return (state = state + 1);
    case "deduct-quant":
      if (state === 0) return state;
      else return (state = state - 1);
    default:
      return state;
  }
};

export default quantityAddDeduct;

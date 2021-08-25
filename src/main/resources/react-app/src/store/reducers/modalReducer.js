const modalReducer = (state = false, action) => {
  switch (action.type) {
    case "open-modal":
      return (state = true);
    case "close-modal":
      return (state = false);
    default:
      return state;
  }
};

export default modalReducer;

const token = (state = "", action) => {
  switch (action.type) {
    case "token":
      state = action.payload;
      return state;
    default:
      return state;
  }
};

export default token;

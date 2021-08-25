const previousPath = (state = "", action) => {
  switch (action.type) {
    case "path":
      return action.payload;
    default:
      return state;
  }
};

export default previousPath;

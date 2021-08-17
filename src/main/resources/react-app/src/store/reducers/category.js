const category = (state = [], action) => {
  switch (action.type) {
    case "load-category":
      state = [...action.payload];
      return state;
    case "add-category":
      state = [...state, action.payload];
      return state;
    default:
      return state;
  }
};

export default category;

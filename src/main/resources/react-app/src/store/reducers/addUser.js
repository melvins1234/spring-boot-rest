const addUser = (state = [], action) => {
  switch (action.type) {
    case "load-user":
      state = [...action.payload];
      return state;
    case "add-user":
      state.push(action.payload);
      localStorage.setItem("users", JSON.stringify(state));
      return state;
    default:
      return state;
  }
};

export default addUser;

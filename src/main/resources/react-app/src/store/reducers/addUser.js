const addUser = (state = [], action) => {
  switch (action.type) {
    case "load-user":
      state = [...action.payload];
      return state;
    case "add-user":
      state.push(action.payload);
      localStorage.setItem("users", JSON.stringify(state));
      return state;
    case "delete-user":
      state = state.filter(item => item.id !== action.payload);
      localStorage.setItem("users", JSON.stringify(state));
      return state;
    default:
      return state;
  }
};

export default addUser;

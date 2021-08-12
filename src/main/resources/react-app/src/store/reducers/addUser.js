let initState = JSON.parse(localStorage.getItem("users"))
  ? JSON.parse(localStorage.getItem("users"))
  : [];

const addUser = (state = initState, action) => {
  switch (action.type) {
    case "add-user":
      state.push(action.payload);
      localStorage.setItem("users", JSON.stringify(state));
      return state;
    default:
      return state;
  }
};

export default addUser;

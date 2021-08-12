let initState = localStorage.getItem("isLoggedIn")
  ? JSON.parse(localStorage.getItem("isLoggedIn"))
  : false;

const isLoggedIn = (state = initState, action) => {
  switch (action.type) {
    case "user-login":
      state = { isLoggedIn: true, userLoggedIn: action.payload }
      localStorage.setItem('isLoggedIn', JSON.stringify(state))
      return (state);
    case "user-logout":
      localStorage.removeItem('isLoggedIn')
      return (state = false);
    default:
      return state;
  }
};

export default isLoggedIn;

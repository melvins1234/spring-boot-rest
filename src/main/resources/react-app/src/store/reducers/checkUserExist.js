const checkUserExist = (state = true, action) => {
  switch (action.type) {
    case "check-user":
      let initState = JSON.parse(localStorage.getItem("users"))
        ? JSON.parse(localStorage.getItem("users"))
        : [];
      let isExistedIndex = initState.findIndex(
        (e) => e.email === action.payload.email
      );
      if (isExistedIndex >= 0) {
        return (state = true);
      }
      return (state = false);

    default:
      return state;
  }
};

export default checkUserExist;

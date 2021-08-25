let initState = JSON.parse(localStorage.getItem("cart"))
  ? JSON.parse(localStorage.getItem("cart")).length
  : 0;

const itemsInCart = (state = initState, action) => {
  switch (action.type) {
    case "count-items-in-cart":
      state = JSON.parse(localStorage.getItem("cart"))
      ? JSON.parse(localStorage.getItem("cart")).length
      : 0;
      return state;
    default:
      return state;
  }
};

export default itemsInCart;

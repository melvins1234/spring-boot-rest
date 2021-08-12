let initState = JSON.parse(localStorage.getItem("cart"))
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const Cart = (state = initState, action) => {
  switch (action.type) {
    case "addToCart":
      let isExistedIndex = state.findIndex((e) => e.id === action.payload.id);
      if (isExistedIndex >= 0) {
        state = initState;
        state.splice(isExistedIndex, 1, {
          ...action.payload,
          quantity: state[isExistedIndex].quantity + action.payload.quantity,
        });
        localStorage.setItem("cart", JSON.stringify(state));
      } else {
        state.push(action.payload);
        localStorage.setItem("cart", JSON.stringify(state));
      }
      return state;

    case "toCartMinus":
      let isExistedIndex_ = state.findIndex((e) => e.id === action.payload.id);
      state = initState;
      if(action.payload.quantity !== 0){
        state.splice(isExistedIndex_, 1, {
          ...action.payload,
          quantity: state[isExistedIndex_].quantity - 1,
        });
      }
      localStorage.setItem("cart", JSON.stringify(state));
      return state;
    case "checkout":
      return (state = []);
    case "removeProduct":
      let isExistedIndex__ = state.findIndex((e) => e.id === action.payload.id);
      state.splice(isExistedIndex__, 1);
      localStorage.setItem("cart", JSON.stringify(state));
      return state;
    default:
      return state;
  }
};

export default Cart;

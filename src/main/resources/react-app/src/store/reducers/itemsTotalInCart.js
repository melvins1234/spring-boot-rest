let initState = 0;

if (localStorage.getItem("cart")) {
  JSON.parse(localStorage.getItem("cart")).forEach((e) => {
    initState =
      parseFloat(e.discountedPrice) * parseInt(e.quantity) +
      parseFloat(initState);
  });
}

const itemsTotalInCart = (state = initState.toFixed(2), action) => {
  switch (action.type) {
    case "total-price":
      let initState = 0;

      if (localStorage.getItem("cart")) {
        JSON.parse(localStorage.getItem("cart")).forEach((e) => {
          initState =
            parseFloat(e.discountedPrice) * parseInt(e.quantity) +
            parseFloat(initState);
        });
      }
      return initState.toFixed(2);
    case "removed-product":
      let total =
        action.payload.quantity * parseFloat(action.payload.discountedPrice);
      return ((state = state - total).toFixed(2));
    default:
      return state;
  }
};

export default itemsTotalInCart;

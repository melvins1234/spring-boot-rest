const Products = (state = [], action) => {
  switch (action.type) {
    case "load":
      state = [...action.payload];
      return state;
    case "add-product":
      state = [...state, action.payload];
      return state;
    case "favorite":
      let isExistedIndex = state.findIndex(
        (e) => e.id === action.payload.id
      );

      if (isExistedIndex >= 0) state[isExistedIndex].favorite = true;
      // else state.push({...action.payload, favorite: true})
      localStorage.setItem("products", JSON.stringify(state));

      return state;
    case "unfavorite":
      let isExistedIndex_ = state.findIndex(
        (e) => e.id === action.payload.id
      );
      state[isExistedIndex_].favorite = false;
      localStorage.setItem("products", JSON.stringify(state));
      return state;
    default:
      return state;
  }
};

export default Products;

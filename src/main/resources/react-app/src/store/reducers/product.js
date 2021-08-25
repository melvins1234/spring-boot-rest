const Products = (state = [], action) => {
  switch (action.type) {
    case "load":
      state = [...action.payload];
      return state;
    case "add-product":
      state = [...state, action.payload];
      return state;
    case "remove-product":
      return (state = state.filter((item) => item.id !== action.payload));
    case "update-product":
      let foundIndex = state.findIndex(x => x.id == action.payload.id);
      state[foundIndex] = action.payload;
      return state;
    case "favorite":
      let isExistedIndex = state.findIndex((e) => e.id === action.payload.id);

      if (isExistedIndex >= 0) state[isExistedIndex].favorite = true;
      // else state.push({...action.payload, favorite: true})
      localStorage.setItem("products", JSON.stringify(state));

      return state;
    case "unfavorite":
      let isExistedIndex_ = state.findIndex((e) => e.id === action.payload.id);
      state[isExistedIndex_].favorite = false;
      localStorage.setItem("products", JSON.stringify(state));
      return state;
    default:
      return state;
  }
};

export default Products;

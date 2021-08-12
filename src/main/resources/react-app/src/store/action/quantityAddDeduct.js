export const quantityAdd = (value) => {
  return {
    type: 'add-quant',
    payload: value
  }
}

export const quantityDeduct = (value) => {
  return {
    type: 'deduct-quant',
    payload: value
  }
}

export const resetQuantity = () => {
  return {type: 'reset-quant'}
}

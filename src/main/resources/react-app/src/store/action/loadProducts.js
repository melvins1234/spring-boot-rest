export const loadProducts = (value) => {
    return {
        type: 'load',
        payload: value
    }
}

export const addProductAction = (value) => {
    return {
        type: 'add-product',
        payload: value
    }
}
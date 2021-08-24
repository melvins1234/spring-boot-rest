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

export const removeProductAction = (value) => {
    return {
        type: 'remove-product',
        payload: value
    }
}

export const updateProductAction = (value) => {
    return {
        type: 'update-product',
        payload: value
    }
}
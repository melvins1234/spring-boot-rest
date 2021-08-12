export const itemsTotalInCart = (value) => {
    return {
        type: 'total-price',
        payload: value
    }
}

export const removeTotalInCart = (value) => {
    return {
        type: 'removed-product',
        payload: value
    }
}
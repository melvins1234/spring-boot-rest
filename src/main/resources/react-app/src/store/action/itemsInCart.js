export const itemsInCart = (value) => {
    return {
        type: 'count-items-in-cart',
        payload: value
    }
}
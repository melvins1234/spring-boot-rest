export const favProd = (value) => {
    return {
        type: 'favorite',
        payload: value
    }
}

export const unFavProd = (value) => {
    return {
        type: 'unfavorite',
        payload: value
    }
}
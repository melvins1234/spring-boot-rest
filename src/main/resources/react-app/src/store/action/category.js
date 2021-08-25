export const category = (value) => {
    return {
        type: 'load-category',
        payload: value
    }
}

export const addCategory = (value) => {
    return {
        type: 'add-category',
        payload: value
    }
}
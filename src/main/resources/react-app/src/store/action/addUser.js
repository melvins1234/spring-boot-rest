export const addUser = (value) => {
    return {
        type: 'add-user',
        payload: value
    }
}

export const loadUser = (value) => {
    return {
        type: 'load-user',
        payload: value
    }
}


export const isLoggedIn = (value) => {
    return {
        type: 'user-login',
        payload: value
    }
}

export const isLoggedOut = () => {
    return {
        type: 'user-logout'
    }
}

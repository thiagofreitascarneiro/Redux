 /* eslint-disable */ 
// eslint-disable-next-line


export const increment = () => {
    return {
        type: 'INCREMENT'
    }
}

export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}

export const logIn = () => {
    return {
        type: 'SIGN_IN',
    }
}

export const multiply = (value) => {
return {
    type: 'MULTIPLY',
    payload: value
}
}

export const result = () => {

    let num = 2
    
    return {
        type: 'RESULT',
        payload: num = num 
    }
}
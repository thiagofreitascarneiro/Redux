 /* eslint-disable */ 
// eslint-disable-next-line


const counterReducer = (state = 0, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return state + 1;
        case "DECREMENT":
            return state - 1;
        case "MULTIPLY":
            return action.payload;
        case 'RESULT':
            return state * action.payload
        default:
            return state;
    }
};

export default counterReducer;
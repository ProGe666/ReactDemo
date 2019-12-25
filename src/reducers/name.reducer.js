export const nameReducer = (state = ['Alex','Bob','Dan'],action) => {
    if(action.type === 'ADD_NAME'){
    //
        return [...state, action.payload];
    }
    return state;
};

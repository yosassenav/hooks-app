export const todoReducer = (initialState, action) => {
    switch (action.type) {
        case 'ABC':
            throw new  Error('Action ABC not implemented');
    
        default:
            return initialState;
    }
}
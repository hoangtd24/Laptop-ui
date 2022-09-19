export function CartReducer(state, action){
    switch (action.type){
        case "add_item":
            const index = state.findIndex(item => item.product._id === action.payload._id)
            if(index >= 0){
                state[index].quantity += 0.5;
                console.log(state)
                return [...state]
            }
            else{
                return [...state, {product: {...action.payload},quantity: 1}];
            }
        default:
            throw new Error('Unknown action');
        }
}
export function CartReducer(state, action){
    switch (action.type){
        case "add_item":
            {
                const index = state.findIndex(item => item.product._id === action.payload._id)
                if(index >= 0){
                    state[index].quantity += 0.5;
                    console.log(state)
                    return [...state]
                }
                else{
                    return [...state, {product: {...action.payload},quantity: 1}];
                }
            }
        case "increase_quantity":
            {
                const index = action.payload;
                state[index].quantity += 0.5;
                return [...state]
            }
        case "decrease_quantity":
            {
                const index = action.payload;
                state[index].quantity -= 0.5;
                return [...state]
            }
        case "remove_item":
            {
                return state.filter((item,index) => index !== action.payload)
            }
        case "remove_cart":
                return [];
        default:
            throw new Error('Unknown action');
        }
}
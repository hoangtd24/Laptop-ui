import { createContext, useReducer } from "react"
import { CartReducer } from "./Reducer"

export const CartContext = createContext()
function Context({children}){
    const [state,dispatch] = useReducer(CartReducer, [])
    return(
        <CartContext.Provider value={{state,dispatch}}>
            {children}
        </CartContext.Provider>
    )
}

export default Context

export const initialState = {
    basket: [],
    user: null,
};
// Takes all prices and returns total

export function getBasketTotal(basket) {
    return basket?.reduce((amount, item) => item.price + amount, 0);
}

function reducer(state, action) {
    switch(action.type) {
        case 'ADD_TO_BASKET':
            // Logic for adding
            return {
                ...state,
                basket:  [...state.basket, action.item]
            };
        case 'REMOVE_FROM_BASKET':
            // Make duplicate
            let newBasket = [...state.basket];
            
            // Index of item to remove
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            
            if (index >= 0) {
                // item exists; remove it from the cart
                newBasket.splice(index, 1);
            } else {
                console.warn(`Cannot remove product (id: ${action.id}) as its not in the basket` )
            }
            
            return {
                ...state,
                basket: newBasket
                
            };
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        default:
            return state;
    }
}

export default reducer;
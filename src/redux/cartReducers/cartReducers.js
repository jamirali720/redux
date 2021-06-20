import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/actions';


const initialState = {
    cart: [],
    products : [
        {name: 'Dell Laptop', id: 1},
        {name: 'Hp Laptop', id: 2},
        {name: 'Asus Laptop', id: 3},
        {name: 'Lenovo Laptop', id: 4},
        {name: 'Acer Laptop', id: 5},
    ]
}

const cartReducers = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_CART: 
        const newItem = {
            productId : action.id,
            name: action.name,
            cartId : state.cart.length + 1
        }
        const newCart  = [...state.cart, newItem];
        return {...state,  cart: newCart}

        case REMOVE_FROM_CART: 
        const cartId = action.cartId;
        const remaining = state.cart.filter(item => item.cartId !== cartId);
      
        return {...state,  cart: remaining};

        default: 
        return state;
    }
};

export default cartReducers;
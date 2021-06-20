import React from 'react';
import { removeFromCart } from '../redux/actions/actions';
import {connect} from 'react-redux';

const Cart = (props) => {
    const {cart, removeFromCart}= props;
    console.log(cart)
    return (
        <div>
           <ul>
               {
                   cart.map((item, index) => <li  key={index}>
                      
                    {item.name}<button onClick={() => removeFromCart(item.cartId)}>X</button>
                   </li>)
               }
           </ul>
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = {
     removeFromCart : removeFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
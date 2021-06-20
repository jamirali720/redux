import React from 'react';
import { addToCart } from '../redux/actions/actions';
import{ connect }from 'react-redux';
import Products from '../Products/Products';



const Shop = (props) => {       
    const {products, addToCart} = props;

    return (
        <div>
           {
               products.map((pd, index) => <Products 
                key ={index}
                product= {pd}
                addToCart={addToCart}
                ></Products>)
           }
        </div>
    );
};

 const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

const mapDispatchToProps =  {
    addToCart: addToCart
}
export default connect(mapStateToProps, mapDispatchToProps)( Shop);
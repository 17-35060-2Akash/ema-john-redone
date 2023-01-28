import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    return (
        <div className='cart-details'>
            <h4 className='cart-title'>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${ }</p>
            <p>Total Shipping Charge: ${ }</p>
            <p>Tax: ${ }</p>
            <br />
            <h3>Grand Total: ${ }</h3>
        </div>
    );
};

export default Cart;
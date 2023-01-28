import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = ({ product, addToCart }) => {
    const { img, name, price, seller, ratings } = product;
    // console.log(img, name, price, seller, ratings);

    return (
        <div className='product-card'>
            <img src={img} alt="" />
            <div className='name-price'>
                <h3>{name}</h3>

            </div>
            <div className='details'>
                <h5>Price: ${price}</h5>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings}</p>
            </div>
            <button onClick={() => addToCart(product)} className='btn-addTo-cart'>
                <p className='btn-text'>Add to Cart</p>
                <p>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </p>
            </button>
        </div>
    );
};

export default Product;
// src/Product.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity } from './Cartslice';
import './App.css';

const Product = () => {
  const product = useSelector(state => state.cart.items[0]);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementQuantity(product.id));
  };

  const handleDecrement = () => {
    dispatch(decrementQuantity(product.id));
  };

  const discountedPrice = (product.price - (product.discountPercentage / 100 * product.price)).toFixed(2);
  const totalAmount = (product.quantity * discountedPrice).toFixed(2);

  return (
    <div className='productbox'>
      <div className='product'>
        <div>
          <img src={product.images} alt={product.title} />
        </div>
        <div>
          <h2 className='Title'>{product.title}</h2>
          <br /><br />
          <p className='description'>Description & Details <br />{product.description}</p>
        </div>
        <div className='quantity'>
          <button className='quantity'>{product.quantity}</button>
          <button onClick={handleDecrement}>-</button>
          <button className='button' onClick={handleIncrement}>+</button>
        </div>
        <div><h3>${product.price}</h3></div>
      </div>
      <div className='subtotal'>
        <span>SUBTOTAL</span>
        <span className='price'><h3>${(product.price * product.quantity).toFixed(2)}</h3></span>
      </div>
      <div className='shipping'>
        <span>DISCOUNT</span>
        <span className='price'><h3>{product.discountPercentage}%</h3></span>
      </div>
      <div className='total'>
        <span>TOTAL</span>
        <span className='price'><h3>${totalAmount}</h3></span>
      </div>
    </div>
  );
};

export default Product;

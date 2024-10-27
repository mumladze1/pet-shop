
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, clearCart } from '../features/cartSlice';

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <span>{item.name} - Quantity: {item.quantity}</span>
          <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
        </div>
      ))}
      <button onClick={() => dispatch(clearCart())}>Checkout</button>
    </div>
  );
}

export default Cart;

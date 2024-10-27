
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/cartSlice';
import { removeFromWishlist } from '../features/wishlistSlice';

function Wishlist() {
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  return (
    <div className="wishlist">
      <h2>Wishlist</h2>
      {wishlist.map((item) => (
        <div key={item.id} className="wishlist-item">
          <span>{item.name}</span>
          <button
            onClick={() => {
              dispatch(addToCart(item));
              dispatch(removeFromWishlist(item.id));
            }}
          >
            Move to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Wishlist;

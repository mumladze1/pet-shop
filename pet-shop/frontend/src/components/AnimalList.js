
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/cartSlice';
import { addToWishlist } from '../features/wishlistSlice';

function AnimalList() {
  const animals = useSelector((state) => state.animals);
  const dispatch = useDispatch();

  return (
    <div className="animal-list">
      <h2>Animals</h2>
      {animals.map((animal) => (
        <div key={animal.id} className="animal-card">
          <h3>{animal.name}</h3>
          <p>Price: ${animal.price}</p>
          <p>Stock: {animal.stock}</p>
          <button onClick={() => dispatch(addToCart(animal))}>Add to Cart</button>
          <button onClick={() => dispatch(addToWishlist(animal))}>Add to Wishlist</button>
        </div>
      ))}
    </div>
  );
}

export default AnimalList;

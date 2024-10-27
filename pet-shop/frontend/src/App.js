
import React from 'react';
import AnimalList from './components/AnimalList';
import Cart from './components/Cart';
import Wishlist from './components/Wishlist';
import './styles/shop.css';

function App() {
  return (
    <div className="app">
      <header>
        <h1>Pet Shop</h1>
      </header>
      <main>
        <AnimalList />
        <Cart />
        <Wishlist />
      </main>
    </div>
  );
}

export default App;

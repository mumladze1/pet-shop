// admin-panel/src/App.js
import React from 'react';
import AnimalForm from './components/AnimalForm';
import AnimalList from './components/AnimalList';
import CategoryForm from './components/CategoryForm';
import './styles/admin.css';

function App() {
  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>
      <AnimalForm />
      <AnimalList />
      <CategoryForm />
    </div>
  );
}

export default App;

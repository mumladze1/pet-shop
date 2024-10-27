
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeAnimal } from '../features/animalsSlice';

function AnimalList() {
  const animals = useSelector((state) => state.animals);
  const dispatch = useDispatch();

  return (
    <div className="list">
      <h2>Animals List</h2>
      {animals.map((animal) => (
        <div key={animal.id} className="list-item">
          <span>{animal.name}</span>
          <button onClick={() => dispatch(removeAnimal(animal.id))}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default AnimalList;

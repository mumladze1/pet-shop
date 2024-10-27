
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAnimal } from '../features/animalsSlice';

function AnimalForm() {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addAnimal({ id: Date.now(), name }));
    setName('');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Animal Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <button type="submit">Add Animal</button>
    </form>
  );
}

export default AnimalForm;

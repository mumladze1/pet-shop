
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCategory } from '../features/categoriesSlice';

function CategoryForm() {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCategory({ id: Date.now(), title }));
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Category Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <button type="submit">Add Category</button>
    </form>
  );
}

export default CategoryForm;

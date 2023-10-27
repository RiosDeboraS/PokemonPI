 import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [name, setName] = useState('');

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={handleInputChange} />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;


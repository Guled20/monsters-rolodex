import React from 'react';
import './search-box.style.css';

const SearchBox = ({ onSearchChange, placeholder }) => {
  return (
    <input
      className='search'
      type='search'
      placeholder={placeholder}
      onChange={onSearchChange}
    />
  );
};

export default SearchBox;

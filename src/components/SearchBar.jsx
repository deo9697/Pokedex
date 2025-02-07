import React from 'react';
import './SearchBar.css';

function SearchBar({setSearchTerm}) {
  return (
    <input
    type="text"
    className="search-bar"
    placeholder="Cerca Pokémon..."
    onChange={(e) => setSearchTerm(e.target.value)}
  />
  )
}

export default SearchBar;
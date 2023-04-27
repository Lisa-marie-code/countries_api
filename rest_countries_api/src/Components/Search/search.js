import React, { useState } from "react";
import {FaSearch} from 'react-icons/fa'


import "./search.css";

export const SearchBar = ({ onSearch }) => {
  const [searchItem, setSearchItem] = useState("");
 
  const handleChange = (event) => {
    setSearchItem(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="search-input-container">
      <FaSearch />
      <input
      
        className="input-field"
        type="text"
        placeholder="Search for a country..."
        value={searchItem}
        onChange={handleChange}
        
      />
    </div>
  );
};

export default SearchBar;

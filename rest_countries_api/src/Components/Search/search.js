import React, { useState } from "react";
import {FaSearch} from 'react-icons/fa'


import "./search.scss";

export const SearchBar = ({ onSearch }) => {
  const [searchItem, setSearchItem] = useState("");
 
  const handleChange = (event) => {
    setSearchItem(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="search-input-container">
    
      <input
      
        className="input-field"
        type="text"
        placeholder="Search for a country..."
        value={searchItem}
        onChange={handleChange}
        
      />
        <FaSearch className="searchicon"/>
    </div>
  );
};

export default SearchBar;

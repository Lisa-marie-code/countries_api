import React, { useState } from "react";

import ".//search.css";

export const SearchBar = ({ onSearch }) => {
  const [searchItem, setSearchItem] = useState("");

  const handleChange = (event) => {
    setSearchItem(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div>
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

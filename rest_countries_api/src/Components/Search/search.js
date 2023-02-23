import React,{ useState } from "react";
import ".//search.css"


export const  SearchBar =() =>{
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  
    console.log(searchTerm);
  };

  return (
    <input className="input-field"
      type="text"
      placeholder="Search for a country..."
      value={searchTerm}
      onChange={handleChange}
    />
  );
}

export default SearchBar;
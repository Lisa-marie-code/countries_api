import React, { useState } from "react";
import ".//filter.css";

export const FilterDropdown = () =>{
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    const newOption = event.target.value;
    setSelectedOption(newOption);
   
  };
 const options = ['Africa', 'America', 'Asia', ' Europe', 'Oceania']

  return (
    <select value={selectedOption} onChange={handleChange}>Filter by Region
      <option value="Filter by Region">Filter by Region</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

  
export default FilterDropdown;
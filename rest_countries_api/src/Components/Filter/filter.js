import React, { useState } from "react";
import "./filter.css";

export const FilterDropdown = (props) =>{
  const [selectedOption, setSelectedOption] = useState('');
  

  const handleFilter = (event) => {
    const newOption = event.target.value;
    setSelectedOption(newOption);
    props.filterValueSelected(event.target.value);
   
  };
  
 const options = ['Africa', 'America', 'Asia', ' Europe', 'Oceania']

  return (
    <select value={selectedOption} onChange={handleFilter}>Filter by Region
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
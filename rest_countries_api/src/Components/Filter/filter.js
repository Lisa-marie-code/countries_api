import React, { useState } from "react";
import "./filter.css";

export const FilterDropdown = (props) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    props.filterValueSelected(event.target.value);
  };

  const options = ["Africa", "America", "Asia", " Europe", "Oceania"];
  return (
    <select value={selectedOption} onChange={handleChange}>
      <option value="Filter by Region">Filter by Region</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default FilterDropdown;

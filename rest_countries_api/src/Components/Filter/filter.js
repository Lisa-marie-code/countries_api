import React,{useState} from "react";

import "./filter.css";

export const FilterDropdown = ({ handleFilter}) => {
  const [filterValue, setFilterValue] = useState("");

  const selectHandler = (event) => {
    const selectedValue = event.target.value;
    setFilterValue(selectedValue);
    handleFilter(selectedValue);
  };




  const options = ["Africa", "America", "Asia", " Europe", "Oceania"];
  return (
    <select value ={filterValue} onChange={selectHandler} className="selected">
      <option value="Filter by Region" >Filter by Region</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default FilterDropdown;



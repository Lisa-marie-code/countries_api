import React, { useState } from "react";
import { Theme } from "./Components/Header/header";
import { SearchBar } from "./Components/Search/search";
import { FilterDropdown } from "./Components/Filter/filter";
import { DisplayCountries } from "./Components/Countries/countries";
import "./index.css";


const Landing = () => {
  const [searchItem, setSearchItem] = useState("");
  const [filterByRegion, setFilterByRegion] = useState('');

  const handleFilter = (filtered) => {
    console.log(filtered);
    setFilterByRegion(filtered);
  };

  const handleSearch = (searchItem) => {
    setSearchItem(searchItem);
    console.log(searchItem);
  };
 
  return (
    <div>
      <Theme />
      <div className="search_filter">
        <SearchBar onSearch={handleSearch} />
        <FilterDropdown 
          handleFilter={handleFilter}
         />
      </div>
      <DisplayCountries searchItem={searchItem}  filtered={filterByRegion} />
    </div>
  );
};

export default Landing;


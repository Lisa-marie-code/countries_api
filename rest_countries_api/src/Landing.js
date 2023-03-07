import React, { useState } from "react";
import { Theme } from "./Components/Header/header";
import { SearchBar } from "./Components/Search/search";
import { FilterDropdown } from "./Components/Filter/filter";
import { DisplayCountries } from "./Components/Countries/countries";
import "./index.css";

const Landing = () => {
  const [searchItem, setSearchItem] = useState("");

  function handleFilter(filterValue) {
    console.log(filterValue);
  }

  const handleSearch = (searchItem) => {
    setSearchItem(searchItem);
    console.log(searchItem);
  };
 

  return (
    <div>
      <Theme />
      <div className="search_filter">
        <SearchBar onSearch={handleSearch} />
        <FilterDropdown filterValueSelected={handleFilter}/>
      </div>
      <DisplayCountries searchItem={searchItem} />
    </div>
  );
};

export default Landing;

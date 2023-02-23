import React, { useState } from "react";
import { Theme } from "./Components/Header/header";
import { SearchBar } from "./Components/Search/search";
import { FilterDropdown } from "./Components/Filter/filter";
import { DisplayCountries } from "./Components/Countries/countries";


const Landing = () => {

function handleChange(filterValue){
console.log(filterValue);
}

  return (
      <div>
        <Theme />
        <div className="search_filter">
          <SearchBar/>
          <FilterDropdown filterValueSelected={handleChange}/>
        </div>
        <DisplayCountries />
      </div>
   
  );
};

export default Landing;

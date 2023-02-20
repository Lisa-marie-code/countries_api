import React from "react";
import ".//App.css";
import { Theme } from "./Components/Header/header";
import { SearchBar } from "./Components/Search/search";
import { FilterDropdown } from "./Components/Filter/filter";
import {DisplayCountries } from "./Components/Countries/countries";


export const App = () => {
  return (
    <div>
      <Theme />
      <div className="search_filter">
      <SearchBar />
      <FilterDropdown />
      </div>
      <DisplayCountries/>
    </div>
  );
};

export default App;

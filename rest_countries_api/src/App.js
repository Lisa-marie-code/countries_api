import React from "react";
import ".//App.css";
import { Theme } from "./Components/Header/header";
import { SearchBar } from "./Components/Search/search";
import { FilterDropdown } from "./Components/Filter/filter";


export const App = () => {
  return (
    <div>
      <Theme />
      <div className="search_filter">
      <SearchBar />
      <FilterDropdown />
      </div>
    </div>
  );
};

export default App;

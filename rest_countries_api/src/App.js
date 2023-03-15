import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css"
import CountryDetails from "./Components/Detailed/detailed";
import Landing from "./Landing";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />}/>
      <Route path=":countryName/details" element={<CountryDetails/>}/>
    </Routes>
  );
};

export default App;

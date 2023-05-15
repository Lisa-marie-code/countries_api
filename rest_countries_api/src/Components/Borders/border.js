import React, {useContext} from "react";
import { Link, useLocation } from "react-router-dom";
import "./border.scss";
import  AllCountriesData from "../Contexts/country-context";



export const BorderCountries = () => {
  const countriesContext = useContext(AllCountriesData);
  const countries  = countriesContext || {};
  
  
  const { state } = useLocation();



  const getNameByCode = (alphacode) => {
  let name = "";
  if (countries && Array.isArray(countries)) {
    name = countries.find((country) => country.code === alphacode);
  }
  return name;
};

  

  return (
    <div>
    {state?.borders && state?.borders.length > 0 && (
      <div className="border">
        <span className="point">Border Countries:</span>
        <span className="buttons">
          
          {state?.borders.map((borderCode,index) => 
          (
            <Link key={index} to={`/border/${borderCode}`}>
              <button className="border-btn"> {getNameByCode(borderCode)}</button>
            </Link>
            
          ))}
        </span>
      </div>
    )}
  </div>
  );
};
export default BorderCountries;


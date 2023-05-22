import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import "./border.scss";
import { AllCountriesData } from "../Contexts/country-context";

export const BorderCountries = () => {
  const countriesContext = useContext(AllCountriesData);
  const countries = countriesContext || {};

  const { state } = useLocation();

  const getNameByCode = (code) => {
    let name = "";
    if (countries) {
      const country = countries.find((country) => country.alpha3Code === code);
      name = country ? country.name : "";
    }
    return name;
  };

  return (
    <div>
      {state?.borders && state?.borders.length > 0 && (
        <div className="border">
          <span className="point">Border Countries:</span>
          <span className="buttons">
            
            {state.borders.map((borderCountry) => 
            (
              <Link key={borderCountry} to={`/border/${borderCountry}`}>
                <button className="border-btn">{borderCountry}</button>
              </Link>
              
            ))}
          </span>
        </div>
      )}
    </div>
  );
};
export default BorderCountries;

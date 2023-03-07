import React, { useState, useEffect } from "react";
import "./countries.css";
import { Link } from "react-router-dom";




export const DisplayCountries = ({ searchItem }) => {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(
      "https://restcountries.com/v2/all?fields=name,capital,population,flag,region,continent"
    )
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error(error));
  }, []);
  console.log(countries);

  const filterCountries = countries.filter((country) => {
    return country.name.toLowerCase().includes(searchItem.toLowerCase());
  });

  return (
    <div className="grid-country">
      {filterCountries.map((country) => (
        <Link key={country.alpha3Code} to="details">
          <div id="each-country">
            <img src={country.flag} alt="country_image" />
            <h3>{country.name}</h3>
            <p>Population:{country.population}</p>
            <p>Region:{country.region}</p>
            <p className="capital">Capital:{country.capital}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default DisplayCountries;

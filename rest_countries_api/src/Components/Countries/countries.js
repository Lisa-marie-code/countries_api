import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./countries.css";

export const DisplayCountries = ({ searchItem }) => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://restcountries.com/v2/all?fields=name,capital,population,flag,region,continent,subregion,topLevelDomain,currencies,languages"
    )
      .then((response) => response.json())
      .then((data) => {
        setCountries(data)
        setIsLoading(false);
      })
      .catch((error) => console.error(error));

  }, []);
  console.log(countries);

  const filterCountries = countries.filter((country) => {
    return country.name.toLowerCase().includes(searchItem.toLowerCase());
  });

  if (isLoading) {
    return <div className="loading">Loading.........</div>;
  }

  return (
    <div className="grid-country">
      {filterCountries.map((country, index) => (
        <Link
          className="no-underline"
          key={index}
          to={`/${country.name}/details`}
          state={country}
        >
          <section className="each-country">
            <div className="img-div">
              <img src={country.flag} alt="country_image" />
            </div>
            <h3>{country.name}</h3>
            <p>
              <b>Population: </b>
              {country.population}
            </p>
            <p>
              <b>Region: </b>
              {country.region}
            </p>
            <p className="capital">
              <b>Capital: </b>
              {country.capital}
            </p>
          </section>
        </Link>
      ))}
    </div>
  );
};

export default DisplayCountries;

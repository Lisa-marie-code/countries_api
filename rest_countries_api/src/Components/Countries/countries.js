import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./countries.scss";



export const DisplayCountries = ({ searchItem ,filtered}) => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  

  const url =
    "https://restcountries.com/v2/all?fields=name,capital,population,flag,region,continent,subregion,topLevelDomain,currencies,borders,languages,nativeName,code";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);
  console.log(countries);


  const filterCountries = countries.filter((country) => {
    if (filtered && country.region !== filtered) {
      return false;
    }
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
          <div className="country-div">
          <h3 className="countryname">{country.name}</h3>
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
          </div>
          </section>
        </Link>
      ))}
    </div>
  );
};

export default DisplayCountries;

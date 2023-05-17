import React, { createContext, useState, useEffect } from "react";

export const AllCountriesData = createContext();

export const CountriesContext = ({ children }) => {
  const [countries, setCountries] = useState([]);

  const url =
    "https://restcountries.com/v2/all?fields=name,capital,population,flag,region,continent,subregion,topLevelDomain,currencies,borders,languages,nativeName,code";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
        console.log(data);
      })
      .catch((error) => console.error(error));
  }, []);
  console.log(countries);

  return (
    <AllCountriesData.Provider value={{ countries, setCountries }}>
      {children}
    </AllCountriesData.Provider>
  );
};

export default AllCountriesData;

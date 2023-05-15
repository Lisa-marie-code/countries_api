import React,{ createContext,useState, useEffect } from 'react';
import {BorderCountries} from "../Borders/border";

const AllCountriesData = createContext();

 export const CountriesContext = ({children})=> {
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
    <AllCountriesData.Provider value={{countries,setCountries}}>
      <BorderCountries/>
   {children}
    </AllCountriesData.Provider>
  );
}

export default AllCountriesData;
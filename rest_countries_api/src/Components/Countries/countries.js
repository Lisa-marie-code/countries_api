import React, { useState, useEffect } from "react";
import "./countries.css";
import { Link } from "react-router-dom";


export const DisplayCountries = () => {
  const [data, setData] = useState([]);

 

  useEffect(() => {
    fetch(
      "https://restcountries.com/v2/all?fields=name,capital,population,flag,region,continent"
    )
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);
  console.log(data);

  return (
    <div className="grid-country">
      {data.map((res, index) => (
        <Link key={index} to="details">
          <div id="each-country">
            <img src={res.flag} alt="country_image" />
            <h3>{res.name}</h3>
            <p>Population:{res.population}</p>
            <p>Region:{res.region}</p>
            <p className="capital">Capital:{res.capital}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default DisplayCountries;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Theme } from "../Header/header";
import ".//detailed.css";

const CountryDetails = () => {
  const [details, setDetails] = useState([]);
  const [langmades, setLangmades] = useState([]);

  useEffect(() => {
    fetch(
      "https://restcountries.com/v2/all?fields=nativename,name,capital,subregion,population,currencies,region,flag,languages,topLevelDomain,borders"
    )
      .then((response) => response.json())
      .then((data) => setDetails(data))
      .catch((error) => console.error(error));
  }, []);
  console.log(details);

  return (
    <div>
      <Theme />
      <Link to={"/"}>
        <p className="back">Back</p>
      </Link>
      {details.map((res, index) => (
        <div key={index} className="det-country">
          <img src={res.flag} alt="flag" className="new-flag" />
          <section>
            <h1>{res.name}</h1>
            <p>Native Name:{res.nativename}</p>
            <p>Population:{res.population}</p>
            <p>Region:{res.region}</p>
            <p>Sub Region:{res.subregion}</p>
            <p>Capital:{res.capital}</p>
            <div>
             
            </div>
          </section>
          <div className="domain-sides">
            <p>Top Level Domain:{res.topLevelDomain.join(", ")}</p>
            <p>
              Currencies:{res.currencies?.map((curr) => curr.name).join(", ")}
            </p>
            <p>Languages:{res.languages.map((lan) => lan.name).join(", ")}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountryDetails;

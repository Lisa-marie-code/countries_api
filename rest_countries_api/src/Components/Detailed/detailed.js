import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Theme } from "../Header/header";
import BorderCountries from "../Borders/border";

import ".//detailed.css";

const CountryDetails = () => {
  const { state } = useLocation();




  
  return (
    <div>
      <Theme />
      <Link to={"/"} className="no-underline">
        <button className="back">Back</button>
      </Link>
      <div class="det-country">
        <div class="img-div">
          <img src={state?.flag} alt="flag" className="new-flag" />
        </div>
        <div class="description">
          <span>
            <h2>{state?.name}</h2>
          </span>
          <span class="details-group">
            <span class="details-1">
              <p>
                <b>Native Name: </b>
                {state?.nativeName}
              </p>
              <p>
                <b>Population: </b>
                {state?.population}
              </p>
              <p>
                <b>Region: </b>
                {state?.region}
              </p>
              <p>
                <b>Sub Region: </b>
                {state?.subregion}
              </p>
              <p>
                <b>Capital: </b>
                {state?.capital}
              </p>
            </span>
            <span class="details-2">
              <p>
                <b>Top Level Domain: </b>
                {state?.topLevelDomain}
              </p>
              <p>
                <b>Currencies: </b>
                {state?.currencies.map((currency)=> currency.name).join(',')}
              </p>
              <p>
                <b>Languages: </b>
                {state?.languages.map((language) => language.name).join(", ")}
              </p>
            </span>
          </span>
          <BorderCountries />
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;

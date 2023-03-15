import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Theme } from "../Header/header";
import ".//detailed.css";

const CountryDetails = () => {
  const { state } = useLocation();

  return (
    <div>
      <Theme />
      <Link to={"/"} className="no-underline">
        <p className="back">Back</p>
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
                <b>Population:</b>
                {state?.population}
              </p>
              <p>
                <b>Region:</b>
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
                {state?.nativeName}
              </p>
              <p>
                <b>Currencies:</b>
                {state?.population}
              </p>
              <p>
                <b>Languages:</b>
                {state?.region}
              </p>
            </span>
          </span>
          <div class="border">
            <span class="point">Border Countries:</span>
            <span class="buttons">
              <button class="border-btn"></button>
              <button class="border-btn"></button>
              <button class="border-btn"></button>
            </span>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default CountryDetails;

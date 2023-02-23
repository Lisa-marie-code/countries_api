import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ".//detailed.css";

const CountryDetails = () => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch(
      "https://restcountries.com/v2/all?fields=nativename,name,capital,subregion,population,currencies,region,flag,languages,topleveldomain,bordercountries"
    )
      .then((response) => response.json())
      .then((data) => setDetails(data))
      .catch((error) => console.error(error));
  }, []);
  console.log(details);

  return (
    <div >
      <Link to={"/"}><p className="back">Back</p></Link>
      {details.map((res, index) => (
       
        <div key={index} className="det-country">
            
          <img src={res.flag} alt="flag" className="new-flag" />
          <section>
            <h4>{res.name}</h4>
            <p>Native Name:{res.nativename}</p>
            <p>Population:{res.population}</p>
            <p>Region:{res.region}</p>
            <p>Sub Region:{res.subregion}</p>
            <p>Capital:{res.capital}</p>

         
          </section>

        </div>
      ))}
     
    </div>
  );
};

export default CountryDetails;

import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./border.scss"

export const BorderCountries = () => {
  const { state } = useLocation();

  const location = useLocation();

  const getBorders = location.state.borders;
  const getNames = location.state.name;
  console.log(getBorders);
  console.log(getNames);


  return (
    <div>
      {state?.borders && state?.borders.length > 0 && (
        <div className="border">
          <span className="point">Border Countries:</span>
          <span className="buttons">
            
            {state.borders.map((borderCountry) => 
            (
              <Link key={borderCountry} to={`/border/${borderCountry}`}>
                <button className="border-btn">{borderCountry}</button>
              </Link>
              
            ))}
          </span>
        </div>
      )}
    </div>
  );
};
export default BorderCountries;


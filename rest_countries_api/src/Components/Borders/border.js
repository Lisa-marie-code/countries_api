import React from "react";
import { Link, useLocation} from "react-router-dom";


export const BorderCountries = () =>{
    const { state } = useLocation();
    return(
        <div>
             {state?.borders && state?.borders.length > 0 && (
            <div className="border">
              <span className="point">Border Countries:</span>
              <span className="buttons">
                {state.borders.map((borderCountry) => (
                  <Link key={borderCountry} to={`/border/${borderCountry}`}>
                    <button className="border-btn">
                      {borderCountry}
                    </button>
                  </Link>
                ))}
              </span>
            </div>
          )}
        </div>
    )

}
export default BorderCountries;
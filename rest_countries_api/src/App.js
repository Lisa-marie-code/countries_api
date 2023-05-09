import React,{useState } from "react";
import { Route, Routes} from "react-router-dom";
import "./App.scss";
import "./index.scss";
import CountryDetails from "./Components/Detailed/detailed";
import Landing from "./Landing";
import { ThemeContext } from "./Components/Contexts/theme-context";

export const App = () => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
      <div className={`theme-${theme}`}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path=":countryName/details" element={<CountryDetails />} />
        <Route path="/border/:countryName" element={<CountryDetails />} />
      </Routes>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;

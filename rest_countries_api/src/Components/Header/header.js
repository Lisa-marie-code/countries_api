import React, { useContext } from "react";
import { ThemeContext } from '../Contexts/theme-context';
import { FaMoon } from "react-icons/fa";
import "./header.scss";


export const Theme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = () => {
    const isCurrentDark = theme === 'dark';
    setTheme(isCurrentDark ? 'light' : 'dark');
  };

  return (
    <div>
      <header className="header">
        <h2>Where in the world?</h2>
        <div className="moon">
          <FaMoon className="moon-icon" />
          <h3 onClick={handleThemeChange}>Dark Mode</h3>
        </div>
      </header>
    </div>
  );
};

export default Theme;

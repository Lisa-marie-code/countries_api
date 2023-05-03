import React, { useState, useEffect } from "react";
import { FaMoon } from "react-icons/fa";
import "./header.css";

export const Theme = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    const sections = document.querySelectorAll(".each-country");
    sections.forEach((section) => {
      section.classList.toggle("dark", theme === "dark");
    });
   

    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <div>
      <header className="header">
        <h2>Where in the world?</h2>
        <div className="moon">
          <FaMoon className="moon-icon" />
          <h3 onClick={toggleTheme}>Dark Mode</h3>
        </div>
      </header>
    </div>
  );
};

export default Theme;

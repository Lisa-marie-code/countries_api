import React, { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import "./header.css";

export const Theme = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const body = document.querySelector("body");
    const header = document.querySelector(".header");
    const sections = document.querySelectorAll(".each-country");
    body.classList.toggle("dark-theme", theme === "dark");
    header.classList.toggle("dark-theme", theme === "dark");

    sections.forEach((section) => {
      section.classList.toggle("dark-theme", theme === "dark");
    });
  }, [theme]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

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

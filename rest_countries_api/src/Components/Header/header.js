import React, { useEffect, useState } from "react";
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
        <div>
          <h4 onClick={toggleTheme}>Dark Mode</h4>
        </div>
      </header>
    </div>
  );
};

export default Theme;

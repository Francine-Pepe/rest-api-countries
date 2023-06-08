import { useState, useEffect } from "react";
import Moon from "../Icons/Moon";
import DarkMoon from "../Icons/DarkMoon";
import "../Styles/styles.sass";

function DarkMode() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`DarkMode ${theme}`}>
      <button className="button-darkmode" onClick={toggleTheme}>
        {theme ? <Moon /> : <DarkMoon />} Dark Mode
      </button>
    </div>
  );
}

export default DarkMode;

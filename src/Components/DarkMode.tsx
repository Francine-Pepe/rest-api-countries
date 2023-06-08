import { useState } from "react";
import Moon from "../Icons/Moon";
import DarkMoon from "../Icons/DarkMoon";
import "../Styles/styles.sass";

function DarkMode() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <button className="button-darkmode" onClick={toggleDarkMode}>
        {darkMode ? <DarkMoon /> : <Moon />} Dark Mode
      </button>
    </div>
  );
}

export default DarkMode;

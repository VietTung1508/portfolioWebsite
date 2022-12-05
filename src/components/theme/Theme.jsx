import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./theme.scss";

function Theme() {
  const [dark, setDark] = useState(true);

  const handleTheme = () => {
    setDark(!dark);
    const body = document.querySelector("body");
    body.classList.toggle("light");
  };

  return (
    <div className="theme" onClick={handleTheme}>
      {dark ? (
        <FontAwesomeIcon className="icon" icon={faLightbulb} />
      ) : (
        <FontAwesomeIcon className="icon" icon={faMoon} />
      )}
    </div>
  );
}

export default Theme;

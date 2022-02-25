import "./DarkMode.scss";

// React icons
import { FaSun } from "react-icons/fa";
import { IoMoonSharp } from "react-icons/io5";

const DarkMode = ({ changeDark }) => {
  return (
    <div className="dark-mode">
      <input type="checkbox" id="darkMode" onChange={() => changeDark()} />
      <label htmlFor="darkMode">
        <div className="ball"></div>
        <FaSun className="dark-mode-icon" />
        <IoMoonSharp className="dark-mode-icon" />
      </label>
    </div>
  );
};

export default DarkMode;

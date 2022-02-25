import "./Header.scss";
import { useState } from "react";

// Icons
import { FaSearch, FaBell, FaCaretDown, FaOutdent } from "react-icons/fa";

// Components
import DarkMode from "../Share/DarkMode";

const Header = ({ changeDark }) => {
  const [search, setSearch] = useState("show-search");
  const [myScroll, setMyScroll] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);

  // Searchbar visible control
  const handleShow = () => {
    search === "show-search"
      ? setSearch("show-search show")
      : setSearch("show-search");
    return;
  };

  //Mobile menu control
  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
    return;
  };

  // Transparent header control
  document.addEventListener("scroll", () => {
    setMyScroll(window.scrollY);
    return;
  });

  return (
    <div className={myScroll === 0 ? "header" : "header no-transparent"}>
      <div className="logo">
        <h1>
          <span>At</span>flix
        </h1>
      </div>
      <nav>
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>News & Popular</li>
          <li>My List</li>
        </ul>
      </nav>
      <div className="right">
        <div className="search">
          <label htmlFor="search" className={mobileMenu ? "invis-search" : ""}>
            <FaSearch className="icon icon-search" onClick={handleShow} />
            <input type="text" className={search} />
          </label>
        </div>
        <FaBell className="icon icon-bell" />
        <div className="user-box">
          <div className="user"></div>
          <div className="user-menu">
            <div className="top">
              <FaCaretDown className="top-icon" />
            </div>
            <div className="menu-list">
              <ul>
                <li>Manage Profiles</li>
                <li>Account</li>
                <li>Help Center</li>
                <li className="menu-signout">Sign out Atflix</li>
                <li className="menu-dark-mode">
                  <DarkMode changeDark={changeDark} />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mobile-menu">
          <div
            className={
              mobileMenu
                ? "mobile-background mobile-background-show"
                : "mobile-background"
            }
          ></div>
          <div
            className={mobileMenu ? "mobile-icon rotate" : "mobile-icon"}
            onClick={handleMobileMenu}
          >
            <FaOutdent />
          </div>
          <div className={mobileMenu ? "menu mobile-menu-show" : "menu"}>
            <ul>
              <li>
                <div className="user-profile">
                  <div className="user"></div>
                  <span>Elliot</span>
                </div>
              </li>
              <li>Account</li>
              <li>
                <div className="mobile-dark-mode">
                  Dark Mode
                  <DarkMode changeDark={changeDark} />
                </div>
              </li>
              <li>Help Center</li>
              <li>Sign out Atflix</li>
              <li className="myList">My List</li>
              <li>Children & Family</li>
              <li>Action</li>
              <li>Fantasy</li>
              <li>Sci-Fi</li>
              <li>Horror</li>
              <li>Dramas</li>
              <li>Documentaries</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

import "./Footer.scss";

// React icons
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-icons">
        <FaFacebookF />
        <FaInstagram />
        <FaYoutube />
        <FaTwitter />
      </div>
      <div className="footer-menu">
        <div className="menu film-list">
          <ul>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
          </ul>
        </div>
        <div className="menu">
          <ul>
            <li>Audio and Subtitles</li>
            <li>Media Center</li>
            <li>Privacy</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="menu">
          <ul>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Privacy</li>
            <li>Cookie Preferences</li>
          </ul>
        </div>
        <div className="menu">
          <ul>
            <li>Gif Cards</li>
            <li>Term of Use</li>
            <li>Privacy</li>
            <li>Legal Notices</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

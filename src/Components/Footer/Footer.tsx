import { Link } from "react-router-dom";

import "./footer.scss";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <footer>
      <div className="footer-logo"></div>
      <div className="footer-info">
        <ul className="footer-left">
          <li>
            <Link to="/about_us">ABOUT US</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <Link to="/contacts">CONTACT</Link>
          </li>
        </ul>
        <ul className="footer-middle">
          <li>
            <Link to="info@car.com">info@car.com</Link>
          </li>
          <li>
            <a href="tel:240-865-3730">240-865-3730</a>
          </li>
        </ul>
        <ul className="footer-right">
          <li className="footer-media">
            <ul className="footer-media-list">
              <li>
                <Link to="/">
                  <YouTubeIcon />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FacebookIcon />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <InstagramIcon />
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        2023 Autohunt. Developed by Oleksandr Vernichenko
      </div>
    </footer>
  );
};

export default Footer;

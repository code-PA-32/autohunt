import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import logo from "assets/logo.png";

import "./logo.scss";

interface LogoProps {
  text: string;
}

export const Logo = ({ text }: LogoProps) => {
  return (
    <div className="login_page_logo">
      <div className="login_page_logo-inner">
        <img src={logo} alt="logo" />
        <p>{text}</p>
        <span>Welcome to Autohunt</span>
        <ul>
          <li>
            <a
              href="https://github.com/OleksandrVernichenko"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon fontSize="large" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/oleksandr-vernichenko-2a53a2273/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon fontSize="large" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

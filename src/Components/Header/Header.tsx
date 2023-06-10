import { NavLink } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";

import logo from "assets/logo.png";
import { toHost } from "utils";

import "./header.scss";

interface HeaderProps {
  className: string;
  onFilterReset: () => void;
  onSetNewCars: () => void;
  onSetUsedCars: () => void;
  onLogout: () => void;
  logged: boolean;
  userName: string;
  avatar: string;
  length: number;
}

export const Header = ({
  className,
  onSetUsedCars,
  onSetNewCars,
  onFilterReset,
  onLogout,
  logged,
  userName,
  avatar,
  length,
}: HeaderProps) => {
  return (
    <header className={className}>
      <nav>
        <ul className="header-links">
          <li>
            <button onClick={onFilterReset} className="logo_btn">
              <NavLink to="/">
                <img src={logo} alt="logo" className="logo" />
              </NavLink>
            </button>
          </li>
          <li>
            <button onClick={onSetNewCars}>
              <NavLink
                to="/new-cars"
                style={({ isActive }) => (isActive ? { color: "#007cc7" } : {})}
              >
                New Cars
              </NavLink>
            </button>
          </li>
          <li>
            <button onClick={onSetUsedCars}>
              <NavLink
                style={({ isActive }) => (isActive ? { color: "#007cc7" } : {})}
                to="/used-cars"
              >
                Used Cars
              </NavLink>
            </button>
          </li>
          <li>
            <button onClick={() => {}}>
              <NavLink
                style={({ isActive }) => (isActive ? { color: "#007cc7" } : {})}
                to="/compare"
              >
                Compare
              </NavLink>
            </button>
          </li>
          <li>
            <button onClick={() => {}}>
              <NavLink
                style={({ isActive }) => (isActive ? { color: "#007cc7" } : {})}
                to="/sell"
              >
                Sell
              </NavLink>
            </button>
          </li>
          <li>
            <button onClick={() => {}}>
              <NavLink
                style={({ isActive }) => (isActive ? { color: "#007cc7" } : {})}
                to="/article"
              >
                Article
              </NavLink>
            </button>
          </li>
          <li className="active_nav">
            {!logged && (
              <NavLink to="/login">
                <LoginRoundedIcon />
              </NavLink>
            )}
            {logged && (
              <>
                <NavLink to="/user">
                  <Chip
                    avatar={
                      <Avatar
                        sx={{ width: "24px" }}
                        alt={userName}
                        src={toHost(avatar)}
                      />
                    }
                    label={userName}
                    variant="outlined"
                    sx={{ cursor: "pointer" }}
                  />
                </NavLink>
                <NavLink to={"/user/messages"}>
                  <Badge badgeContent={length} color="primary">
                    <MailIcon color="action" />
                  </Badge>
                </NavLink>
              </>
            )}
            {logged && (
              <button className="logout" onClick={onLogout}>
                <LogoutRoundedIcon />
              </button>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

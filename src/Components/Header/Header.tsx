import React from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import logo from "assets/logo.png";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import { toHost } from "utils";
interface HeaderProps {
  className: string;
  onFilterReset: () => void;
  onSetNewCars: () => void;
  onSetUsedCars: () => void;
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
        </ul>
        <div className="active_nav">
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
            <button className="logout">
              <LogoutRoundedIcon />
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

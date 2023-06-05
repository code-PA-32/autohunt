import { NavLink } from "react-router-dom";
import "./profileLinks.scss";
interface ProfileLinksProps {
  isAdmin: boolean;
}
export const ProfileLink = ({ isAdmin }: ProfileLinksProps) => {
  const links = [
    { to: "/user/cars", id: "/user/cars", name: "Cars" },
    { to: "/user/fav", id: "/user/fav", name: "Liked Cars" },
    { to: "/user/messages", id: "/user/messages", name: "Chats" },
  ];

  return (
    <div className="links">
      {links.map((l) => (
        <NavLink
          key={l.id}
          to={l.to}
          style={({ isActive }) =>
            isActive
              ? { background: "transparent", border: "1px solid #1b71e1" }
              : {}
          }
        >
          {l.name}
        </NavLink>
      ))}
    </div>
  );
};

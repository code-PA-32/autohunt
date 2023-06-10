import { Link } from "react-router-dom";

import "./switch.scss";

interface SwitchProps {
  text: string;
  link: string;
  to: string;
}

export const Switch = ({ text, link, to }: SwitchProps) => {
  return (
    <div className="switch">
      <span>{text}</span> <Link to={to}>{link}</Link>
    </div>
  );
};

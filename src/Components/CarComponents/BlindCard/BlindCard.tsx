import { Link } from "react-router-dom";
import DirectionsCarFilledRoundedIcon from "@mui/icons-material/DirectionsCarFilledRounded";

import "./blindCard.scss";

export const BlindCard = () => {
  return (
    <li className="blind_card">
      <span className="icon">
        <DirectionsCarFilledRoundedIcon fontSize="inherit" />
      </span>
      <span>Add car to compare</span>
      <Link to={"/new-cars"}></Link>
    </li>
  );
};

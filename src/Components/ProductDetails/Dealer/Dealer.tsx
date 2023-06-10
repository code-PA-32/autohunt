import { Avatar } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

import { toHost } from "utils";
import { DealerProps } from "interfaces";

import "./dealer.scss";

export const Dealer = ({
  phone,
  photo,
  email,
  name,
  position,
}: DealerProps) => {
  return (
    <div className="dealer_info_block">
      <h3>{position ? position : "Dealer Info"} </h3>
      <div className="dealer_info_block-wrapper">
        <div className="dealer_info_block-wrapper-photo">
          {photo && <Avatar src={toHost(photo)} alt="dealer" />}
          <div>
            <b>{name}</b>
            <i className="dealer-position">{position ? position : "Seller"}</i>
          </div>
        </div>
        <div className="dealer_info_block-wrapper-phone">
          <PhoneIcon /> <a href="/#">{phone}</a>
        </div>
        <div className="dealer_info_block-wrapper-email">
          <EmailIcon /> <a href="/#">{email}</a>
        </div>
      </div>
    </div>
  );
};

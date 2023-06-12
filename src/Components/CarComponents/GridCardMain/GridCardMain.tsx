import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import PlaceIcon from "@mui/icons-material/Place";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EvStationRoundedIcon from "@mui/icons-material/EvStationRounded";
import LocalGasStationRoundedIcon from "@mui/icons-material/LocalGasStationRounded";
import AirlineSeatReclineExtraRoundedIcon from "@mui/icons-material/AirlineSeatReclineExtraRounded";
import RadioButtonCheckedRoundedIcon from "@mui/icons-material/RadioButtonCheckedRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import { Link } from "react-router-dom";

import { RibbonFlag } from "../RibbonFlag";
import { CarRating } from "../CarRating";
import { CarCardProps } from "interfaces";
import { ImageWithSpinner } from "features/ImageWithSpinner";

import "./gridCardMain.scss";

export const GridCardMain = (props: CarCardProps) => {
  const {
    rating,
    id,
    user,
    carDetails,
    price,
    src,
    location,
    condition,
    top,
    label,
    carReview,
    onEditCar,
    canEdit,
    canDelete,
    onDeleteCar,
    isLiked,
    setLikedCar,
  } = props;

  const {
    Brand: brand,
    Model: model,
    Year: year,
    Seats: seats,
  } = props.details["Car Details"];
  const { "Fuel Type": engine, Drivetrain: driveUnit } = props.details.Engine;

  const EngineIcon =
    engine === "Electric" ? EvStationRoundedIcon : LocalGasStationRoundedIcon;
  return (
    <li className="grid_card_main">
      {top && <RibbonFlag label={label} />}

      <div className="grid_card_main-image">
        <ImageWithSpinner
          src={src[0]}
          alt={`${brand} ${model} ${year}`}
        />
        {canEdit ? (
          <button
            onClick={() => {
              if (onEditCar) onEditCar(id);
            }}
            className="edit_button"
          >
            <span className="user_btn">
              Edit <EditRoundedIcon />
            </span>
          </button>
        ) : null}
        {canDelete ? (
          <button
            className="delete_button"
            onClick={() => {
              onDeleteCar && onDeleteCar(id);
            }}
          >
            <span className="user_btn">
              Delete <RemoveRoundedIcon />
            </span>
          </button>
        ) : null}
        {user && (
          <button
            className="like_car"
            onClick={() => {
              setLikedCar && setLikedCar(id);
            }}
          >
            <FavoriteRoundedIcon
              sx={{ color: isLiked && isLiked(id) ? "red" : "grey" }}
            />
          </button>
        )}
      </div>
      <div className="grid_card_main-info">
        <span className="grid_card_main-info-condition">
          {condition ? "New" : "Used"}
        </span>
        <h3 className="car-name-grid">
          {brand} {model}
        </h3>
        <span className="grid_card_main-info-price">
          {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          <AttachMoneyRoundedIcon />
        </span>
        <span className="grid_card_main-info-location">
          <PlaceIcon />
          {location.state}
        </span>
        <div className="grid_card_main-info-block">
          <ul className="grid_card_main-info-block-list">
            <li className="year-grid">
              <CalendarMonthIcon />
              {year}
            </li>
            <li className="wheel-config-grid">
              <RadioButtonCheckedRoundedIcon />
              {driveUnit}
            </li>
            <li className={`fuel-type-grid`}>
              <EngineIcon />
              {engine}
            </li>
            <li className="seats-grid">
              <AirlineSeatReclineExtraRoundedIcon />
              {seats}
            </li>
          </ul>
        </div>
        <div className="grid_card_main-info-rating">
          <CarRating rating={rating.averageRating} size="small" />
          <span>({rating.ratingCount} Reviews)</span>
        </div>
        <Link to={`/${carDetails}/${id}`} className="active_link_car"></Link>
        <Link to={`/${carReview}/${id}`} className="active_link_review"></Link>
      </div>
    </li>
  );
};

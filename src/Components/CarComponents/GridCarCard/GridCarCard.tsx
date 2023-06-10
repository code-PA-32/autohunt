import { Link } from "react-router-dom";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import CompareArrowsRoundedIcon from "@mui/icons-material/CompareArrowsRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import PlaceIcon from "@mui/icons-material/Place";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EvStationRoundedIcon from "@mui/icons-material/EvStationRounded";
import LocalGasStationRoundedIcon from "@mui/icons-material/LocalGasStationRounded";
import AirlineSeatReclineExtraRoundedIcon from "@mui/icons-material/AirlineSeatReclineExtraRounded";
import RadioButtonCheckedRoundedIcon from "@mui/icons-material/RadioButtonCheckedRounded";

import { CarCardProps } from "interfaces";
import { RibbonFlag } from "../RibbonFlag";
import { CarRating } from "../CarRating";
import { ImageWithSpinner } from "features/ImageWithSpinner";

import "./gridCarCard.scss";

export const GridCarCard = (props: CarCardProps) => {
  const {
    condition,
    top,
    src,
    location,
    label,
    rating,
    id,
    user,
    style,
    price,
    carDetails,
    carReview,
    isInCompare,
    addCompare,
    deleteCompare,
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
    <li className="grid_card" style={style}>
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
      {top && <RibbonFlag label={label} />}
      <div className="grid_card-image">
        {addCompare && (
          <>
            <button
              className={
                isInCompare && isInCompare(id) ? "delete_car" : "add_car"
              }
              onClick={addCompare ? () => addCompare(id) : undefined}
            >
              {isInCompare && isInCompare(id) ? (
                <RemoveRoundedIcon sx={{ color: "white" }} />
              ) : (
                <AddRoundedIcon sx={{ color: "white" }} />
              )}
              <span>
                {isInCompare && isInCompare(id) ? "Remove" : "Compare"}
              </span>
            </button>

            <button
              className={
                isInCompare && isInCompare(id)
                  ? `link_to_compare down`
                  : "link_to_compare"
              }
            >
              <CompareArrowsRoundedIcon sx={{ color: "white" }} />
              <span>Compare Page</span>
              <Link to="/compare"></Link>
            </button>
          </>
        )}
        {deleteCompare && (
          <button
            className="delete_car compare"
            onClick={() => deleteCompare(id)}
          >
            <span>
              <RemoveRoundedIcon sx={{ color: "white" }} /> Delete
            </span>
          </button>
        )}

        <ImageWithSpinner src={src[0]} alt={`${brand} ${model} ${year}`} />
      </div>
      <div className="grid_card-info">
        <span className="grid_card-info-condition">
          {condition ? "New" : "Used"}
        </span>
        <h3 className="car-name-grid">
          {brand} {model}
        </h3>
        <span className="grid_card-info-price">
          {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          <AttachMoneyRoundedIcon />
        </span>
        <span className="grid_card-info-location">
          <PlaceIcon /> {location.state}
        </span>
        <div className="grid_card-info-block">
          <ul className="grid_card-info-block-list">
            <li className="year-grid">
              <CalendarMonthIcon /> {year}
            </li>
            <li className="wheel-config-grid">
              <RadioButtonCheckedRoundedIcon /> {driveUnit}
            </li>
            <li className={`fuel-type-grid`}>
              <EngineIcon /> {engine}
            </li>
            <li className="seats-grid">
              <AirlineSeatReclineExtraRoundedIcon /> {seats}
            </li>
          </ul>
        </div>
        <div className="grid_card-info-rating">
          <CarRating rating={rating.averageRating} size="medium" />
          <span>({rating.ratingCount} Reviews)</span>
        </div>

        <Link to={`/${carDetails}/${id}`} className="active_link_car"></Link>

        <Link to={`/${carReview}/${id}`} className="active_link_review"></Link>
      </div>
    </li>
  );
};

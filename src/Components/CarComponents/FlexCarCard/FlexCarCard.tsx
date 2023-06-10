import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import CompareArrowsRoundedIcon from "@mui/icons-material/CompareArrowsRounded";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import PlaceIcon from "@mui/icons-material/Place";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EvStationRoundedIcon from "@mui/icons-material/EvStationRounded";
import LocalGasStationRoundedIcon from "@mui/icons-material/LocalGasStationRounded";
import AirlineSeatReclineExtraRoundedIcon from "@mui/icons-material/AirlineSeatReclineExtraRounded";
import RadioButtonCheckedRoundedIcon from "@mui/icons-material/RadioButtonCheckedRounded";
import { Link } from "react-router-dom";

import { RibbonFlag } from "../RibbonFlag";
import { CarRating } from "../CarRating";
import { CarCardProps } from "interfaces";
import { ImageWithSpinner } from "features/ImageWithSpinner";

import "./flexCarCard.scss";

export const FlexCarCard = (props: CarCardProps) => {
  const {
    rating,
    src,
    label,
    location,
    condition,
    top,
    id,
    user,
    carDetails,
    price,
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
    <li className="car_result">
      {user && (
        <button
          className="lice_car"
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
      <div className="car_result-image">
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
              onClick={addCompare ? () => addCompare(id) : undefined}
            >
              <CompareArrowsRoundedIcon sx={{ color: "white" }} />
              <span>Compare Page</span>
              <Link to="/compare"></Link>
            </button>
          </>
        )}
        {deleteCompare && (
          <button className="delete_car" onClick={() => deleteCompare(id)}>
            <span>
              <RemoveRoundedIcon sx={{ color: "white" }} /> Delete
            </span>
          </button>
        )}
        <ImageWithSpinner src={src[0]} alt={`${brand} ${model} ${year}`} />
      </div>
      <div className="car_result-info">
        <span className="car_result-info-condition">
          {condition ? "New" : "Used"}
        </span>
        <h3 className="car-name">
          {brand} {model}
        </h3>
        <span className="car_result-info-price">
          {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
          <AttachMoneyRoundedIcon />
        </span>
        <span className="car_result-info-location">
          <PlaceIcon />
          {location.state}
        </span>
        <ul className="car_result-info-list">
          <li className="wheel_config">
            <RadioButtonCheckedRoundedIcon />
            {driveUnit}
          </li>
          <li className="year">
            <CalendarMonthIcon />
            {year}
          </li>
          <li className="fuel_type">
            <EngineIcon /> {engine}
          </li>
          <li className="seats">
            <AirlineSeatReclineExtraRoundedIcon /> {seats}
          </li>
        </ul>
        <div className="car_result-info-rating">
          <CarRating rating={rating.averageRating} size="small" />
          <span>({rating.ratingCount} Reviews)</span>
        </div>
        <Link to={`/${carDetails}/${id}`} className="active_link_car"></Link>

        <Link to={`/${carReview}/${id}`} className="active_link_review"></Link>
      </div>
    </li>
  );
};

import { SideInfoProps } from "interfaces/sideInfo";
import "./sideInfo.scss";
import { CarRating } from "Components/CarComponents/CarRating";
import { Link } from "react-router-dom";
import CompareArrowsRoundedIcon from "@mui/icons-material/CompareArrowsRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
export const SideInfo = ({
  battery,
  dimension,
  carDetails,
  rating,
  engine,
  price,
  flag,
  addDeleteCompare,
  id,
}: SideInfoProps) => {
  return (
    <div className="side_info_wrapper">
      <h2 className="side_info_wrapper-price">
        {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} $
      </h2>
      <div className="side_info_wrapper-info">
        <table className="side_info_wrapper-info-details">
          <thead>
            <tr>
              <th colSpan={2}>Car Details</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(carDetails)
              .filter(([key]) => key !== "_id")
              .map(([key, value], i) => (
                <tr key={i}>
                  <td>{key}</td>
                  <td>{value}</td>
                </tr>
              ))}
          </tbody>
        </table>

        <table className="car-engine side_info_wrapper-info-engine">
          <thead>
            <tr>
              <th colSpan={2}>Engine</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(engine)
              .filter(([key]) => key !== "_id")
              .map(([key, value], i) => (
                <tr key={i}>
                  <td>{key}</td>
                  <td>{value}</td>
                </tr>
              ))}
          </tbody>
        </table>

        {engine["Fuel Type"] === "Electric" ? (
          <table className="car-battery side_info_wrapper-info-battery">
            <thead>
              <tr>
                <th colSpan={2}>Battery and Charging</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(battery)
                .filter(([key]) => key !== "_id")
                .map(([key, value], i) => (
                  <tr key={i}>
                    <td>{key}</td>
                    <td>{value}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        ) : null}

        <table className="car-dimension side_info_wrapper-info-dimension">
          <thead>
            <tr>
              <th colSpan={2}>Dimension</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(dimension)
              .filter(([key]) => key !== "_id")
              .map(([key, value], i) => (
                <tr key={i}>
                  <td>{key}</td>
                  <td>{value}</td>
                </tr>
              ))}
          </tbody>
        </table>
        <div className="full_car_rating">
          <CarRating rating={rating.averageRating} size="medium" />
          <span>({rating.ratingCount}Reviews)</span>
          <Link to={`/article/reviews/${id}`}></Link>
        </div>
        <div className="compare_cars_button">
          <button
            className={flag ? "red" : "green"}
            onClick={() => addDeleteCompare(id)}
          >
            {flag ? <RemoveRoundedIcon /> : <AddRoundedIcon />}
            {flag ? "Remove Car" : "Compare Car"}
          </button>
          <button
            className={flag ? "to_compare_page active" : "to_compare_page"}
          >
            {flag && <CompareArrowsRoundedIcon />}
            <Link to={"/compare"} className="compare_link"></Link>
            <span>Compare Page</span>
          </button>
        </div>
      </div>
    </div>
  );
};

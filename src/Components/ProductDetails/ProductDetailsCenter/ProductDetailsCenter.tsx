import { ProductDetailsCenterProps } from "interfaces";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

import "./productDetailsCenter.scss";

export const ProductDetailsCenter = ({
  description,
  features,
  height,
  length,
  setHeight,
  setLength,
}: ProductDetailsCenterProps) => {
  return (
    <div className="full_car_center">
      <h3>Description</h3>
      <div className={`full_car_center-description ${height ? "active" : ""}`}>
        {description}
      </div>
      <div>
        <button className="show-more-btn" onClick={setHeight}>
          {height ? "Close" : "Read more"}
        </button>
      </div>
      <div className="full_car_center-futures">
        <h3>Features</h3>
        <ul
          className={`full_car_center-futures-list ${length ? "active" : ""}`}
        >
          {features.map((item, i) => {
            return (
              <li key={i} className="full_car_center-futures-list-item">
                <CheckBoxIcon /> {item}
              </li>
            );
          })}
        </ul>
        <div>
          <button
            onClick={setLength}
            className="
          show-more-btn"
          >
            {length ? "Close" : "Show more"}
          </button>
        </div>
      </div>
    </div>
  );
};

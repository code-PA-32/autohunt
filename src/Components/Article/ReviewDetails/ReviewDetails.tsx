import { CarRating } from "Components/CarComponents/CarRating";
import StarIcon from "@mui/icons-material/Star";
import { AvrCarRating } from "types";
import { Link } from "react-router-dom";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import "./reviewDetails.scss";
interface ReviewDetailsProps {
  avrRating: AvrCarRating;
  to?: boolean;
  length: number;
  id?: string;
}

export const ReviewDetails = ({
  avrRating,
  to,
  length,
  id,
}: ReviewDetailsProps) => {
  return (
    <div className="review_rating">
      <div className="star">
        <StarIcon sx={{ fontSize: 165 }} />
        {to ? (
          <Link to={`/article/reviews/${id}`}>
            {length} Reviews
            <OpenInNewRoundedIcon sx={{ fontSize: "inherit" }} />
          </Link>
        ) : (
          <span>{length} Reviews</span>
        )}
      </div>

      <div className="rating_list">
        {Object.entries(avrRating).map(([key, value]) => (
          <div key={key} className="rating">
            {key} <CarRating size="large" rating={value} />
          </div>
        ))}
      </div>
    </div>
  );
};

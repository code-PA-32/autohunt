import Rating from "@mui/material/Rating";
import { CarRatingProps } from "interfaces";

export const CarRating = ({ rating, size }: CarRatingProps) => {
  return (
    <Rating
      size={size}
      name="car rating"
      readOnly
      style={{ color: "white" }}
      value={rating || 0}
      max={5}
      precision={0.1}
      color="grey"
    />
  );
};

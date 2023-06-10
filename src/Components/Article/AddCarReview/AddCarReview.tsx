import { ChangeEvent, SyntheticEvent } from "react";
import { Rating } from "@mui/material";
import { TextInput } from "Components/SellCar";

import "./addCarReview.scss";

interface AddReviewProps {
  rating: {
    Comfort: number;
    Design: number;
    Performance: number;
    Price: number;
    Reliability: number;
  };
  setRating: (
    event: SyntheticEvent<Element, Event>,
    value: number | null
  ) => void;
  user: boolean;
  comment: string;
  setRevComment: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const AddCarReview = ({
  rating,
  setRating,
  comment,
  onSubmit,
  setRevComment,
  user,
}: AddReviewProps) => {
  return (
    <form
      style={{ color: "white" }}
      onSubmit={onSubmit}
      className="add_comment"
    >
      <h3>Add new comment</h3>
      <div className="rating_select">
        {Object.keys(rating).map((r) => (
          <div key={r}>
            <h4>{r}</h4>
            <Rating name={r} onChange={setRating} sx={{ color: "white" }} />
          </div>
        ))}
      </div>

      <TextInput
        id={"comment"}
        label={"Add a Comment"}
        className="comment"
        value={comment}
        required
        onChange={setRevComment}
        max={200}
        rows={4}
        multiline
      />
      <button type="submit" disabled={!user}>
        ADD POST
      </button>
    </form>
  );
};

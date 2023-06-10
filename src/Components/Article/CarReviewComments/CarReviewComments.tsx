import { Avatar } from "@mui/material";
import { CarRating } from "Components/CarComponents/CarRating";
import { Rating } from "types";
import { toHost } from "utils";

import "./carReviewComments.scss";

interface CarReviewCommentsProps {
  rating: Rating[];
  deleteComment: (id: string) => void;
  user: string;
}

export const CarReviewComments = ({
  rating,
  deleteComment,
  user,
}: CarReviewCommentsProps) => {
  return (
    <ul className="reviews_list">
      {rating.map((r) => (
        <li key={r.id} className="single_review">
          <Avatar src={toHost(r.photo)} />

          <div className="single_review-review_items">
            <span className="rev_date"> {r.date} </span>
            <span className="rev_name">{r.name}</span>
            <p className="rev_text">{r.rev}</p>

            <CarRating rating={r.stared} size={"small"} />
          </div>
          {r.userId === user && (
            <button
              className="delete_comment"
              onClick={() => deleteComment(r.id as string)}
            >
              DELETE
            </button>
          )}
        </li>
      ))}
    </ul>
  );
};

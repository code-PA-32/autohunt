import { TextInput } from "Components/SellCar";
import "./addAutohuntReview.scss";
import { ChangeEvent } from "react";

interface AddAutohuntReviewProps {
  text: string;
  user: boolean;
  setRevComment: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const AddAutohuntReview = ({
  text,
  setRevComment,
  onSubmit,
  user,
}: AddAutohuntReviewProps) => {
  return (
    <form name="add_review" onSubmit={onSubmit} className="autohunt_add_review">
      <h3>Add a Comment</h3>
      <TextInput
        id={"comment"}
        label={"Add a Comment"}
        className="comment"
        value={text}
        required
        onChange={setRevComment}
        max={200}
        rows={4}
        multiline
      />
      <button type="submit" disabled={!user}>
        Add
      </button>
    </form>
  );
};

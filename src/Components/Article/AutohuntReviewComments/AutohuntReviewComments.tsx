import { Comment } from "types";
import "./autohuntReviewComments.scss";
import { Avatar } from "@mui/material";
import { toHost } from "utils";
interface AutohuntReviewCommentsProps {
  comments: Comment[];
  user: string;
  onDeleteComment: (id: string) => void;
}

export const AutohuntReviewComments = ({
  comments,
  user,
  onDeleteComment,
}: AutohuntReviewCommentsProps) => {
  if (comments.length === 0) {
    return <div className="comments">No comments yet</div>;
  }

  return (
    <div className="comments_box">
      <h3>Comments</h3>
      <div className="comments">
        {comments.map((com) => (
          <div key={com._id} className="comment">
            <Avatar src={toHost(com.photo)} alt={com.name} />
            <div className="comment_text">
              <span>{com.name}</span>
              <p>{com.text}</p>

              {user && user === com.userId && (
                <button onClick={() => onDeleteComment(com._id)}>Delete</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

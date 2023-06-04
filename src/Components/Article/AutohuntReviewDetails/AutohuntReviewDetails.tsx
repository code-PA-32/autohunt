import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { red } from "@mui/material/colors";
import { AutohuntCarDetail } from "types";
import "./autohuntReviewDetails.scss";

interface AutohuntReviewDetailsProps
  extends Pick<
    AutohuntCarDetail,
    "intro" | "pros" | "cons" | "whatNew" | "img"
  > {}

export const AutohuntReviewDetails = ({
  intro,
  pros,
  cons,
  whatNew,
  img,
}: AutohuntReviewDetailsProps) => {
  return (
    <div className="our_review_details">
      <h3 className="our_review_details-sign">Intro</h3>
      <p className="our_review_details-description">{intro}</p>
      <img src={img} alt="car" />
      <h3 className="our_review_details-sign">Pros</h3>
      <div className="our_review_details-cons">
        {pros.map((item) => (
          <div className="cons_inner" key={item}>
            <DoneIcon color="primary" fontSize="small" />
            <span>{item}</span>
          </div>
        ))}
      </div>
      <h3 className="our_review_details-sign">Cons</h3>
      <div className="our_review_details-cons">
        {cons.map((item) => (
          <div key={item} className="cons_inner">
            <ClearIcon sx={{ color: red[700] }} fontSize="small" />
            <span>{item}</span>
          </div>
        ))}
      </div>
      <h3 className="our_review_details-sign">What's New</h3>
      <div className="our_review_details-cons">
        {whatNew.map((item) => (
          <div key={item} className="cons_inner">
            <FiberManualRecordIcon fontSize="small" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

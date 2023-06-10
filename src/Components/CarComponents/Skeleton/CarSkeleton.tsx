import Skeleton from "@mui/material/Skeleton";
import { Fragment } from "react";

import "./carSkeleton.scss";

interface CarSkeletonProps {
  length: number;
  className: string;
}

export const CarSkeleton = ({ length, className }: CarSkeletonProps) => {
  const carSkeleton = (
    <li className="car">
      <Skeleton variant="rectangular" className="img" />
      <Skeleton variant="rectangular" className="condition" />
      <Skeleton variant="text" className="text1" />
      <Skeleton variant="text" className="text2" />
      <Skeleton variant="text" className="text3" />
      <div className="data">
        <Skeleton variant="text" className="text4" />
        <Skeleton variant="text" className="text5" />
        <Skeleton variant="text" className="text6" />
        <Skeleton variant="text" className="text7" />
      </div>
      <Skeleton variant="rectangular" className="rating" />
    </li>
  );

  return (
    <ul className={className}>
      {Array(length)
        .fill(0)
        .map((_, i) => (
          <Fragment key={i}>{carSkeleton}</Fragment>
        ))}
    </ul>
  );
};

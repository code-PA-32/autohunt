import { RibbonFlagProps } from "interfaces";
import "./ribbonFlag.scss";

export const RibbonFlag = ({ label }: RibbonFlagProps) => {
  return (
    <div className="ribbon ribbon-top-left">
      <span>{label}</span>
    </div>
  );
};

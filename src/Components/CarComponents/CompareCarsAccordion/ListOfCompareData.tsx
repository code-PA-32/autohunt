import { Typography } from "@mui/material";
import { CardCars } from "types";

interface ListOfCompareDataProps {
  data: string;
  compare: CardCars[];
}

export const ListOfCompareData = ({
  data,
  compare,
}: ListOfCompareDataProps) => {
  const details = compare[0].details;
  const keysArr = Object.keys(details[data as keyof typeof details]).map(
    (k) => k
  );
  return (
    <>
      {keysArr.map((el, i) => {
        return (
          <Typography
            key={i}
            component={"span"}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <span className="element_name">{el}</span>
            <span className="compared_items">
              {compare.map((item, j) => {
                const value = item.details as { [key: string]: any };
                const displayValue = value[data][el] as boolean | string;
                return (
                  <i key={j} className="compared_info">
                    {displayValue === true
                      ? "yes"
                      : displayValue === false
                      ? "no"
                      : displayValue}
                  </i>
                );
              })}
            </span>
          </Typography>
        );
      })}
    </>
  );
};

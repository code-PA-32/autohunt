import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CardCars } from "types";

import "./compareCarsAccordion.scss";
import { ListOfCompareData } from "./ListOfCompareData";
import { CompareImages } from "./CompareImages";

interface CompareCarsAccordionProps {
  cars: CardCars[];
  viewerImg: boolean;
  setViewer: (index: number) => void;
  setCloseViewer: () => void;
  arrIndex: number;
  setArrayIndex: (index: number) => void;
  currentImage: number;
}

export const CompareCarsAccordion = ({
  cars,
  viewerImg,
  setViewer,
  setCloseViewer,
  arrIndex,
  setArrayIndex,
  currentImage,
}: CompareCarsAccordionProps) => {
  const keyObj: string[] = [];
  for (const key in cars[0]?.details) {
    if (key === "id") continue;
    keyObj.push(key);
  }

  return (
    <div className="compare_accordion">
      {cars &&
        keyObj.map((item, i) => {
          return (
            <Accordion key={i} sx={{ background: "#071620" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="accordion_list">
                  <span className="tabs_name">{item}</span>
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="list_items">
                <ListOfCompareData data={item} compare={cars} />
              </AccordionDetails>
            </Accordion>
          );
        })}
      <CompareImages
        cars={cars}
        viewerImg={viewerImg}
        setViewer={setViewer}
        setCloseViewer={setCloseViewer}
        arrIndex={arrIndex}
        setArrayIndex={setArrayIndex}
        currentImage={currentImage}
      />
    </div>
  );
};

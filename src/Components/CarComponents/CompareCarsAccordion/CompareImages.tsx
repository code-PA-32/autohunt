import { CardCars } from "types";
import "./compareCarsAccordion.scss";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ImageViewer from "react-simple-image-viewer";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { toHost } from "utils";
interface CompareCarsImages {
  cars: CardCars[];
  viewerImg: boolean;
  setViewer: (index: number) => void;
  setCloseViewer: () => void;
  arrIndex: number;
  setArrayIndex: (index: number) => void;
  currentImage: number;
}

export const CompareImages = ({
  cars,
  viewerImg,
  setViewer,
  setCloseViewer,
  arrIndex,
  setArrayIndex,
  currentImage,
}: CompareCarsImages) => {
  return (
    <>
      {cars.length !== 0 && (
        <Accordion sx={{ background: "#071620" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="accordion_list">
              <span className="tabs_name">Images</span>
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="list_items">
            <div className="compare_images">
              {cars.map((items, index) => (
                <div className="compare_images-images" key={index}>
                  {items.src.map((item, i) => {
                    return (
                      <div key={i}>
                        <img
                          src={toHost(item)}
                          width={170}
                          height={170}
                          style={{
                            objectFit: "cover",
                            borderRadius: 3,
                            cursor: "zoom-in",
                          }}
                          alt="cars"
                          onClick={() => {
                            setArrayIndex(index);
                            setViewer(i);
                          }}
                        />
                        {viewerImg && (
                          <ImageViewer
                            src={toHost(cars[arrIndex]?.src)}
                            currentIndex={currentImage}
                            onClose={setCloseViewer}
                            backgroundStyle={{
                              backgroundColor: "rgba(0,0,0,0.1)",
                            }}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </AccordionDetails>
        </Accordion>
      )}
    </>
  );
};

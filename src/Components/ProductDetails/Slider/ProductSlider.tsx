import { Fragment } from "react";
import "./productSlider.scss";
import { ProductSliderProps } from "interfaces";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import { toHost } from "utils";

export const ProductSlider = ({
  images,
  currentIndex,
  goToSlide,
  goNext,
  goPrev,
  views,
}: ProductSliderProps) => {
  return (
    <div className="full_car_slider">
      <div className="full_car_slider-right" onClick={goNext}>
        <ArrowForwardIosRoundedIcon fontSize="inherit" />
      </div>
      <div className="full_car_slider-left" onClick={goPrev}>
        <ArrowBackIosRoundedIcon fontSize="inherit" />
      </div>
      {views && (
        <div className="full_car_slider-views">
          <VisibilityIcon /> &nbsp;&nbsp; {views} Views
        </div>
      )}

      <div
        className="full_car_slider-slider"
        style={{ transform: `translate3d(${-currentIndex * 100}%, 0, 0)` }}
      >
        {images.map((image, index) => (
          <div
            className="full_car_slider-slider-slide"
            key={index}
            style={{ backgroundImage: `url(${toHost(image)})` }}
          ></div>
        ))}
      </div>
      <div className="slides_counter">
        {currentIndex + 1} / {images.length}
      </div>
      <div className="full_car_slider-dots">
        {images.map((slide, index) => (
          <Fragment key={index}>
            <img
              key={slide}
              src={toHost(slide)}
              alt="mini slide"
              onClick={() => goToSlide(index)}
              className={index === currentIndex ? "mini_active" : "mini"}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

import { useMainSlides } from "./useMainPageSlide";
import "./mainPageSlides.scss";

export const MainPageSlider = () => {
  const { index, setIndex, slides, status } = useMainSlides();

  return (
    <div className="slideshow" id="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {slides &&
          slides.map((item, index) => (
            <div
              className="slide"
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <h2 className="main-slide-description">{item.text}</h2>
            </div>
          ))}
      </div>

      <div className="slideshowDots">
        {slides &&
          slides.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
      </div>
    </div>
  );
};

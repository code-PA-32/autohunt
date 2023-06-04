import { ProductDetailsCenter } from "Components/ProductDetails/ProductDetailsCenter";
import { useProductDetail } from "./useProductDetails";
import { ProductSlider } from "Components/ProductDetails/Slider";
import { Dealer } from "Components/ProductDetails/Dealer";
import { SideInfo } from "Components/ProductDetails/SideInfo";
import { CarContactForm } from "features/CarContactForm";
import { GoogleMap } from "Components/ProductDetails/GoogleMap";
import { Credit } from "Components/ProductDetails/Credit/Credit";
import { useCreditCalc } from "./useCreditCalc";


export const ProductDetails = () => {
  const {
    product: { src, views, description, dealer, details, price, location, id },
    goNext,
    goPrev,
    goToSlide,
    currentIndex,
    features,
    height,
    rating,
    length,
    onSetDescriptionHeight,
    onSetFeaturesLength,
    handleAddCompare,
    flag,
  } = useProductDetail();

  const { months, setMonth, updateInputData, payment, pay, rate, month } =
    useCreditCalc(price);

  return (
    <>
      <ProductSlider
        views={views}
        currentIndex={currentIndex}
        images={src}
        goNext={goNext}
        goPrev={goPrev}
        goToSlide={goToSlide}
      />
      <SideInfo
        flag={flag!}
        id={id}
        addDeleteCompare={handleAddCompare}
        engine={details.Engine}
        battery={details["Battery and Charging"]}
        dimension={details.Dimension}
        carDetails={details["Car Details"]}
        price={price}
        rating={rating}
      />
      <ProductDetailsCenter
        description={description}
        height={height}
        length={length}
        setHeight={onSetDescriptionHeight}
        setLength={onSetFeaturesLength}
        features={features}
      />
      <Dealer {...dealer} />
      <CarContactForm />
      <GoogleMap {...location} googleMaps={window.google.maps} />
      <Credit
        price={price}
        rate={rate}
        updateInputData={updateInputData}
        months={months}
        setMonth={setMonth}
        month={month}
        pay={pay}
        toPay={payment}
      />
    </>
  );
};

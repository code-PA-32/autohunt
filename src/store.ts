import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { recommendedCarsReducer } from "features/RecommendedCars/recommendedCarsSlice";
import { compareReducer } from "features/CompareCars/compareCarsSlice";
import { filterReducer } from "features/MainPageFilters/carFiltersSlice";
import { dataFilter } from "features/MainPageFilters/carFiltersDataSlice";
import { sliderReducer } from "features/MainPageSlider/mainPageSliderSlice";
import { productDetailReducer } from "features/ProductDetails/productDetailsSlice";
import { carListReducer } from "features/SearchCarList/searchCarListSlice";
import { sellCarReducer } from "features/SellCar/sellCarSlice";
import { currentUserReducer } from "features/User/userSlice";
import { userChatReducer } from "features/User/UserChats/userChatsSlice";
import { userCarsReducer } from "features/User/UserCars/userCarsSlice";
import { carReviewsReducer } from "features/CarReviews/carReviewsSlice";
import { carReviewDetailsReducer } from "features/CarReviewDetails/carReviewDetailsSlice";
import { autohuntReviewsReducer } from "features/AutohuntReviews/autohuntReviewsSlice";
import { autohuntCarDetailReducer } from "features/AutohuntCarDetail/autohuntCarDetailSlice";
import { newsReducer } from "features/MainPageNews/mainPageNewsSlice";
import { mainPageAutohuntReviewReducer } from "features/MainPageAutohuntReview/mainPageAutohuntReviewSlice";
import { newsPageReducer } from "features/News/newsSlice";
import { newsInfoReducer } from "features/NewsInfo/newsInfoSlice";
import { newsFiltersReducer } from "features/News/newsFilterSlice";
import { userMessagesReducer } from "features/User/UserChats/userMessagesSlice";
import { mainPageLogosReducer } from "features/MainPageLogos/mainPageLogosSlice";

export const store = configureStore({
  reducer: {
    recommended: recommendedCarsReducer,
    compare: compareReducer,
    filter: filterReducer,
    filterData: dataFilter,
    slides: sliderReducer,
    product: productDetailReducer,
    carList: carListReducer,
    sellCar: sellCarReducer,
    currentUser: currentUserReducer,
    userChats: userChatReducer,
    userCars: userCarsReducer,
    reviewCars: carReviewsReducer,
    carReviewDetails: carReviewDetailsReducer,
    autohuntReviews: autohuntReviewsReducer,
    autohuntCarDetails: autohuntCarDetailReducer,
    news: newsReducer,
    mainReviews: mainPageAutohuntReviewReducer,
    newsPage: newsPageReducer,
    newsInfo: newsInfoReducer,
    newsFilter: newsFiltersReducer,
    userMessages: userMessagesReducer,
    pageLogos: mainPageLogosReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

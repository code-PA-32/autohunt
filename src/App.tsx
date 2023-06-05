import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  SellCarPage,
  Main,
  SearchResults,
  ProductDetailsPage,
  UserCars,
  NewCars,
  Login,
  SignUpPage,
  UserPage,
  UserLikedCarsPage,
  UserCarsPage,
  ArticlePage,
  CarReviewsPage,
  AutohuntReviewsPage,
  AutohuntCarDetailsPage,
  NewsPage,
  NewsInfoPage,
  MessagesPage,
} from "pages";
import { Breadcrumb } from "features/BreadCrumbs";
import { CompareCars } from "pages/CompareCars";
import { HeaderContainer } from "features/Header";
import { Scroll } from "features/Scroll";
import { Arrow } from "features/Arrow";
import { UserChatsPage } from "pages/UserChatsPage/UserChatsPage";
import { CarReviewDetailsPage } from "pages/CarReviewDetailsPage/CarReviewDetailsPage";
import Footer from "Components/Footer/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Scroll />
        <Arrow />
        <HeaderContainer />
        <Breadcrumb />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/search-results/:id" element={<ProductDetailsPage />} />
          <Route path="/search-results" element={<SearchResults />} />
          <Route path="/new-cars" element={<NewCars />} />
          <Route path="/used-cars" element={<UserCars />} />
          <Route path="/sell" element={<SellCarPage />} />
          <Route path="/compare" element={<CompareCars />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/sign-up" element={<SignUpPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/user/fav" element={<UserLikedCarsPage />} />
          <Route path="/user/cars" element={<UserCarsPage />} />
          <Route path="/user/messages" element={<UserChatsPage />} />
          <Route path="/user/messages/:id" element={<MessagesPage />} />
          <Route path="/article" element={<ArticlePage />} />
          <Route path="/article/reviews" element={<CarReviewsPage />} />
          <Route
            path="/article/reviews/:carId"
            element={<CarReviewDetailsPage />}
          />
          <Route path="/article/autohunt" element={<AutohuntReviewsPage />} />
          <Route
            path="/article/autohunt/:id"
            element={<AutohuntCarDetailsPage />}
          />
          <Route path="/article/news" element={<NewsPage />} />
          <Route path="/article/news/:id" element={<NewsInfoPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;

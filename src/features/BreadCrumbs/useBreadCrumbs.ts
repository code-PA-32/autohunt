import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { autohuntCarDetailsSelector } from "features/AutohuntCarDetail/autohuntDetailSelector";
import { carReviewDetailsSelector } from "features/CarReviewDetails/carReviewDetailsSelector";
import { newsInfoSelector } from "features/NewsInfo/newsInfoSelector";
import { productDetailsSelector } from "features/ProductDetails/productDetailsSelector";
import { userMessagesSelector } from "features/User/UserChats/userMessagesSelector";

export const useBreadCrumbs = () => {
  const { product } = useSelector(productDetailsSelector);
  const { id: carId, details } = useSelector(carReviewDetailsSelector).car;
  const { id: autoId, car } = useSelector(autohuntCarDetailsSelector).car;
  const { id: newsID, title } = useSelector(newsInfoSelector).newsInfo;
  const { messages } = useSelector(userMessagesSelector);
  const { id } = product;
  const { Brand, Model } = product.details["Car Details"];
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const chatId = messages.length !== 0 && messages[0].chatId;

  const breadcrumbNameMap: { [key: string]: string } = {
    "/search-results": "Search Results",
    "/sell": "Sell",
    [`/search-results/${id}`]: `${Brand} ${Model}`,
    "/compare": "Compare",
    "/new-cars": "New Cars",
    "/used-cars": "Used Cars",
    "/login": "Login",
    "/login/sign-up": "Registration",
    "/user": "Profile",
    "/user/cars": "Cars",
    "/user/fav": "Liked Cars",
    "/user/user-list": "Users",
    "/user/messages": "Chat",
    [`/user/messages/${chatId}`]: "Messages",
    "/article": "Article",
    "/article/reviews": "Car Review",
    [`/article/reviews/${carId}`]: `${details.brand} ${details.model}`,
    [`/article/autohunt/${autoId}`]: car,
    "/article/autohunt": "Autohunt Reviews",
    "/article/news": "News",
    [`/article/news/${newsID}`]: title,
  };

  const breadClass = (location: string) => {
    let clazz = "";
    switch (location) {
      case "/compare":
        return (clazz = "compare");
      case `/search-results/${id}`:
        return (clazz = "details");
      case "/article":
        return (clazz = "details");
      default:
        return clazz;
    }
  };

  const clazz = breadClass(location.pathname);

  return {
    location,
    breadcrumbNameMap,
    pathnames,
    clazz,
  };
};

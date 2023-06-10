const BASE_URL = process.env.REACT_APP_BASE_URL;

export const CREATE_USER = BASE_URL + `api/users/signup`;

export const LOGIN_USER = BASE_URL + "api/users/login";

export const SLIDES_DATA = BASE_URL + "api/sliders/data";

export const FILTERS_DATA = BASE_URL + "api/filters/data";

export const RECOMMENDED_CARS_NEW = BASE_URL + "api/cars/new-cars";

export const RECOMMENDED_CARS_USED = BASE_URL + "api/cars/used-cars";

export const COMPARE_CARS = BASE_URL + "api/cars/compare-cars";

export const COMPARE_CARS_IDS = BASE_URL + "api/cars/compare-cars-byId";

export const ONE_PRODUCT = (id: string): string => BASE_URL + `api/cars/${id}`;

export const UPDATE_VIEWS = (id: string) =>
  BASE_URL + `api/cars/add-views/${id}`;

export const GET_CAR_LIST = (filters: string) =>
  BASE_URL + `api/cars/filtered-cars?${filters}`;

export const POST_CAR = BASE_URL + "api/cars/create-car";

export const CAR_IMAGES = BASE_URL + "api/cars/update-car";

export const GET_USERS_CAR = (id: string): string =>
  BASE_URL + `api/cars/user-cars/${id}`;

export const GET_USERS_CHATS = (id: string) =>
  BASE_URL + `api/users/get-users-chat-id/${id}`;

export const GET_USER_CHAT_INFO = (id: string) =>
  BASE_URL + `api/chats/get-users-chat-info/${id}`;

export const GET_CHAT_MESSAGES = (id: string) =>
  BASE_URL + `api/chats/get-chat-messages/${id}`;

export const SEND_CHAT_MESSAGE = BASE_URL + "api/chats/send-chat-message";

export const UPDATE_MESSAGES_STATUS =
  BASE_URL + "api/chats/update-messages-status";

export const GET_UNREAD_MESSAGES_LENGTH = (id: string) =>
  BASE_URL + `api/chats/load-unread-messages-length/${id}`;

export const GET_USER_LIKED_CARS = BASE_URL + "api/cars/user-liked-cars";

export const SET_LIKED_CARS = (id: string) =>
  BASE_URL + `api/users/update-user-cars/${id}`;

export const SET_USER_PHOTO = (id: string) =>
  BASE_URL + `api/users/update-user-photo/${id}`;

export const UPDATE_USER_DATA = (id: string) =>
  BASE_URL + `api/users/update-user-data/${id}`;

export const GET_CAR_TO_UPDATE = (id: string) =>
  BASE_URL + `api/cars/update-car-byId/${id}`;

export const GET_REVIEW_CARS = BASE_URL + "api/cars/car-reviews";

export const GET_REVIEW_DETAILS = (id: string) =>
  BASE_URL + `api/cars/car-reviews-details/${id}`;

export const ADD_CAR_REVIEW = BASE_URL + "api/cars/car-add-review";

export const DELETE_CAR_REVIEW = BASE_URL + "api/cars/car-delete-review";

export const GET_AUTOHUNT_REVIEWS = BASE_URL + "api/cars/autohunt-reviews";

export const GET_LIMIT_AUTOHUNT = BASE_URL + "api/cars/autohunt-limit-cars";

export const GET_AUTOHUNT_CAR_DETAILS = (id: string) =>
  BASE_URL + `api/cars/autohunt/${id}`;

export const ADD_AUTOHUNT_COMMENT = BASE_URL + "api/cars/autohunt-add-comment";

export const DELETE_AUTOHUNT_COMMENT =
  BASE_URL + "api/cars/autohunt-delete-comment";

export const GET_POPULAR_NEWS = BASE_URL + "api/news/popular-news";

export const GET_ALL_NEWS = BASE_URL + "api/news/get-all-news";

export const GET_NEWS_INFO = (id: string) =>
  BASE_URL + `api/news/news-info/${id}`;

export const ADD_NEW_COMMENT = BASE_URL + "api/news/add-news-comment";

export const DELETE_NEW_COMMENT = BASE_URL + "api/news/delete-news-comment";

export const GET_NEWS_TAGS = BASE_URL + "api/news/tags-list";

export const CREATE_UPDATE_CHAT = BASE_URL + "api/chats/post-chat-message";

export const GET_PAGE_LOGOS = BASE_URL + "api/logos/";

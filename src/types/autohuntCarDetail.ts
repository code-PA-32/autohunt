import { AvrCarRating } from "./cars";

export type Comment = {
  text: string;
  name: string;
  photo: string;
  userId: string;
  _id: string;
};

type Expert = {
  name: string;
  photo: string;
  phone: string;
  email: string;
};

export type AutohuntCarDetail = {
  car: string;
  id: string;
  reviewId: string;
  avrRating: AvrCarRating;
  length: number;
  price: string;
  video: string;
  img: string;
  intro: string;
  pros: string[];
  cons: string[];
  whatNew: string[];
  expert: Expert;
  comments: Comment[];
};

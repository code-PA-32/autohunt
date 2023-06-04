import { Dealer } from "./cars";
import { Comment } from "./autohuntCarDetail";

export type NewsMainCard = {
  id: string;
  time: string;
  title: string;
  image: string;
  text: string;
  expert: Dealer;
};

export type NewsPageCard = {
  id: string;
  time: string;
  title: string;
  image: string;
  text: string;
  tags: string[];
  length: number;
  expert: Dealer;
};

export type NewsInfo = {
  id: string;
  time: string;
  title: string;
  image: string;
  image2: string;
  text: string;
  text2: string;
  tags: string[];
  expert: Dealer;
  comments: Comment[];
};

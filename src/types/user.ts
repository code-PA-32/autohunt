export type User = {
  name: string;
  userId: string;
  password: string;
  email: string;
  isAdmin: boolean;
  phone: number;
  photo: string;
  chats?: Array<string>;
  likedCars?: Array<string>;
};

export type LoginUser = {
  password: string;
  email: string;
};

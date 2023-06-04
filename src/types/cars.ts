export type Rating = {
  id: string | number;
  name: string;
  date: number;
  photo: string;
  rev: string;
  stared: number;
  userId: string;
};

export type PostRating = {
  carId: string;
  name: string;
  date: number;
  photo: string;
  rev: string;
  stared: AvrCarRating;
  userId: string;
};

export type Dealer = {
  photo: string;
  name: string;
  phone: number | string;
  email: string;
  position?: string;
};

export type CarDetails = {
  Brand: string;
  Model: string;
  Condition: string;
  Year: string;
  ["Body Type"]: string;
  Seats: string;
  ["Exterior Color"]: string;
};

export type Engine = {
  ["Fuel Type"]: string;
  Mileage: string;
  Transmission: string;
  Drivetrain: string;
  Power: string;
  ["Engine Capacity"]: string;
};

export type Battery = {
  ["Battery Capacity"]: string;
  ["Charge Port"]: string;
  ["Charge Time (0->Full)"]: string;
};

export type Dimension = {
  Length: string;
  Width: string;
  Height: string;
  ["Cargo Volume"]: string;
};

export type Futures = {
  ["Power Steering"]: boolean;
  AC: boolean;
  Alarm: boolean;
  Bluetooth: boolean;
  ["Heated Seats"]: boolean;
  WiFi: boolean;
  ["Cruise Control"]: boolean;
  ["Front Parking Sensor"]: boolean;
  ["Rear Parking Sensor"]: boolean;
  ["Roof Rack"]: boolean;
  ["Power Windows"]: boolean;
  Sunroof: boolean;
  ["USB Port"]: boolean;
  ["Sound System"]: boolean;
  ["Memory Seat"]: boolean;
  ["Camera 360"]: boolean;
};

export type ReviewsComments = {
  id: number | string;
  text: string;
  name: string;
  photo: string;
};

export type Reviews = {
  price: string;
  video: string;
  img: string;
  intro: string;
  pros: string[];
  cons: string[];
  whatNew: string[];
  expert: {
    name: string;
    photo: string;
    phone: string;
    email: string;
  };
  comments: ReviewsComments[] | null;
};

export type Location = {
  state: string;
  city: string;
  coords: {
    lat: number;
    lng: number;
  };
};

export type Cars = {
  condition: boolean;
  top: boolean;
  price: number;
  label: string | "Featured";
  location: Location;
  saleId: string;
  views: number;
  src: string[];
  id: string;
  description: string;
  rating: {
    ratingCount: number;
    averageRating: number;
  };
  dealer: Dealer;
  details: {
    ["Car Details"]: CarDetails;
    Engine: Engine;
    ["Battery and Charging"]: Battery;
    Futures: Futures;
    Dimension: Dimension;
  };
  reviews: Reviews[] | [];
};

export type CardCars = {
  id: string;
  condition: boolean;
  top: boolean;
  label: string;
  price: number;
  location: {
    state: string;
    city: string;
    coords: {
      lat: number;
      lng: number;
    };
  };
  src: Array<string>;
  details: {
    ["Car Details"]: CarDetails;
    Engine: Engine;
    ["Battery and Charging"]: Battery;
    Futures: Futures;
    Dimension: Dimension;
  };
  rating: {
    ratingCount: number;
    averageRating: number;
  };
};

export type AvrCarRating = {
  Comfort: number;
  Design: number;
  Performance: number;
  Price: number;
  Reliability: number;
};

export type CarReview = {
  id: string;
  src: string[];
  price: number;
  avrRating: AvrCarRating;
  rating: Rating[];
  details: {
    brand: string;
    model: string;
  };
};

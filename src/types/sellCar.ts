export type SellCarFeatures = {
  "Camera 360": boolean;
  "Power Steering": boolean;
  "Power Windows": boolean;
  "USB Port": boolean;
  "Rear Parking Sensor": boolean;
  "Front Parking Sensor": boolean;
  AC: boolean;
  Alarm: boolean;
  Bluetooth: boolean;
  WiFi: boolean;
  "Heated Seats": boolean;
  "Cruise Control": boolean;
  "Memory Seat": boolean;
  Sunroof: boolean;
  "Roof Rack": boolean;
  "Sound System": boolean;
};

export type SellCar = {
  condition: boolean;
  id: string;
  top: boolean;
  price: number;
  label: string;
  location: {
    state: string;
    city: string;
    coords: {
      lat: number;
      lng: number;
    };
  };
  views: number;
  src: Array<string>;
  saleId: string;
  description: string;
  rating: [];
  dealer: string;
  reviews: object;
  details: {
    Engine: {
      "Engine Capacity": string;
      Transmission: string;
      "Fuel Type": string;
      Drivetrain: string;
      Mileage: string;
      Power: string;
    };
    Dimension: {
      Length: string;
      Height: string;
      "Cargo Volume": string;
      Width: string;
    };
    "Battery and Charging": {
      "Charge Time (0->Full)": string;
      "Charge Port": string;
      "Battery Capacity": string;
    };
    Futures: SellCarFeatures;
    "Car Details": {
      Brand: string | null;
      Model: string | null;
      Condition: string;
      Year: string;
      "Body Type": string;
      Seats: string;
      "Exterior Color": string;
    };
  };
};

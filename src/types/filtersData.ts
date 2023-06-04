export type FiltersData = {
  data: {
    brands: {
      [key: string]: string[];
    };
    features: {
      [key: string]: boolean;
    };
    locations: {
      [key: string]: string[];
    };
    colors: string[];
    bodyType: string[];
    years: string[];
    drive: string[];
    transmission: string[];
    fuelType: string[];
    batteryCapacity: string[];
    chargingTime: string[];
    chargingType: string[];
  };
};

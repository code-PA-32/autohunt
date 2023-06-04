import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { POST_CAR, CAR_IMAGES, GET_CAR_TO_UPDATE } from "config";
import { SellCar } from "types";
import { convertFileToBase64, dataURLtoFile } from "utils";
import axios from "axios";
import JSZip from "jszip";

export const postCar = createAsyncThunk(
  "sellcar/post",
  async (car: SellCar) => {
    try {
      const formData = new FormData();
      car.src.forEach((image) => {
        const file = dataURLtoFile(image, `${new Date().getTime()}`);
        formData.append("images", file);
      });
      const newCar = await axios.post(POST_CAR, { ...car, src: [] });
      const carId = await newCar.data.id;
      formData.append("carId", carId);
      return await axios.put(CAR_IMAGES, formData);
    } catch (e) {
      console.log(e);
    }
  }
);

export const getCarToUpdate = createAsyncThunk(
  "sellcar/getCarToUpdate",
  async (id: string) => {
    try {
      const response = await axios.get(GET_CAR_TO_UPDATE(id), {
        responseType: "arraybuffer",
      });
      const zipData = response.data;

      const zip = await JSZip.loadAsync(zipData);

      const carDataFile = zip.file("car-data.json");
      if (!carDataFile) {
        throw new Error("car-data.json not found in the zip file");
      }
      const carDataString = await carDataFile.async("string");
      const carData = JSON.parse(carDataString);

      const imageFiles = await Promise.all(
        Object.keys(zip.files)
          .filter((fileName) => /image-\d+\.jpg$/.test(fileName))
          .map(async (fileName) => {
            try {
              const imageFile = zip.file(fileName);
              if (!imageFile) {
                throw new Error(
                  `Image file ${fileName} not found in the zip file`
                );
              }
              const imageBuffer = await imageFile.async("arraybuffer");
              const file = new File([imageBuffer], fileName, {
                type: "image/jpeg",
              });

              const base64 = await convertFileToBase64(file);
              return base64;
            } catch (error) {
              console.log("Error during image extraction:", error);
              throw error;
            }
          })
      );

      console.log("Image files:", imageFiles);
      carData.src = imageFiles;
      console.log(carData);
      return carData;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

const initialState: SellCar = {
  saleId: "",
  id: "",
  condition: false,
  top: true,
  price: 0,
  label: "",
  location: {
    state: "",
    city: "",
    coords: {
      lat: 0,
      lng: 0,
    },
  },
  views: 1,
  src: [],
  description: "",
  rating: [],
  dealer: "",
  reviews: {},
  details: {
    Engine: {
      "Engine Capacity": "",
      Transmission: "",
      "Fuel Type": "",
      Drivetrain: "",
      Mileage: "",
      Power: "",
    },
    Dimension: {
      Length: "",
      Height: "",
      "Cargo Volume": "",
      Width: "",
    },
    "Battery and Charging": {
      "Charge Time (0->Full)": "-",
      "Charge Port": "-",
      "Battery Capacity": "-",
    },
    Futures: {
      "Camera 360": false,
      "Power Steering": false,
      "Power Windows": false,
      "USB Port": false,
      "Rear Parking Sensor": false,
      "Front Parking Sensor": false,
      AC: false,
      Alarm: false,
      Bluetooth: false,
      WiFi: false,
      "Heated Seats": false,
      "Cruise Control": false,
      "Memory Seat": false,
      Sunroof: false,
      "Roof Rack": false,
      "Sound System": false,
    },
    "Car Details": {
      Brand: "",
      Model: "",
      Condition: "Used",
      Year: "",
      "Body Type": "",
      Seats: "",
      "Exterior Color": "",
    },
  },
};

const sellCarSlice = createSlice({
  name: "sellcar",
  initialState,
  reducers: {
    setBrand: (state, action: PayloadAction<string>) => {
      state.details["Car Details"].Brand = action.payload;
    },
    setModel: (state, action: PayloadAction<string>) => {
      state.details["Car Details"].Model = action.payload;
    },
    setCondition: (state, action: PayloadAction<boolean>) => {
      state.condition = action.payload;
      state.details["Car Details"].Condition =
        action.payload === true ? "New" : "Used";
    },
    setPrice: (state, action: PayloadAction<string>) => {
      state.price = +action.payload;
    },
    setLabel: (state, action: PayloadAction<string>) => {
      state.label = action.payload;
    },
    setLocation: (state, action: PayloadAction<string>) => {
      state.location.state = action.payload;
    },
    setCity: (state, action: PayloadAction<string>) => {
      state.location.city = action.payload;
    },
    setYear: (state, action: PayloadAction<string>) => {
      state.details["Car Details"].Year = action.payload.toString();
    },
    setColor: (state, action: PayloadAction<string>) => {
      state.details["Car Details"]["Exterior Color"] = action.payload;
    },
    setEngine: (state, action: PayloadAction<string>) => {
      state.details.Engine["Fuel Type"] = action.payload;
    },
    setSeats: (state, action: PayloadAction<string>) => {
      state.details["Car Details"].Seats = action.payload;
    },
    setBody: (state, action: PayloadAction<string>) => {
      state.details["Car Details"]["Body Type"] = action.payload;
    },
    setTransmission: (state, action: PayloadAction<string>) => {
      state.details.Engine.Transmission = action.payload;
    },
    setSellImages: (state, action: PayloadAction<Array<string>>) => {
      state.src = action.payload;
    },
    setDriveUnit: (state, action: PayloadAction<string>) => {
      state.details.Engine.Drivetrain = action.payload;
    },
    setDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
    setFeatures: (state, action) => {
      state.details.Futures = action.payload;
    },
    setLength: (state, action: PayloadAction<string>) => {
      state.details.Dimension.Length = `${action.payload} mm`;
    },
    setWidth: (state, action: PayloadAction<string>) => {
      state.details.Dimension.Width = `${action.payload} mm`;
    },
    setHeight: (state, action: PayloadAction<string>) => {
      state.details.Dimension.Height = `${action.payload} mm`;
    },
    setCargo: (state, action: PayloadAction<string>) => {
      state.details.Dimension["Cargo Volume"] = `${action.payload} l`;
    },
    setMiles: (state, action: PayloadAction<string>) => {
      state.details.Engine.Mileage = `${action.payload} km`;
    },
    setEngineCapacity: (state, action: PayloadAction<string>) => {
      state.details.Engine["Engine Capacity"] = `${action.payload} cc`;
    },
    setEnginePower: (state, action: PayloadAction<string>) => {
      state.details.Engine.Power = `${action.payload} hp`;
    },
    setBatteryCap: (state, action) => {
      state.details["Battery and Charging"]["Battery Capacity"] =
        action.payload;
    },
    setChargeTime: (state, action) => {
      state.details["Battery and Charging"]["Charge Time (0->Full)"] =
        action.payload;
    },
    setChargeType: (state, action) => {
      state.details["Battery and Charging"]["Charge Port"] = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(postCar.pending, () => {
        console.log("creating car");
      })
      .addCase(postCar.fulfilled, () => initialState)
      .addCase(getCarToUpdate.pending, (state) => {
        console.log("pending");
      })
      .addCase(getCarToUpdate.fulfilled, (state, action) => {
        state.saleId = action.payload.saleId;
        state.id = action.payload.id;
        state.condition = action.payload.condition;
        state.top = action.payload.top;
        state.price = action.payload.price;
        state.label = action.payload.label;
        state.location = action.payload.location;
        state.views = action.payload.views;
        state.src = action.payload.src;
        state.description = action.payload.description;
        state.rating = action.payload.rating;
        state.dealer = action.payload.dealer;
        state.reviews = action.payload.reviews;
        state.details = action.payload.details;
      })
      .addCase(getCarToUpdate.rejected, (state, action) => {
        console.log("error");
        console.log(action.payload);
      });
  },
});

export const sellCarReducer = sellCarSlice.reducer;

export const {
  setBrand,
  setModel,
  setBody,
  setCity,
  setColor,
  setCondition,
  setDescription,
  setDriveUnit,
  setEngine,
  setFeatures,
  setSellImages,
  setLabel,
  setLocation,
  setEnginePower,
  setMiles,
  setPrice,
  setSeats,
  setTransmission,
  setEngineCapacity,
  setYear,
  setCargo,
  setHeight,
  setLength,
  setWidth,
  setBatteryCap,
  setChargeTime,
  setChargeType,
} = sellCarSlice.actions;

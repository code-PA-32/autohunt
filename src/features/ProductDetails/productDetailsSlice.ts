import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { ONE_PRODUCT, UPDATE_VIEWS } from "config";
import { Cars, Status } from "types";

export const getOneProduct = createAsyncThunk<
  { data: Cars },
  string,
  {
    state: { product: ProductDetailsSlice };
  }
>(
  "car/getOneCar",
  async (id: string) => {
    return await axios.get(ONE_PRODUCT(id));
  },
  {
    condition: (_, { getState }) => {
      const {
        product: { status },
      } = getState();
      if (status === "loading") {
        return false;
      }
    },
  }
);

export const updateCarViews = createAsyncThunk<null, string>(
  "car/updateViews",
  async (id: string) => {
    return await axios.patch(UPDATE_VIEWS(id));
  }
);

type ProductDetailsSlice = {
  status: Status;
  car: Cars;
};

const initialState: ProductDetailsSlice = {
  status: "idle",
  car: {
    saleId: "0",

    condition: false,
    top: false,
    price: 1,
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
    id: "1000",
    description: "",
    rating: {
      ratingCount: 0,
      averageRating: 0,
    },
    dealer: {
      name: "",
      phone: 0,
      photo: "",
      email: "",
    },
    reviews: [
      {
        price: "",
        video: "",
        img: "",
        intro: "",
        pros: [],
        cons: [],
        whatNew: [],
        expert: {
          name: "",
          photo: "",
          phone: "",
          email: "",
        },
        comments: null,
      },
    ],
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
        "Charge Time (0->Full)": "",
        "Charge Port": "",
        "Battery Capacity": "",
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
        Condition: "",
        Year: "",
        "Body Type": "",
        Seats: "",
        "Exterior Color": "",
      },
    },
  },
};

const productDetailSlice = createSlice({
  name: "car",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getOneProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getOneProduct.rejected, (state) => {
        state.status = "error";
      })
      .addCase(
        getOneProduct.fulfilled,
        (state, action: PayloadAction<{ data: Cars }>) => {
          state.status = "idle";
          state.car = action.payload.data;
        }
      );
  },
});

export const productDetailReducer = productDetailSlice.reducer;

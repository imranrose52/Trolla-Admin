import { combineReducers } from "redux";
import userSlice from "./slice/user-slice";
import loaderSlice from "./slice/loader-slice";
import materialSlice from "./slice/material-slice";
import vehicleTypeSlice from "./slice/vehicle-type-slice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import loadSlice from "./slice/load-slice";
import dashboardSlice from "./slice/dashboard-slice";
import transporterSlice from "./slice/transporter-slice";
import driverSlice from "./slice/driver-slice";
import vehicleSlice from "./slice/vehicle-slice";

import quotesSlice from "./slice/quotes-slice";

import confirmSlice from "./slice/confirm-slice";

import completeTripSlice from "./slice/complete-trip-slice";

const userConfig = {
  key: "user",
  version: 1,
  storage,
  keyPrefix: "",
  blacklist: ["errorMessage"],
};
const loaderConfig = {
  key: "loader",
  version: 1,
  storage,
  keyPrefix: "",
  blacklist: ["errorMessage", "error", "loader"],
};

const transporterConfig = {
  key: "transporter",
  version: 1,
  storage,
  keyPrefix: "",
  blacklist: ["errorMessage", "error", "transporter"],
};
const driverConfig = {
  key: "driver",
  version: 1,
  storage,
  keyPrefix: "",
  blacklist: ["errorMessage", "error", "driver"],
};

// vehicle config-----------
const vehicleConfig = {
  key: "vehicle",
  version: 1,
  storage,
  keyPrefix: "",
  blacklist: ["errorMessage", "error", "vehicle"],
};

// quote config-----------
const quoteConfig = {
  key: "quote",
  version: 1,
  storage,
  keyPrefix: "",
  blacklist: ["errorMessage", "error", "quote"],
};

// booking confirm config-----------
const confirmConfig = {
  key: "confirm",
  version: 1,
  storage,
  keyPrefix: "",
  blacklist: ["errorMessage", "error", "confirm"],
};

// booking complete trip config-----------
const completeConfig = {
  key: "complete",
  version: 1,
  storage,
  keyPrefix: "",
  blacklist: ["errorMessage", "error", "complete"],
};
const materialConfig = {
  key: "material",
  version: 1,
  storage,
  keyPrefix: "",
  blacklist: ["errorMessage", "error", "material"],
};
const vehicleTypeConfig = {
  key: "vehicle-type",
  version: 1,
  storage,
  keyPrefix: "",
  blacklist: ["errorMessage", "error", "vehicle_type"],
};
const loadConfig = {
  key: "load",
  version: 1,
  storage,
  keyPrefix: "",
  blacklist: ["errorMessage", "error", "load"],
};
const dashboardConfig = {
  key: "dashboard",
  version: 1,
  storage,
  keyPrefix: "",
  blacklist: ["errorMessage", "error", "load"],
};

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: ["user"],
};

const rootReducer = combineReducers({
  user: persistReducer(userConfig, userSlice),
  loader: persistReducer(loaderConfig, loaderSlice),
  material: persistReducer(materialConfig, materialSlice),
  vehicle_type: persistReducer(vehicleTypeConfig, vehicleTypeSlice),
  load: persistReducer(loadConfig, loadSlice),
  dashboard: persistReducer(dashboardConfig, dashboardSlice),
  transporter: persistReducer(transporterConfig, transporterSlice),
  driver: persistReducer(driverConfig, driverSlice),

  vehicle: persistReducer(vehicleConfig, vehicleSlice),

  quote: persistReducer(quoteConfig, quotesSlice),
  confirm: persistReducer(confirmConfig, confirmSlice),

  complete_trip: persistReducer(completeConfig, completeTripSlice),
});

export default persistReducer(persistConfig, rootReducer);

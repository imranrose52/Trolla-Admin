/** @format */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// import axios from "axios";
import rootClient from "../../config/rootClient";

const initialState = {
  isloading: false,
  error: false,
  errorMessage: null,
  loader_count: 0,
  load_count: 0,
  driver_count: 0,
  transporter_count: 0,
  vehicle_count: 0,
  trip_close_count: 0,
};

export const getLoaderCount = createAsyncThunk("get-loader-count", async () => {
  let response = await rootClient.get("api/v1/admin/loader-count");
  // console.log("-------------------------", response.data.loaders);
  return response.data.count;
});

export const getLoadCount = createAsyncThunk("get-load-count", async () => {
  let response = await rootClient.get("api/v1/admin/load-count");
  // console.log("-------------------------", response.data.loaders);
  return response.data.count;
});

// get driver count--------------------

export const getDriverCount = createAsyncThunk("get-driver-count", async () => {
  let response = await rootClient.get("api/v1/admin/driver-count");
  // console.log("-------------------------", response.data.loaders);
  return response.data.count;
});

// get transporter count------------

export const getTransporterCount = createAsyncThunk(
  "dashboard-transporter-count",
  async () => {
    let response = await rootClient.get("api/v1/admin/transporter-count");
    // console.log("-------------------------", response.data.loaders);
    return response.data.count;
  }
);

// vehicle count----------
export const getVehicleCount = createAsyncThunk(
  "dashboard-vehicle-count",
  async () => {
    let response = await rootClient.get("api/v1/admin/vehicle-count");
    // console.log("-------------------------", response.data.loaders);
    return response.data.count;
  }
);

// close trip count-----------------
export const getCloseTripCount = createAsyncThunk(
  "dashboard-trip-count",
  async () => {
    let response = await rootClient.get("api/v1/admin/close-trip-count");
    // console.log("-------------------------", response.data.loaders);
    return response.data.count;
  }
);

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    // getCount(state, action) {
    //   getLoadCount(), getLoadCount();
    // },
  },

  extraReducers: {
    // get loader count -------------------------------------------
    [getLoaderCount.fulfilled]: (state, action) => {
      state.loader_count = action.payload;
    },
    [getLoaderCount.rejected]: (state, action) => {
      state.isloading = false;
      state.errorMessage = "Something Wrong";
    },
    [getLoaderCount.pending]: (state) => {
      state.isloading = true;
    },
    // get load count -------------------------------------------
    [getLoadCount.fulfilled]: (state, action) => {
      state.load_count = action.payload;
      state.error = false;
    },
    [getLoadCount.rejected]: (state, action) => {
      state.isloading = false;
      state.error = true;
      state.errorMessage = "Something Wrong";
    },
    [getLoadCount.pending]: (state) => {
      state.isloading = true;
    },

    // get driver count----------------
    [getDriverCount.fulfilled]: (state, action) => {
      state.driver_count = action.payload;
    },

    // get transporter count-------
    [getTransporterCount.fulfilled]: (state, action) => {
      state.transporter_count = action.payload;
    },

    // reducer vehicle count-------
    [getVehicleCount.fulfilled]: (state, action) => {
      state.vehicle_count = action.payload;
    },

    // close trip count--------------
    [getCloseTripCount.fulfilled]: (state, action) => {
      state.trip_close_count = action.payload;
    },

    // // delete loader --------------------------------------
    // [deleteLoader.fulfilled]: (state, { payload: id }) => {
    //   state.loaders = state.loaders.filter((item) => item._id !== id);
    // },

    // [deleteLoader.rejected]: (state, action) => {
    //   state.errorMessage = true;
    //   state.isloading = false;
    // },
    // // change loader status  --------------------------------------
    // [changeStatus.fulfilled]: (state, action) => {
    //   const { id, status } = action.payload;

    //   state.loaders = state.loaders.map((item) =>
    //     item._id === id ? { ...item, status } : item
    //   );
    //   state.loader = { ...state.loader, status };
    // },

    // [changeStatus.rejected]: (state, action) => {
    //   state.errorMessage = true;
    //   state.isloading = false;
    // },
  },
});
export const {} = dashboardSlice.actions;
export default dashboardSlice.reducer;

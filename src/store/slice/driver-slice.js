import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// import axios from "axios";
import rootClient from "../../config/rootClient";

const initialState = {
  isloading: false,
  error: false,
  errorMessage: null,
  drivers: [{}],
  driver: "",
  // driver: {
  //   driver_name: "",
  //   transporter: "",
  //   mobile_primary: "",
  //   email: "",
  //   mobile_secondary: "",
  //   address: "",
  // },
};

// get all transporters------------------------
export const getAll = createAsyncThunk("driver-get-all", async () => {
  let response = await rootClient.get("api/v1/admin/drivers");
  // console.log("-------------------------", response.data.loaders);
  return response.data.driver;
});

// create transporter --------------------
export const createDriver = createAsyncThunk(
  "loader-create-new",
  async (body) => {
    let response = await rootClient.post("api/v1/admin/drivers", body);

    return response.data.driver;
  }
);

// delete Driver-----------------------

export const deleteDriver = createAsyncThunk("driver-delete", async (id) => {
  let response = await rootClient.delete(`api/v1/admin/drivers/${id}`);

  return id;
});

// transporter status change update-------------
export const changeStatus = createAsyncThunk("driver-update", async (data) => {
  const { id, status } = data;
  let response = await rootClient.put(`api/v1/admin/drivers/${id}`, {
    status,
  });
  // console.log(response.data);
  return data;
});

const driverSlice = createSlice({
  name: "driver",
  initialState,
  reducers: {
    getDriver(state, action) {
      state.driver = state.drivers.find((item) => item._id === action.payload);
    },
    addDriver(state, action) {
      // state.loaders = [action.payload, ...state.loaders];
      state.drivers.push(action.payload);
    },
    // setTransporter(state, action) {
    //   state.driver.transporter = action.payload;
    // },
    // setDriverName(state, action) {
    //   state.driver.driver_name = action.payload;
    // },
    // setMobilePrimary(state, action) {
    //   state.driver.mobile_primary = action.payload;
    // },
    // setMobileSecondary(state, action) {
    //   state.driver.mobile_secondary = action.payload;
    // },
    // setEmail(state, action) {
    //   state.driver.email = action.payload;
    // },
    // setAddress(state, action) {
    //   state.driver.address = action.payload;
    // },
  },

  extraReducers: {
    // get transporter-------------------------------------------
    [getAll.fulfilled]: (state, action) => {
      state.drivers = action.payload;
    },
    [getAll.rejected]: (state, action) => {
      state.isloading = false;
      state.errorMessage = "Something Wrong";
    },
    [getAll.pending]: (state) => {
      state.isloading = true;
    },
    // create  transporter-------------------------------------------
    [createDriver.fulfilled]: (state, action) => {
      state.drivers = [action.payload, ...state.drivers];
      state.error = false;
    },
    [createDriver.rejected]: (state, action) => {
      state.isloading = false;
      state.error = true;
      state.errorMessage = "User Exist !";
    },
    [createDriver.pending]: (state) => {
      state.isloading = true;
    },
    // delete driver --------------------------------------
    [deleteDriver.fulfilled]: (state, { payload: id }) => {
      state.drivers = state.drivers.filter((item) => item._id !== id);
    },

    [deleteDriver.rejected]: (state, action) => {
      state.errorMessage = true;
      state.isloading = false;
    },
    // change loader status  --------------------------------------
    [changeStatus.fulfilled]: (state, action) => {
      const { id, status } = action.payload;

      state.drivers = state.drivers.map((item) =>
        item._id === id ? { ...item, status } : item
      );
      state.driver = { ...state.driver, status };
    },

    [changeStatus.rejected]: (state, action) => {
      state.errorMessage = true;
      state.isloading = false;
    },
  },
});
export const {
  getDriver,
  // setTransporter,
  // setDriverName,
  // setMobilePrimary,
  // setMobileSecondary,
  // setEmail,
  // setAddress,
  addDriver,
} = driverSlice.actions;
export default driverSlice.reducer;

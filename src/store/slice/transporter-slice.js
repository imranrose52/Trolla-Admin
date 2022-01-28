import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// import axios from "axios";
import rootClient from "../../config/rootClient";

const initialState = {
  isloading: false,
  error: false,
  errorMessage: null,
  transporters: [{}],
  transporter: {
    user_name: "",
    mobile_primary: "",
    moile_secondary: "",
    email: "",
    verified_by: "",
    verified_at: "",
    address: "",
  },
};

// get all transporters------------------------
export const getAll = createAsyncThunk("transporter-get-all", async () => {
  let response = await rootClient.get("api/v1/admin/transporters");
  // console.log("-------------------------", response.data.loaders);
  return response.data.transporter;
});

// create transporter --------------------
export const createTransporter = createAsyncThunk(
  "loader-create-new",
  async (body) => {
    let response = await rootClient.post("api/v1/admin/transporters", body);

    return response.data.transporter;
  }
);

// delete transporters-----------------------

export const deleteTransporter = createAsyncThunk(
  "transporter-delete",
  async (id) => {
    let response = await rootClient.delete(`api/v1/admin/transporters/${id}`);

    return id;
  }
);

// transporter status change update-------------
export const changeStatus = createAsyncThunk(
  "transporter-update",
  async (data) => {
    const { id, status } = data;
    let response = await rootClient.put(`api/v1/admin/transporters/${id}`, {
      status,
    });
    // console.log(response.data);
    return data;
  }
);

// update transporter-------------------------
export const updateTransporter = createAsyncThunk(
  "vehicle-type-update",
  async (data) => {
    console.log(data);
    let response = await rootClient.put(
      `api/v1/admin/transporters/${data._id}`,
      data
    );
    // console.log(response.data);
    return data;
  }
);

const transporterSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    getTransporter(state, action) {
      state.transporter = state.transporters.find(
        (item) => item._id === action.payload
      );
    },
    addTransporter(state, action) {
      // state.loaders = [action.payload, ...state.loaders];
      state.transporters.push(action.payload);
    },

    setMobilePrimary(state, action) {
      state.transporter.mobile_primary = action.payload;
    },
    setMobileSecondary(state, action) {
      state.transporter.moile_secondary = action.payload;
    },
    setUserName(state, action) {
      state.transporter.user_name = action.payload;
    },
    setEmail(state, action) {
      state.transporter.email = action.payload;
    },

    setVerifiedBy(state, action) {
      state.transporter.verified_by = action.payload;
    },

    setVerifiedAt(state, action) {
      state.transporter.verified_at = action.payload;
    },
    setAddress(state, action) {
      state.transporter.address = action.payload;
    },
  },

  extraReducers: {
    // get transporter-------------------------------------------
    [getAll.fulfilled]: (state, action) => {
      state.transporters = action.payload;
    },
    [getAll.rejected]: (state, action) => {
      state.isloading = false;
      state.errorMessage = "Something Wrong";
    },
    [getAll.pending]: (state) => {
      state.isloading = true;
    },


    // create  transporter-------------------------------------------
    [createTransporter.fulfilled]: (state, action) => {
      state.transporters = [action.payload, ...state.transporters];
      state.error = false;
    },
    [createTransporter.rejected]: (state, action) => {
      state.isloading = false;
      state.error = true;
      state.errorMessage = "User Exist !";
    },
    [createTransporter.pending]: (state) => {
      state.isloading = true;
    },


    // delete transporter --------------------------------------
    [deleteTransporter.fulfilled]: (state, { payload: id }) => {
      state.transporters = state.transporters.filter((item) => item._id !== id);
    },

    [deleteTransporter.rejected]: (state, action) => {
      state.errorMessage = true;
      state.isloading = false;
    },


    // change trasporter status  --------------------------------------
    [changeStatus.fulfilled]: (state, action) => {
      const { id, status } = action.payload;

      state.transporters = state.transporters.map((item) =>
        item._id === id ? { ...item, status } : item
      );
      state.transporter = { ...state.transporter, status };
    },

    [changeStatus.rejected]: (state, action) => {
      state.errorMessage = true;
      state.isloading = false;
    },

    [updateTransporter.fulfilled]: (state, action) => {
      const updatedData = action.payload;
      // console.log(updatedData);

      state.transporters = state.transporters.map((item) =>
        item._id === updatedData._id ? updatedData : item
      );
      state.transporter = updatedData;
    },
  },
});
export const {
  getTransporter,
  setMobilePrimary,
  setMobileSecondary,
  setUserName,
  setEmail,
  setVerifiedAt,
  setVerifiedBy,
  setAddress,
} = transporterSlice.actions;
export default transporterSlice.reducer;

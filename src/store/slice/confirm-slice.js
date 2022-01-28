import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import rootClient from "../../config/rootClient";

const initialState = {
  isloading: false,
  error: false,
  errorMessage: null,
  confirms: [{}],
  confirm: "",
};

// get All Booking Confirm-------------------

export const getAllConfirm = createAsyncThunk("comfirm-get-all", async () => {
  let response = await rootClient.get("api/v1/admin/confirm");

  return response.data.confirm;
});

// Post Quotes-------------------
// export const createVehicle = createAsyncThunk(
//   "quote-create-new",
//   async (body) => {
//     let response = await rootClient.post("api/v1/admin/quotes", body);

//     return response.data.newQuote;
//   }
// );

// Delete Booking Confirm----------------------------

export const deleteConfirm = createAsyncThunk("confirm-delete", async (id) => {
  let response = await rootClient.delete(`api/v1/admin/confirm/${id}`);

  return id;
});

export const updateConfirm = createAsyncThunk(
  "confirm-update",
  async (data) => {
    const { id, status } = data;
    let response = await rootClient.put(`api/v1/admin/confirm/${id}`, {
      status,
    });
    // console.log(response.data);
    return data;
  }
);

const confirmSlice = createSlice({
  name: "confirm",
  initialState,
  reducers: {
    getConfirm(state, action) {
      state.confirm = state.confirms.find(
        (item) => item._id === action.payload
      );
    },
  },

  extraReducers: {
    // get Booking Confirm-------------------------------------------
    [getAllConfirm.fulfilled]: (state, action) => {
      state.confirms = action.payload;
    },
    [getAllConfirm.rejected]: (state, action) => {
      state.isloading = false;
      state.errorMessage = "Something Wrong";
    },
    [getAllConfirm.pending]: (state) => {
      state.isloading = true;
    },
    // create  vehicle-------------------------------------------
    // [createVehicle.fulfilled]: (state, action) => {
    //   state.vehicles = [action.payload, ...state.vehicles];
    //   state.error = false;
    // },
    // [createVehicle.rejected]: (state, action) => {
    //   state.isloading = false;
    //   state.error = true;
    //   state.errorMessage = "User Exist !";
    // },
    // [createVehicle.pending]: (state) => {
    //   state.isloading = true;
    // },

    // delete booking confirm --------------------------------------
    [deleteConfirm.fulfilled]: (state, { payload: id }) => {
      state.confirms = state.confirms.filter((item) => item._id !== id);
    },

    [deleteConfirm.rejected]: (state, action) => {
      state.errorMessage = true;
      state.isloading = false;
    },
    // change booking update  --------------------------------------
    [updateConfirm.fulfilled]: (state, action) => {
      const { id, status } = action.payload;

      state.confirms = state.confirms.map((item) =>
        item._id === id ? { ...item, status } : item
      );
      state.confirms = { ...state.confirms, status };
    },

    [updateConfirm.rejected]: (state, action) => {
      state.errorMessage = true;
      state.isloading = false;
    },
  },
});

export const { getConfirm } = confirmSlice.actions;
export default confirmSlice.reducer;

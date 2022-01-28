import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import rootClient from "../../config/rootClient";

const initialState = {
  isloading: false,
  error: false,
  errorMessage: null,
  complete_trips: [{}],
  complete_trip: "",
};

// get All Booking Confirm-------------------

export const getAllTrip = createAsyncThunk("cmplete-get-all", async () => {
  let response = await rootClient.get("api/v1/admin/trips");

  return response.data.trips;
});

// Post trips-------------------
export const createTrip = createAsyncThunk(
  "quote-create-new",
  async (body) => {
    let response = await rootClient.post("api/v1/admin/trips", body);

    return response.data.trips;
  }
);

// Delete Booking complete trips----------------------------

export const deleteTrip = createAsyncThunk("complete-delete", async (id) => {
  let response = await rootClient.delete(`api/v1/admin/trips/${id}`);

  return id;
});

export const updateTrip = createAsyncThunk("complete-update", async (data) => {
  const { id, status } = data;
  let response = await rootClient.put(`api/v1/admin/trips/${id}`, {
    status,
  });
  // console.log(response.data);
  return data;
});

const completeTripSlice = createSlice({
  name: "complete",
  initialState,
  reducers: {
    getTrip(state, action) {
      state.complete_trip = state.complete_trips.find(
        (item) => item._id === action.payload
      );
    },
  },

  extraReducers: {
    // get Booking Complete trip-------------------------------------------
    [getAllTrip.fulfilled]: (state, action) => {
      state.complete_trips = action.payload;
    },
    [getAllTrip.rejected]: (state, action) => {
      state.isloading = false;
      state.errorMessage = "Something Wrong";
    },
    [getAllTrip.pending]: (state) => {
      state.isloading = true;
    },


    // create  vehicle-------------------------------------------
    [createTrip.fulfilled]: (state, action) => {
      state.complete_trips = [action.payload, ...state.complete_trips];
      state.error = false;
    },
    [createTrip.rejected]: (state, action) => {
      state.isloading = false;
      state.error = true;
      state.errorMessage = "User Exist !";
    },
    [createTrip.pending]: (state) => {
      state.isloading = true;
    },

    // delete booking complete trips --------------------------------------
    [deleteTrip.fulfilled]: (state, { payload: id }) => {
      state.complete_trips = state.complete_trips.filter(
        (item) => item._id !== id
      );
    },

    [deleteTrip.rejected]: (state, action) => {
      state.errorMessage = true;
      state.isloading = false;
    },
    // change booking complete trip update  --------------------------------------
    [updateTrip.fulfilled]: (state, action) => {
      const { id, status } = action.payload;

      state.complete_trips = state.complete_trips.map((item) =>
        item._id === id ? { ...item, status } : item
      );
      state.complete_trips = { ...state.complete_trips, status };
    },

    [updateTrip.rejected]: (state, action) => {
      state.errorMessage = true;
      state.isloading = false;
    },
  },
});

export const { getTrip } = completeTripSlice.actions;
export default completeTripSlice.reducer;

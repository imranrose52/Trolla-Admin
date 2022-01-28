import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import rootClient from "../../config/rootClient";

const initialState = {
  isloading: false,
  error: false,
  errorMessage: null,
  quotes: [{}],
  quote: "",
};

// get All Quotes-------------------

export const getAllQuote = createAsyncThunk("quote-get-all", async () => {
  let response = await rootClient.get("api/v1/admin/quotes");

  return response.data.quote;
});

// Post Quotes-------------------
// export const createVehicle = createAsyncThunk(
//   "quote-create-new",
//   async (body) => {
//     let response = await rootClient.post("api/v1/admin/quotes", body);

//     return response.data.newQuote;
//   }
// );

// Delete Vehicles----------------------------

export const deleteQuote = createAsyncThunk("quote-delete", async (id) => {
  let response = await rootClient.delete(`api/v1/admin/quotes/${id}`);

  return id;
});

export const updateQuote = createAsyncThunk("quote-update", async (data) => {
  const { id, status } = data;
  let response = await rootClient.put(`api/v1/admin/quotes/${id}`, {
    status,
  });
  // console.log(response.data);
  return data;
});

const quoteSlice = createSlice({
  name: "quote",
  initialState,
  reducers: {
    getQuote(state, action) {
      state.quote = state.quotes.find((item) => item._id === action.payload);
    },
  },

  extraReducers: {
    // get Quote-------------------------------------------
    [getAllQuote.fulfilled]: (state, action) => {
      state.quotes = action.payload;
    },
    [getAllQuote.rejected]: (state, action) => {
      state.isloading = false;
      state.errorMessage = "Something Wrong";
    },
    [getAllQuote.pending]: (state) => {
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
    // delete Vehicle --------------------------------------
    [deleteQuote.fulfilled]: (state, { payload: id }) => {
      state.quotes = state.quotes.filter((item) => item._id !== id);
    },

    [deleteQuote.rejected]: (state, action) => {
      state.errorMessage = true;
      state.isloading = false;
    },
    // change Vehicle status  --------------------------------------
    [updateQuote.fulfilled]: (state, action) => {
      const { id, status } = action.payload;

      state.quotes = state.quotes.map((item) =>
        item._id === id ? { ...item, status } : item
      );
      state.quotes = { ...state.quote, status };
    },

    [updateQuote.rejected]: (state, action) => {
      state.errorMessage = true;
      state.isloading = false;
    },
  },
});

export const { getQuote } = quoteSlice.actions;
export default quoteSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


import rootClient from "../../config/rootClient";

const initialState = {
  isloading: false,
  error: false,
  errorMessage: null,
  loaders: [{}],
  loader: "",
  // loader: {
  //   user_name: "",
  //   mobile_primary: "",
  //   email: "",
  //   mobile_secondary: "",
  //   address: "",
  // },
};


// ------GET LOADERS------------------------

export const getAll = createAsyncThunk("loader-get-all", async () => {
  let response = await rootClient.get("api/v1/admin/loaders");

  return response.data.loaders;
});


// CREATE LOADERS-----------------------

export const createLoader = createAsyncThunk(
  "loader-create-new",
  async (body) => {
    let response = await rootClient.post("api/v1/admin/loaders", body);
    
    return response.data.newLoader;
  }
);


// DELETE LOADERS------------------

export const deleteLoader = createAsyncThunk("loader-delete", async (id) => {
 
  let response = await rootClient.delete(`api/v1/admin/loaders/${id}`);
  
  return id;
});


// LOADER STATUS CHANGE------------------

export const statusChange = createAsyncThunk("loader-update", async (data) => {
  const { id, status } = data;
  let response = await rootClient.put(`api/v1/admin/loaders/${id}`, { status });
  
  return data;
});



//-------UPDATE LOADERS------------

export const updateLoader = createAsyncThunk("loader-update", async (data) => {

  let response = await rootClient.put(`api/v1/admin/loaders/${data._id}`, data);
 
  return data;
});

const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    getLoader(state, action) {
      state.loader = state.loaders.find((item) => item._id === action.payload);
    },
    addLoader(state, action) {
      // state.loaders = [action.payload, ...state.loaders];
      state.loaders.push(action.payload);
    },

    setUserName(state, action) {
      state.loader.user_name = action.payload;
    },

    setMobilePrimary(state, action) {
      state.loader.mobile_primary = action.payload;
    },

    setMobileSecondary(state, action) {
      state.loader.mobile_secondary = action.payload;
    },

    setEmail(state, action) {
      state.loader.email = action.payload;
    },

    setAddress(state, action) {
      state.loader.address = action.payload;
    },

  },

  extraReducers: {
    // get loader-------------------------------------------
    [getAll.fulfilled]: (state, action) => {
      state.loaders = action.payload;
    },
    [getAll.rejected]: (state, action) => {
      state.isloading = false;
      state.errorMessage = "Something Wrong";
    },
    [getAll.pending]: (state) => {
      state.isloading = true;
    },


    // create  loader-------------------------------------------
    [createLoader.fulfilled]: (state, action) => {
      state.loaders = [action.payload, ...state.loaders];
      
      state.error = false;
    },

    [createLoader.rejected]: (state, action) => {
      state.isloading = false;
      state.error = true;
      state.errorMessage = "User already Exist !";
    },
    [createLoader.pending]: (state) => {
      state.isloading = true;
    },


    // delete loader --------------------------------------
    [deleteLoader.fulfilled]: (state, { payload: id }) => {
      state.loaders = state.loaders.filter((item) => item._id !== id);
    },

    [deleteLoader.rejected]: (state, action) => {
      state.errorMessage = true;
      state.isloading = false;
    },


    // change loader status  --------------------------------------
    [statusChange.fulfilled]: (state, action) => {
      const { id, status } = action.payload;

      state.loaders = state.loaders.map((item) =>
        item._id === id ? { ...item, status } : item
      );
      state.loader = { ...state.loader, status };
    },

    [statusChange.rejected]: (state, action) => {
      state.errorMessage = true;
      state.isloading = false;
    },


    // -----update loader------------------------------------------------------------------------
    [updateLoader.fulfilled]: (state, action) => {
      const updatedData = action.payload;
      

      state.loaders = state.loaders.map((item) =>
        item._id === updatedData._id ? updatedData : item
      );
      state.loader = updatedData;
    },
  },
});
export const {
  getLoader,
  setUserName,
  setMobilePrimary,
  setMobileSecondary,
  setEmail,
  setAddress,
  addLoader,
} = loaderSlice.actions;
export default loaderSlice.reducer;

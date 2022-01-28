import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import rootClient from "../../config/rootClient";

const initialState = {
  isloading: false,
  error: false,
  errorMessage: null,
  loads: [{}],
  // load: "",
  load: {
    loader: "",
    pickup: {
      address: "",
    },
    delivery: {
      address: "",
    },
    vehicle_type: "",
    value: "",
    weight: "",
    meterial_type: "",
    created_date: "",
    remark: "",
  },
};

export const getAllLoads = createAsyncThunk("load-get-all", async () => {
  // console.log("####");
  let response = await rootClient.get("api/v1/admin/loads");
  // console.log("-------------------------", response.data.loads);
  return response.data.loads;
});



// create loads---------------------------------

export const createLoads = createAsyncThunk("load-create-new", async (body) => {
  let response = await rootClient.post("api/v1/admin/loads", body);

  return response.data.loads;
});

export const deleteLoad = createAsyncThunk("load-delete", async (id) => {
  // console.log(id);
  let response = await rootClient.delete(`api/v1/admin/loads/${id}`);
  // console.log(response.data);
  return id;
});

// update loads--------------------------

export const updateLoad = createAsyncThunk("load-update", async (data) => {
  
  let response = await rootClient.put(`api/v1/admin/loads/${data._id}`, data);
  // console.log(response.data);
  return data;
});

// ---------------status change-------------------------
export const statusChange = createAsyncThunk("load-update", async (data) => {
  const { id, status } = data;
  let response = await rootClient.put(`api/v1/admin/loads/${id}`, { status });
  
  return data;
});



const loadSlice = createSlice({
  name: "load",
  initialState,
  reducers: {
    getLoad(state, action) {
      state.load = state.loads.find((item) => item._id === action.payload);
    },

    // update reducer----------------
    setLoader(state, action) {
      state.load.loader = action.payload;
    },
    setPickup(state, action) {
      state.load.pickup.address = action.payload;
    },
    setDelivery(state, action) {
      state.load.delivery.address = action.payload;
    },
    // setLoadType(state, action) {
    //   state.load.vehicle_type = action.payload;
    // },
    setVehicleType(state, action) {
      state.load.vehicle_type = action.payload;
    },
    setWeight(state, action) {
      state.load.weight = action.payload;
    },
    setValue(state, action) {
      state.load.value = action.payload;
    },
    setMeterialType(state, action) {
      state.load.meterial_type = action.payload;
    },
    setRemark(state, action) {
      state.load.remark = action.payload;
    },
  },

  extraReducers: {
    // get -------------------------------------------
    [getAllLoads.fulfilled]: (state, action) => {
      state.loads = action.payload;
    },
    [getAllLoads.rejected]: (state, action) => {
      state.isloading = false;
      state.errorMessage = "Something Wrong";
    },
    [getAllLoads.pending]: (state) => {
      state.isloading = true;
    },
    // // create  -------------------------------------------
    [createLoads.fulfilled]: (state, action) => {
      state.loads = [action.payload, ...state.loads];
      state.error = false;
    },
    // [createVehicleType.rejected]: (state, action) => {
    //   state.isloading = false;
    //   state.error = true;
    //   state.errorMessage = "Meterial Exist !";
    // },
    // [createVehicleType.pending]: (state) => {
    //   state.isloading = true;
    // },
    // // delete  --------------------------------------
    [deleteLoad.fulfilled]: (state, { payload: id }) => {
      state.loads = state.loads.filter((item) => item._id != id);
    },

   

    //  update   --------------------------------------
    [updateLoad.fulfilled]: (state, action) => {
      const updatedData = action.payload;
      // console.log(updatedData);

      state.loads = state.loads.map((item) =>
        item._id == updatedData._id ? updatedData : item
      );
      state.load = updatedData;
    },

    // [updateVihecleType.rejected]: (state, action) => {
    //   state.errorMessage = true;
    //   state.isloading = false;
    // },
  },

  // status change--------------
  [statusChange.fulfilled]: (state, action) => {
    const { id, status } = action.payload;

    state.loads = state.loads.map((item) =>
      item._id === id ? { ...item, status } : item
    );
    state.load = { ...state.load, status };
  },

  [statusChange.rejected]: (state, action) => {
    state.errorMessage = true;
    state.isloading = false;
  },
});
export const {
  getLoad,
  setLoader,
  setPickup,
  setDelivery,
  setVehicleType,
  setMeterialType,
  setWeight,
  setValue,
  setRemark,
} = loadSlice.actions;
export default loadSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import rootClient from "../../config/rootClient";

const initialState = {
  isloading: false,
  error: false,
  errorMessage: null,
  vehicles: [{}],
  vehicle:"",
  // vehicle: {
  //   transporter_name: "",
  //   tyre: "",
  //   vehicle_type: "",
  //   vehicle_number: "",
  //   body_type: "",
  //   capacity: "",
  // },
};

// get All vehicles-------------------

export const getAllVehicle = createAsyncThunk("vehicle-get-all", async () => {
  let response = await rootClient.get("api/v1/admin/vehicles");

  return response.data.vehicle;
});

// Post Vehicles-------------------
export const createVehicle = createAsyncThunk(
  "vehicle-create-new",
  async (body) => {
    let response = await rootClient.post("api/v1/admin/vehicles", body);

    return response.data.vehicle;
  }
);

// Delete Vehicles----------------------------

export const deleteVehicle = createAsyncThunk("vehicle-delete", async (id) => {
  let response = await rootClient.delete(`api/v1/admin/vehicles/${id}`);

  return id;
});

export const changeStatus = createAsyncThunk(
  "vehicle-statusupdate",
  async (data) => {
    const { id, status } = data;
    let response = await rootClient.put(`api/v1/admin/vehicles/${id}`, {
      status,
    });
    // console.log(response.data);
    return data;
  }
);

export const updateVehicle = createAsyncThunk(
  "vehicle-update",
  async (data) => {
    console.log(data);
    let response = await rootClient.put(
      `api/v1/admin/vehicles/${data._id}`,
      data
    );
    // console.log(response.data);
    return data;
  }
);

const vehicleSlice = createSlice({
  name: "vehicle",
  initialState,
  reducers: {
    getVehicle(state, action) {
      state.vehicle = state.vehicles.find(
        (item) => item._id === action.payload
      );
    },

    setTransporterName(state, action) {
      state.vehicle.transporter_name = action.payload;
    },
    setVehicleType(state, action) {
      state.vehicle.vehicle_type = action.payload;
    },
    setVehicleNumber(state, action) {
      state.vehicle.vehicle_number = action.payload;
    },
    setBodyType(state, action) {
      state.vehicle.body_type = action.payload;
    },
    setTyre(state, action) {
      state.vehicle.tyre = action.payload;
    },
    setCapacity(state, action) {
      state.vehicle.capacity = action.payload;
    },

    addVehicle(state, action) {
      // state.vehicles = [action.payload, ...state.vehicles];
      state.vehicle.push(action.payload);
    },
  },

  extraReducers: {
    // get Vehicle-------------------------------------------
    [getAllVehicle.fulfilled]: (state, action) => {
      state.vehicles = action.payload;
    },

    [getAllVehicle.rejected]: (state, action) => {
      state.isloading = false;
      state.errorMessage = "Something Wrong";
    },

    [getAllVehicle.pending]: (state) => {
      state.isloading = true;
    },

    // create  vehicle-------------------------------------------
    [createVehicle.fulfilled]: (state, action) => {
      state.vehicles = [action.payload, ...state.vehicles];
      state.error = false;
    },

    [createVehicle.rejected]: (state, action) => {
      state.isloading = false;
      state.error = true;
      state.errorMessage = "User Exist !";
    },
    
    [createVehicle.pending]: (state) => {
      state.isloading = true;
    },

    // delete Vehicle --------------------------------------
    [deleteVehicle.fulfilled]: (state, { payload: id }) => {
      state.vehicles = state.vehicles.filter((item) => item._id !== id);
    },

    [deleteVehicle.rejected]: (state, action) => {
      state.errorMessage = true;
      state.isloading = false;
    },

    // change Vehicle status  --------------------------------------
    [changeStatus.fulfilled]: (state, action) => {
      const { id, status } = action.payload;

      state.vehicles = state.vehicles.map((item) =>
        item._id === id ? { ...item, status } : item
      );
      state.vehicle = { ...state.vehicle, status };
    },

    [changeStatus.rejected]: (state, action) => {
      state.errorMessage = true;
      state.isloading = false;
    },

    // update vehicles----------
    [updateVehicle.fulfilled]: (state, action) => {
      const updatedData = action.payload;
      console.log(updatedData);

      state.vehicles = state.vehicles.map((item) =>
        item._id === updatedData._id ? updatedData : item
      );
      state.vehicle = updatedData;
    },
  },
});

export const {
  getVehicle,
  setTransporterName,
  setVehicleNumber,
  setBodyType,
  setVehicleType,
  setTyre,
  setCapacity,
} = vehicleSlice.actions;
export default vehicleSlice.reducer;

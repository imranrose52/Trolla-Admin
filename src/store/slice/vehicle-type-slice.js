import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import rootClient from "../../config/rootClient";

const initialState = {
  isloading: false,
  error: false,
  errorMessage: null,
  vehicle_types: [{}],
  vehicle_type: {
    vehicle_type: "",
    capacity: "",
    body_type: "",
    tyre: "",
    length: "",
  },
};

export const getAllVihecleType = createAsyncThunk(
  "vehicle-type-get-all",
  async () => {
    // console.log("####");
    let response = await rootClient.get("api/v1/admin/vehicle-type");
    console.log("-------------------------", response.data.loaders);
    return response.data.vehicle_types;
  }
);
export const createVehicleType = createAsyncThunk(
  "vehicle-type-create-new",
  async (body) => {
    let response = await rootClient.post("api/v1/admin/vehicle-type", body);
    // console.log("-------------------------", response.data.meterials);
    return response.data.vehicle_types;
  }
);
export const deleteVehicleType = createAsyncThunk(
  "vehicle-type-delete",
  async (id) => {
    // console.log(id);
    let response = await rootClient.delete(`api/v1/admin/vehicle-type/${id}`);
    // console.log(response.data);
    return id;
  }
);

export const updateVihecleType = createAsyncThunk(
  "vehicle-type-update",
  async (data) => {
    console.log(data);
    let response = await rootClient.put(
      `api/v1/admin/vehicle-type/${data._id}`,
      data
    );
    // console.log(response.data);
    return data;
  }
);

export const changeStatusVihecleType = createAsyncThunk(
  "vehicle-type-update-status",
  async (data) => {
    const { id, visible } = data;
    let response = await rootClient.put(`api/v1/admin/vehicle-type/${id}`, {
      visible,
    });
    // console.log(response.data);
    return data;
  }
);

const vehicleTypeSlice = createSlice({
  name: "vehicle-type",
  initialState,
  reducers: {
    getVehicleType(state, action) {
      state.vehicle_type = state.vehicle_types.find(
        (item) => item._id === action.payload
      );
    },
    addVehicleType(state, action) {
      // state.loaders = [action.payload, ...state.loaders];
      state.vehicle_types.push(action.payload);
    },
    setVehicleType(state, action) {
      state.vehicle_type.vehicle_type = action.payload;
    },
    setCapacity(state, action) {
      state.vehicle_type.capacity = action.payload;
    },
    setBodyType(state, action) {
      state.vehicle_type.body_type = action.payload;
    },
    setTyre(state, action) {
      state.vehicle_type.tyre = action.payload;
    },
    setLength(state, action) {
      state.vehicle_type.length = action.payload;
    },
  },

  extraReducers: {
    // get -------------------------------------------
    [getAllVihecleType.fulfilled]: (state, action) => {
      state.vehicle_types = action.payload;
    },
    [getAllVihecleType.rejected]: (state, action) => {
      state.isloading = false;
      state.errorMessage = "Something Wrong";
    },
    [getAllVihecleType.pending]: (state) => {
      state.isloading = true;
    },
    // create  -------------------------------------------
    [createVehicleType.fulfilled]: (state, action) => {
      state.vehicle_types = [action.payload, ...state.vehicle_types];
      state.error = false;
    },
    [createVehicleType.rejected]: (state, action) => {
      state.isloading = false;
      state.error = true;
      state.errorMessage = "Meterial Exist !";
    },
    [createVehicleType.pending]: (state) => {
      state.isloading = true;
    },
    // delete  --------------------------------------
    [deleteVehicleType.fulfilled]: (state, { payload: id }) => {
      state.vehicle_types = state.vehicle_types.filter(
        (item) => item._id !== id
      );
    },

    [deleteVehicleType.rejected]: (state, action) => {
      state.errorMessage = true;
      state.isloading = false;
    },
    // change  status  --------------------------------------
    [changeStatusVihecleType.fulfilled]: (state, action) => {
      const { id, visible } = action.payload;

      state.vehicle_types = state.vehicle_types.map((item) =>
        item._id === id ? { ...item, visible } : item
      );
      state.vehicle_type = { ...state.vehicle_type, visible };
    },

    [changeStatusVihecleType.rejected]: (state, action) => {
      state.errorMessage = true;
      state.isloading = false;
    },

    // update   --------------------------------------
    [updateVihecleType.fulfilled]: (state, action) => {
      const updatedData = action.payload;
      // console.log(updatedData);

      state.vehicle_types = state.vehicle_types.map((item) =>
        item._id === updatedData._id ? updatedData : item
      );
      state.vehicle_type = updatedData;
    },

    [updateVihecleType.rejected]: (state, action) => {
      state.errorMessage = true;
      state.isloading = false;
    },
  },
});
export const {
  getVehicleType,
  addVehicleType,
  setVehicleType,
  setBodyType,
  setCapacity,
  setLength,
  setTyre,
} = vehicleTypeSlice.actions;
export default vehicleTypeSlice.reducer;

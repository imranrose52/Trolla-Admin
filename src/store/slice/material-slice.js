import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import rootClient from "../../config/rootClient";

const initialState = {
  isloading: false,
  error: false,
  errorMessage: null,
  materials: [],
  material: "",
};

export const getAll = createAsyncThunk("material-get-all", async () => {
  let response = await rootClient.get("api/v1/admin/material");
  // console.log("-------------------------", response.data.loaders);
  return response.data.materials;
});
export const createMaterial = createAsyncThunk(
  "material-create-new",
  async (body) => {
    let response = await rootClient.post("api/v1/admin/material", body);
    // console.log("-------------------------", response.data.meterials);
    return response.data.materials;
  }
);
export const deleteMaterial = createAsyncThunk(
  "material-delete",
  async (id) => {
    // console.log(id);
    let response = await rootClient.delete(`api/v1/admin/material/${id}`);
    // console.log(response.data);
    return id;
  }
);

export const updateMeterial = createAsyncThunk(
  "material-update",
  async (data) => {
    console.log(data);
    let response = await rootClient.put(
      `api/v1/admin/material/${data._id}`,
      data
    );
    // console.log(response.data);
    return data;
  }
);

export const changeStatus = createAsyncThunk(
  "material-update-status",
  async (data) => {
    const { id, visible } = data;
    let response = await rootClient.put(`api/v1/admin/material/${id}`, {
      visible,
    });
    // console.log(response.data);
    return data;
  }
);

const materialSlice = createSlice({
  name: "material",
  initialState,
  reducers: {
    getMaterial(state, action) {
      state.material = state.materials.find(
        (item) => item._id === action.payload
      );
    },
    addMaterial(state, action) {
      // state.loaders = [action.payload, ...state.loaders];
      state.material.push(action.payload);
    },
    setMaterialName(state, action) {
      state.material.material_name = action.payload;
    },
  },

  extraReducers: {
    // get -------------------------------------------
    [getAll.fulfilled]: (state, action) => {
      state.materials = action.payload;
    },
    [getAll.rejected]: (state, action) => {
      state.isloading = false;
      state.errorMessage = "Something Wrong";
    },
    [getAll.pending]: (state) => {
      state.isloading = true;
    },
    // create  -------------------------------------------
    [createMaterial.fulfilled]: (state, action) => {
      state.materials = [action.payload, ...state.materials];
      state.error = false;
    },
    [createMaterial.rejected]: (state, action) => {
      state.isloading = false;
      state.error = true;
      state.errorMessage = "Meterial Exist !";
    },
    [createMaterial.pending]: (state) => {
      state.isloading = true;
    },
    // delete  --------------------------------------
    [deleteMaterial.fulfilled]: (state, { payload: id }) => {
      state.materials = state.materials.filter((item) => item._id !== id);
    },

    [deleteMaterial.rejected]: (state, action) => {
      state.errorMessage = true;
      state.isloading = false;
    },
    // change  status  --------------------------------------
    [changeStatus.fulfilled]: (state, action) => {
      const { id, visible } = action.payload;

      state.materials = state.materials.map((item) =>
        item._id === id ? { ...item, visible } : item
      );
      state.material = { ...state.material, visible };
    },

    [changeStatus.rejected]: (state, action) => {
      state.errorMessage = true;
      state.isloading = false;
    },

    // update   --------------------------------------
    [updateMeterial.fulfilled]: (state, action) => {
      const updatedData = action.payload;
      // console.log(updatedData);

      state.materials = state.materials.map((item) =>
        item._id === updatedData._id ? updatedData : item
      );
      state.material = updatedData;
    },

    [updateMeterial.rejected]: (state, action) => {
      state.errorMessage = true;
      state.isloading = false;
    },
  },
});
export const { getMaterial, addMaterial, setMaterialName } =
  materialSlice.actions;
export default materialSlice.reducer;

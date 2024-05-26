import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import LandService from "../../../../services/LandService";

const service = LandService();

export const getAllLandAction = createAsyncThunk(
  "land/getAll",
  async (payload, thunkAPI) => {
    try {
      const res = await service.getAll();
      if (res) {
        return res;
      } else {
        throw new Error("Error get all data");
      }
    } catch (e) {
      console.error("Thunk error:", e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const createLandAction = createAsyncThunk(
  "land/create",
  async (payload, thunkAPI) => {
    try {
      const res = await service.createLand(payload);
      if (res) {
        await thunkAPI.dispatch(getAllLandAction()).unwrap();
        return res;
      } else {
        throw new Error("Error create land");
      }
    } catch (e) {
      console.error("Thunk error:", e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateLandAction = createAsyncThunk(
  "land/update",
  async (payload, thunkAPI) => {
    try {
      const res = await service.editLand(payload);
      if (res) {
        await thunkAPI.dispatch(getAllLandAction()).unwrap();
        return res;
      } else {
        throw new Error("Error edit land");
      }
    } catch (e) {
      console.error("Thunk error:", e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteLandAction = createAsyncThunk(
  "land/delete",
  async (payload, thunkAPI) => {
    try {
      const res = await service.deleteLand(payload);
      if (res) {
        await thunkAPI.dispatch(getAllLandAction()).unwrap();
        return res;
      } else {
        throw new Error("Error edit land");
      }
    } catch (e) {
      console.error("Thunk error:", e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const landSlice = createSlice({
  name: "land",
  initialState: {
    isLoading: false,
    message: "",
    land: [],
    lands: [],
  },
  reducers: {
    selectedLand: (state, { payload }) => {
      state.land = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllLandAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllLandAction.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.lands = payload.data.content;
      state.message = payload.message;
    });
    builder.addCase(getAllLandAction.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(createLandAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createLandAction.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.message = payload.message;
    });
    builder.addCase(createLandAction.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(updateLandAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateLandAction.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.message = payload.message;
    });
    builder.addCase(updateLandAction.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(deleteLandAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteLandAction.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.message = payload;
    });
    builder.addCase(deleteLandAction.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { selectedLand } = landSlice.actions;

export default landSlice;

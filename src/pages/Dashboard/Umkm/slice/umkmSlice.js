import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import UmkmService from "../../../../services/UmkmService";

const service = UmkmService();

export const getAllUmkmAction = createAsyncThunk(
  "umkm/getAll",
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

export const updateUmkmAction = createAsyncThunk(
  "umkm/update",
  async (payload, thunkAPI) => {
    try {
      const res = await service.update(payload);
      if (res) {
        await thunkAPI.dispatch(getAllUmkmAction()).unwrap();
        return res;
      } else {
        throw new Error("Error update data");
      }
    } catch (e) {
      console.error("Thunk error:", e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteUmkmAction = createAsyncThunk(
  "umkm/delete",
  async (payload, thunkAPI) => {
    try {
      const res = await service.deleteUmkm(payload);
      if (res) {
        await thunkAPI.dispatch(getAllUmkmAction()).unwrap();
        return res;
      } else {
        throw new Error("Error update data");
      }
    } catch (e) {
      console.error("Thunk error:", e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const umkmSlice = createSlice({
  name: "umkm",
  initialState: {
    isLoading: false,
    umkmList: [],
    umkm: [],
    message: "",
  },
  reducers: {
    selectedUmkm: (state, { payload }) => {
      state.umkm = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllUmkmAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllUmkmAction.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.umkmList = payload.data.content;
      state.message = payload.message;
    });
    builder.addCase(getAllUmkmAction.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(updateUmkmAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateUmkmAction.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.message = payload.message;
    });
    builder.addCase(updateUmkmAction.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(deleteUmkmAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteUmkmAction.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(deleteUmkmAction.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { selectedUmkm } = umkmSlice.actions;

export default umkmSlice;

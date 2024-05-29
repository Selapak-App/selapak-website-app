import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import LandOwnerService from "../../../../services/LandOwnerService";

const service = LandOwnerService();

export const getAllOwnerAction = createAsyncThunk(
  "owner/getAll",
  async (payload, thunkAPI) => {
    try {
      const res = await service.getAll(payload);
      if (res) {
        console.log("getAllOwnerAction response:", res);
        return res;
      } else {
        throw new Error("Invalid response structure");
      }
    } catch (e) {
      console.error("Thunk error:", e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const createOwnerAction = createAsyncThunk(
  "owner/create",
  async (payload, thunkAPI) => {
    try {
      const res = await service.create(payload);
      console.log("createOwnerAction response:", res);
      if (res) {
        await thunkAPI.dispatch(getAllOwnerAction()).unwrap();
        return res;
      } else {
        throw new Error("Create land owner failed");
      }
    } catch (e) {
      console.error("Thunk error:", e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateOwnerAction = createAsyncThunk(
  "owner/update",
  async (payload, thunkAPI) => {
    try {
      const res = await service.update(payload);
      console.log("updateOwnerAction response:", res);
      if (res) {
        await thunkAPI.dispatch(getAllOwnerAction()).unwrap();
        return res;
      } else {
        throw new Error("Update data failed");
      }
    } catch (e) {
      console.error("Thunk error:", e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteOwnerAction = createAsyncThunk(
  "owner/delete",
  async (payload, thunkAPI) => {
    try {
      const res = await service.deleteOwner(payload);
      if (res) {
        await thunkAPI.dispatch(getAllOwnerAction()).unwrap();
        return res;
      } else {
        throw new Error("Delete data failed");
      }
    } catch (e) {
      console.error("Thunk error:", e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const landOwnerSlice = createSlice({
  name: "owner",
  initialState: {
    isLoading: false,
    owners: [],
    owner: [],
    paging: [],
    message: "",
  },
  reducers: {
    selectedOwner: (state, { payload }) => {
      state.owner = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllOwnerAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllOwnerAction.fulfilled, (state, { payload }) => {
      state.owners = payload.data.content;
      state.isLoading = false;
      state.paging = payload.paging;
      state.message = "Success";
    });
    builder.addCase(getAllOwnerAction.rejected, (state) => {
      state.isLoading = false;
      state.message = "Rejected";
    });
    builder.addCase(createOwnerAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createOwnerAction.fulfilled, (state, { payload }) => {
      console.log("Payload in create fulfilled:", payload);
      state.isLoading = false;
      state.message = payload.message ? payload.message : "success";
    });
    builder.addCase(createOwnerAction.rejected, (state) => {
      state.isLoading = false;
      state.message = "Rejected";
    });
    builder.addCase(updateOwnerAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateOwnerAction.fulfilled, (state, { payload }) => {
      console.log("Payload in fulfilled:", payload);
      state.isLoading = false;
      state.message = payload.message ? payload.message : "success";
    });
    builder.addCase(updateOwnerAction.rejected, (state) => {
      state.isLoading = false;
      state.message = "Rejected";
    });
    builder.addCase(deleteOwnerAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteOwnerAction.fulfilled, (state, { payload }) => {
      console.log("Payload in fulfilled:", payload);
      state.isLoading = false;
      state.message = "Success";
    });
    builder.addCase(deleteOwnerAction.rejected, (state) => {
      state.isLoading = false;
      state.message = "Rejected";
    });
  },
});

export const { selectedOwner } = landOwnerSlice.actions;

export default landOwnerSlice;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AdminService } from "../../../../services/AdminService";

const service = AdminService();

export const getAllAdminAction = createAsyncThunk(
  "admin/getAll",
  async (payload, thunkAPI) => {
    try {
      const res = await service.getAll();
      if (res) {
        return res;
      } else {
        throw new Error("Get all admin failed");
      }
    } catch (e) {
      console.error("Thunk error:", e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const registerAdminAction = createAsyncThunk(
  "admin/register",
  async (payload, thunkAPI) => {
    try {
      const res = await service.register(payload);
      console.log("createAdminAction response: ", res);
      if (res) {
        await thunkAPI.dispatch(getAllAdminAction()).unwrap();
        return res;
      } else {
        throw new Error("Register admin failed");
      }
    } catch (e) {
      console.error("Thunk error:", e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const setAdminActiveAction = createAsyncThunk(
  "admin/setActive",
  async (payload, thunkAPI) => {
    try {
      const res = await service.setActive(payload);
      if (res) {
        await thunkAPI.dispatch(getAllAdminAction()).unwrap();
        return res;
      } else {
        throw new Error("Admin set status failed");
      }
    } catch (e) {
      console.error("Thunk error:", e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const setAdminInactiveAction = createAsyncThunk(
  "admin/setInactive",
  async (payload, thunkAPI) => {
    try {
      const res = await service.setIncative(payload);
      if (res) {
        await thunkAPI.dispatch(getAllAdminAction()).unwrap();
        return res;
      } else {
        throw new Error("Admin set status failed");
      }
    } catch (e) {
      console.error("Thunk error:", e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    isLoading: false,
    admins: [],
    message: "",
  },
  extraReducers: (builder) => {
    builder.addCase(registerAdminAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(registerAdminAction.fulfilled, (state, { payload }) => {
      console.log("fullfilled payload: ", payload);
      state.isLoading = false;
      state.message = payload.message ? payload.message : "success";
    });
    builder.addCase(registerAdminAction.rejected, (state) => {
      state.isLoading = false;
      state.message = "Rejected";
    });
    builder.addCase(getAllAdminAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllAdminAction.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.admins = payload;
      state.message = "Success get all admin data";
    });
    builder.addCase(getAllAdminAction.rejected, (state) => {
      state.isLoading = false;
      state.message = "Error get all admin data";
    });
    builder.addCase(setAdminActiveAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(setAdminActiveAction.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.message = payload.message;
    });
    builder.addCase(setAdminActiveAction.rejected, (state) => {
      state.isLoading = true;
      state.message = "Failed set admin status";
    });
    builder.addCase(setAdminInactiveAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(setAdminInactiveAction.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.message = payload.message;
    });
    builder.addCase(setAdminInactiveAction.rejected, (state) => {
      state.isLoading = true;
      state.message = "Failed set admin status";
    });
  },
});

export default adminSlice;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AdminService } from "../../../../services/AdminService";

const service = AdminService();

export const registerAdminAction = createAsyncThunk(
  "admin/register",
  async (payload, thunkAPI) => {
    try {
      const res = await service.register(payload);
      console.log("createAdminAction response: ", res);
      if (res) {
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
  },
});

export default adminSlice;

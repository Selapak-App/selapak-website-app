import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AuthService } from "../../../services/AuthService";

const { login } = AuthService();

export const loginAction = createAsyncThunk(
  "auth/login",
  async (payload, thunkAPI) => {
    try {
      const res = await login(payload);
      console.log("login res: ", res);
      if (res) {
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

const authSlice = createSlice({
  name: "auth",
  initialState: {
    email: "",
    id: "",
    role: "",
    isLoading: false,
  },
  reducers: {
    logout: (state) => {
      state.email = "";
      (state.id = ""), (state.role = "");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginAction.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.email = payload.email;
      state.id = payload.id;
      state.role = payload.role;
    });
    builder.addCase(loginAction.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { logout } = authSlice.actions;

export default authSlice;

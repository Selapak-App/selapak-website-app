import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./pages/Auth/slice/AuthSlice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export default store;

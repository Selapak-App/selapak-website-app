import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./pages/Auth/slice/AuthSlice";
import landOwnerSlice from "./pages/Dashboard/LandOwner/slice/LandOwnerSlice";
import adminSlice from "./pages/Dashboard/Admin/slice/adminSlice";
import umkmSlice from "./pages/Dashboard/Umkm/slice/umkmSlice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    owner: landOwnerSlice.reducer,
    admin: adminSlice.reducer,
    umkm: umkmSlice.reducer,
  },
});

export default store;

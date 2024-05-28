import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./pages/Auth/slice/AuthSlice";
import landOwnerSlice from "./pages/Dashboard/LandOwner/slice/LandOwnerSlice";
import adminSlice from "./pages/Dashboard/Admin/slice/adminSlice";
import umkmSlice from "./pages/Dashboard/Umkm/slice/umkmSlice";
import landSlice from "./pages/Dashboard/Land/slice/landSlice";
import transactionSlice from "./pages/Dashboard/Transaction/slice/transactionSlice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    owner: landOwnerSlice.reducer,
    admin: adminSlice.reducer,
    umkm: umkmSlice.reducer,
    land: landSlice.reducer,
    transaction: transactionSlice.reducer,
  },
});

export default store;

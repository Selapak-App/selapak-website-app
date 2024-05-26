import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import LandOwnerMenu from "../pages/Dashboard/LandOwner/LandOwnerMenu";
import LandOwnerForm from "../pages/Dashboard/LandOwner/LandOwnerForm";
import LandOwnerList from "../pages/Dashboard/LandOwner/LandOwnerList";
import LandOwnerEdit from "../pages/Dashboard/LandOwner/LandOwnerEdit";
import AdminMenu from "../pages/Dashboard/Admin/AdminMenu";
import UmkmMenu from "../pages/Dashboard/Umkm/UmkmMenu";
import UmkmList from "../pages/Dashboard/Umkm/UmkmList";
import UmkmEditForm from "../pages/Dashboard/Umkm/UmkmEditForm";
import LandMenu from "../pages/Dashboard/Land/LandMenu";
import LandList from "../pages/Dashboard/Land/LandList";
import LandDetail from "../pages/Dashboard/Land/LandDetail";
import LandForm from "../pages/Dashboard/Land/LandForm";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Login,
  },
  {
    path: "dashboard",
    Component: Dashboard,
    children: [
      {
        path: "owner",
        Component: LandOwnerMenu,
        children: [
          {
            index: true,
            Component: LandOwnerList,
          },
          {
            path: "form",
            Component: LandOwnerForm,
          },
          {
            path: "edit",
            Component: LandOwnerEdit,
          },
        ],
      },
      {
        path: "admin",
        Component: AdminMenu,
      },
      {
        path: "umkm",
        Component: UmkmMenu,
        children: [
          {
            index: true,
            Component: UmkmList,
          },
          {
            path: "edit",
            Component: UmkmEditForm,
          },
        ],
      },
      {
        path: "land",
        Component: LandMenu,
        children: [
          {
            index: true,
            Component: LandList,
          },
          {
            path: "detail",
            Component: LandDetail,
          },
          {
            path: "form",
            Component: LandForm,
          },
        ],
      },
    ],
  },
]);

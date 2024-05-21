import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import LandOwnerMenu from "../pages/Dashboard/LandOwner/LandOwnerMenu";
import LandOwnerForm from "../pages/Dashboard/LandOwner/LandOwnerForm";
import LandOwnerList from "../pages/Dashboard/LandOwner/LandOwnerList";
import LandOwnerEdit from "../pages/Dashboard/LandOwner/LandOwnerEdit";

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
    ],
  },
]);

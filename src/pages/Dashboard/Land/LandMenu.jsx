import { Outlet } from "react-router-dom";

const LandMenu = () => {
  return (
    <div className="w-full pt-4 px-4">
      <Outlet />
    </div>
  );
};

export default LandMenu;

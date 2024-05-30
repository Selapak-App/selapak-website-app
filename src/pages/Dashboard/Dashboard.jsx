import { Outlet, useNavigate } from "react-router-dom";
import AppSideBar from "../../components/Dashboard/AppSideBar.jsx";
import Header from "../../components/Dashboard/Header.jsx";
import { useEffect } from "react";

const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <>
      <div className="flex w-full h-screen">
        <AppSideBar />
        <div className="flex flex-col w-full">
          <Header />
          <main className="flex-grow overflow-y-auto bg-slate-50">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

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
      <div className="flex w-full h-[100vh]">
        <AppSideBar />
        <main className="w-full flex-grow bg-slate-50">
          <Header />
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Dashboard;

import AppSideBar from "../../components/Dashboard/AppSideBar.jsx";
import Header from "../../components/Dashboard/Header.jsx";

const Dashboard = () => {
  return (
    <>
      <div className="flex w-full h-[100vh]">
        <AppSideBar />
        <main className="w-full flex-grow bg-slate-50">
          <Header />
          <p>Main content</p>
        </main>
      </div>
    </>
  );
};

export default Dashboard;

import { Link } from "react-router-dom";
import images from "../../assets/images";
import {
  BuildingOfficeIcon,
  BuildingStorefrontIcon,
  CalculatorIcon,
  Squares2X2Icon,
  UserIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { logout } from "../../pages/Auth/slice/AuthSlice";

const AppSideBar = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout);
    localStorage.clear();
    window.location.reload();
  };
  return (
    <>
      <aside
        id="nav-menu-4"
        aria-label="Side navigation"
        className="top-0 bottom-0 left-0 z-40 flex w-72 h-full flex-col bg-white shadow-lg transition-transform lg:translate-x-0"
      >
        <div className="flex flex-col items-center gap-4 p-6">
          <div className="shrink-0">
            <a
              href="#"
              className="relative flex h-20 w-20 items-center justify-center rounded-full text-white"
            >
              <img
                src={images.logo}
                alt="user name"
                title="user name"
                className="w-full h-full"
              />
            </a>
          </div>
          <div className="flex min-h-[2rem] w-full min-w-0 flex-col items-start justify-center gap-0 text-center">
            <h4 className="w-full truncate text-slate-700 font-bold text-2xl">
              Selapak
            </h4>
          </div>
        </div>
        <nav
          aria-label="side navigation"
          className="flex-1 divide-y divide-slate-100 overflow-auto"
        >
          <div>
            <ul className="flex flex-1 flex-col gap-1 py-3">
              <li className="px-3">
                <Link
                  to={`/dashboard`}
                  className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-neutral-50 hover:text-neutral-500 focus:bg-neutral-50 aria-[current=page]:bg-neutral-50 aria-[current=page]:text-neutral-500 "
                >
                  <div className="flex items-center self-center">
                    <Squares2X2Icon className="h-6 w-6" />
                  </div>
                  <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                    Dashboard
                  </div>
                </Link>
              </li>
              <li className="px-3">
                <Link
                  to={`/dashboard/owner`}
                  className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-neutral-50 hover:text-neutral-500 focus:bg-neutral-50 aria-[current=page]:bg-neutral-50 aria-[current=page]:text-neutral-500 "
                >
                  <div className="flex items-center self-center ">
                    <UsersIcon className="h-6 2-6" />
                  </div>
                  <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                    Pemilik Lahan
                  </div>
                </Link>
              </li>
              <li className="px-3">
                <Link
                  to={`/dashboard/land`}
                  className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-neutral-50 hover:text-neutral-500 focus:bg-neutral-50 aria-[current=page]:bg-neutral-50 aria-[current=page]:text-neutral-500 "
                >
                  <div className="flex items-center self-center ">
                    <BuildingOfficeIcon className="h-6 2-6" />
                  </div>
                  <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                    Lahan
                  </div>
                </Link>
              </li>
              <li className="px-3">
                <Link
                  to={`/dashboard/umkm`}
                  className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-neutral-50 hover:text-neutral-500 focus:bg-neutral-50 aria-[current=page]:bg-neutral-50 aria-[current=page]:text-neutral-500 "
                >
                  <div className="flex items-center self-center ">
                    <BuildingStorefrontIcon className="h-6 w-6" />
                  </div>
                  <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                    UMKM
                  </div>
                </Link>
              </li>
              <li className="px-3">
                <Link
                  to={`/dashboard/transaction`}
                  className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-neutral-50 hover:text-neutral-500 focus:bg-neutral-50 aria-[current=page]:bg-neutral-50 aria-[current=page]:text-neutral-500 "
                >
                  <div className="flex items-center self-center ">
                    <CalculatorIcon className="h-6 w-6" />
                  </div>
                  <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                    Transaksi
                  </div>
                </Link>
              </li>
              {localStorage.getItem("role") === "ROLE_SUPER_ADMIN" && (
                <li className="px-3">
                  <Link
                    to={`/dashboard/admin`}
                    className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-neutral-50 hover:text-neutral-500 focus:bg-neutral-50 aria-[current=page]:bg-neutral-50 aria-[current=page]:text-neutral-500 "
                  >
                    <div className="flex items-center self-center">
                      <UserIcon className="h-6 w-6" />
                    </div>
                    <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                      Admin
                    </div>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </nav>
        <footer className="border-t border-slate-200 p-3">
          <a
            href="#"
            className="flex items-center gap-3 rounded p-3 text-slate-900 transition-colors hover:text-neutral-500 "
          >
            <div className="flex items-center self-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
                aria-label="Dashboard icon"
                role="graphics-symbol"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div
              onClick={handleLogout}
              className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm font-medium"
            >
              Logout
            </div>
          </a>
        </footer>
      </aside>
    </>
  );
};

export default AppSideBar;

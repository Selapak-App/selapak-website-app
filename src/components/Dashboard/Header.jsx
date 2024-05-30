import { Cog6ToothIcon } from "@heroicons/react/16/solid";
import { Dropdown } from "flowbite-react";
import { useDispatch } from "react-redux";
import { logout } from "../../pages/Auth/slice/AuthSlice";

const Header = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout);
    localStorage.clear();
    window.location.replace("/");
  };
  return (
    <div className="w-full border-b shadow-lg border-b-1 border-slate-200 bg-white/90 shadow-slate-700/5">
      <div className="flex justify-end p-4 items-center">
        <Dropdown
          size="md"
          renderTrigger={() => (
            <span>
              <button>
                <Cog6ToothIcon className="h-6 w-6" />
              </button>
            </span>
          )}
        >
          <Dropdown.Item onClick={handleLogout}>Sign Out</Dropdown.Item>
        </Dropdown>
      </div>
    </div>
  );
};

export default Header;

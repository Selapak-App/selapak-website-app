import { Cog6ToothIcon } from "@heroicons/react/16/solid";

const Header = () => {
  return (
    <div className="w-full border-b shadow-lg border-b-1 border-slate-200 bg-white/90 shadow-slate-700/5">
      <div className="flex justify-end p-4">
        <button>
          <Cog6ToothIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default Header;

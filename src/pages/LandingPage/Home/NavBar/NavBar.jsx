import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<div className="h-[10vh] font-poppins z-50 flex justify-between items-center bg-white text-dark w-full shadow-lg fixed px-container">
			<Link to={"/landing"}>
				<h2 className="text-2xl font-bold font-poppins">Selapak.</h2>
			</Link>
            <div className="flex justify-between gap-10">
                <Link to={"/about"} className="group flex flex-col gap-1">
                    <button>Tentang Kami</button>
                    <div className="bg-secondary h-0.5 w-0 group-hover:w-3/4 ease-in-out transition-all duration-300" />
                </Link>
                <Link to={"/lapak"} className="group flex flex-col gap-1">
                    <button>Mitra Lapak</button>
                    <div className="bg-secondary h-0.5 w-0 group-hover:w-3/4 ease-in-out transition-all duration-300" />
                </Link>
                <Link to={"#"} className="group flex flex-col gap-1">
                    <button>Mitra UMKM</button>
                    <div className="bg-secondary h-0.5 w-0 group-hover:w-3/4 ease-in-out transition-all duration-300" />
                </Link>
            </div>
		</div>
	);
};

export default NavBar;

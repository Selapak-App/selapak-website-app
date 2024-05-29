import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<div className="h-[10vh] font-poppins flex items-center backdrop-blur-md text-white w-full shadow-2xl fixed px-container">
			<Link to={"/"} className="flex-1">
				<h2 className="text-2xl font-bold font-poppins">Selapak.</h2>
			</Link>
            <div className="flex-1 flex justify-between">
                <Link to={"#a"} className="group flex flex-col gap-1">
                    <button>Gabung Mitra</button>
                    <div className="bg-secondary h-0.5 w-0 group-hover:w-3/4 ease-in-out transition-all duration-300" />
                </Link>
                <Link to={"#"} className="group flex flex-col gap-1">
                    <button>Tentang Kami</button>
                    <div className="bg-secondary h-0.5 w-0 group-hover:w-3/4 ease-in-out transition-all duration-300" />
                </Link>
                <Link to={"#"} className="group flex flex-col gap-1">
                    <button>Kontak Kami</button>
                    <div className="bg-secondary h-0.5 w-0 group-hover:w-3/4 ease-in-out transition-all duration-300" />
                </Link>
            </div>
			<Link to={"/"} className="flex-1">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 16 16"
					fill="currentColor"
					className="size-8 ms-auto"
				>
					<path
						fillRule="evenodd"
						d="M1.75 2a.75.75 0 0 0 0 1.5H2v9h-.25a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 .75-.75v-1.5a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75v1.5c0 .414.336.75.75.75h.5a.75.75 0 0 0 .75-.75V3.5h.25a.75.75 0 0 0 0-1.5h-7.5ZM3.5 5.5A.5.5 0 0 1 4 5h.5a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5v-.5Zm.5 2a.5.5 0 0 0-.5.5v.5A.5.5 0 0 0 4 9h.5a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5H4Zm2-2a.5.5 0 0 1 .5-.5H7a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-.5.5h-.5A.5.5 0 0 1 6 6v-.5Zm.5 2A.5.5 0 0 0 6 8v.5a.5.5 0 0 0 .5.5H7a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5h-.5ZM11.5 6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.75a.75.75 0 0 0 0-1.5H14v-5h.25a.75.75 0 0 0 0-1.5H11.5Zm.5 1.5h.5a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5H12a.5.5 0 0 1-.5-.5V8a.5.5 0 0 1 .5-.5Zm0 2.5a.5.5 0 0 0-.5.5v.5a.5.5 0 0 0 .5.5h.5a.5.5 0 0 0 .5-.5v-.5a.5.5 0 0 0-.5-.5H12Z"
						clipRule="evenodd"
					/>
				</svg>
			</Link>
		</div>
	);
};

export default NavBar;

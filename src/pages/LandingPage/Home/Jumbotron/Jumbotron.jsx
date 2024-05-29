import { Link } from "react-router-dom";

const Jumbotron = () => {
	return (
		<div className="bg-jumboImg bg-cover bg-center">
			<div className="h-screen bg-dark bg-opacity-50 flex items-center ps-[144px] pe-[144px]">
				<div className="max-w-[820px] flex flex-col gap-6">
					<h1 className="text-6xl font-raleway text-white font-bold">
						Tumbuhkan Cita-Cita Anda di Lahan Terbaik
					</h1>
					<div className="flex flex-row gap-6 font-poppins">
						<Link to={"#id"}>
							<button className="border-2 border-white text-white hover:text-primaryDark ease-in-out transition duration-300 hover:bg-white hover:shadow-lg  text-xl rounded-xl p-4 w-44">
								Gabung
							</button>
						</Link>
						<Link to={"#id"}>
							<button className="border-2 border-primary bg-primary text-white hover:border-white hover:text-primaryDark ease-in-out transition duration-300 hover:bg-white hover:shadow-lg  text-xl rounded-xl p-4 w-44">
								Cari Lapak
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Jumbotron;

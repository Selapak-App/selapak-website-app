import { Link } from "react-router-dom";
import images from "../../../../assets/images";
import Cta from "../Cta/Cta";
const ADMIN_PHONE = import.meta.env.VITE_ADMIN_PHONE;

const Footer = () => {
	return (
		<>
			<div className="h-[70vh] bg-black p-10 px-28 text-white font-poppins">
				{/* <div className="h-[70vh] bg-dark p-10 px-28 text-white"> */}
				{/* <div className="h-[70vh] bg-primaryDark p-10 px-28 text-white"> */}
				<Cta />
				<div className="h-5/6 flex flex-col justify-between items-center">
					<div className="w-full flex mt-10 justify-between">
						<div className="w-1/2 flex flex-col gap-4">
							<img src={images.logoWebWhite} className="w-1/3" />
							<div className="h-0.5 w-2/3 bg-accent" />
							<p className="w-2/3">
								Penyedia lahan yang strategis, terpercaya, aman,
								dan berpotensi tinggi untuk mengembangkan bisnis
								UMKM
							</p>
						</div>
						<div className="w-1/3">
							<h3 className="font-poppins font-semibold text-2xl">
								Kontak Kami
							</h3>
							<div className="h-0.5 w-2/3 mt-8 mb-4 bg-accent" />
							<p className="w-2/3">
								Jl. Topaz 7, Tlogomas, Lowokwaru, Malang, 65144
							</p>
							<div className="flex gap-3 pt-4">
								<Link
									to={`https://wa.me/${ADMIN_PHONE}`}
									className="p-0.5 rounded-full w-9"
									target="_blank"
								>
									<img src={images.whatsapp} />
								</Link>
								<Link
									to={"https://instagram.com/dhandiyy"}
									className="rounded-full w-9"
									target="_blank"
								>
									<img src={images.instagram} />
								</Link>
								<Link
									to={"mailto:selapak.app@gmail.com"}
									className="rounded-full w-10"
									target="_blank"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 16 16"
										fill="currentColor"
										className="size-10"
									>
										<path
											fillRule="evenodd"
											d="M11.89 4.111a5.5 5.5 0 1 0 0 7.778.75.75 0 1 1 1.06 1.061A7 7 0 1 1 15 8a2.5 2.5 0 0 1-4.083 1.935A3.5 3.5 0 1 1 11.5 8a1 1 0 0 0 2 0 5.48 5.48 0 0 0-1.61-3.889ZM10 8a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z"
											clipRule="evenodd"
										/>
									</svg>
								</Link>
							</div>
						</div>
					</div>
					<div>
						Copyright &copy; 2024 - Powered By
						<span className="font-semibold"> Selapak Team</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;

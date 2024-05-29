import { Link } from "react-router-dom";
import images from "../../../../assets/images";
const ADMIN_PHONE = import.meta.env.VITE_ADMIN_PHONE;

const Cta = () => {
	return (
		<div className="w-full shadow-sm flex justify-center font-poppins">
			<div className="max-w-[960px] w-full h-28 bg-primary -mt-24 mb-8 rounded-2xl shadow-2xl p-5 flex justify-between items-center">
				<div className="flex items-center gap-3">
					<img src={images.whatsapp} className="w-12" />
					<h3 className="font-semibold text-white text-2xl">
						Konsultasikan Bisnis Anda!
					</h3>
				</div>
				<Link
					to={`https://wa.me/${ADMIN_PHONE}?text=Halo%20Admin%20Selapak!%20Saya%20ingin%20konsultasi%20Bisnis%2FLapak%20saya.`}
					target="_blank"
				>
					<button className="rounded-lg border ease-in-out transition-all duration-300 border-white text-white hover:bg-white hover:text-dark py-3 px-6">
						Hubungi admin
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Cta;

import { Link } from "react-router-dom";
import images from "../../../../assets/images";

const Product = () => {
	return (
		<div className="flex justify-center items-center h-[100vh] px-container bg-jumboShake bg-cover bg-fixed">
			<div className="h-[55vh] w-full bg-white rounded-3xl p-10 flex gap-20 justify-between items-center shadow-2xl">
				<div className="w-2/3 flex flex-col gap-8">
					<div className="flex gap-10 group">
						<div className="w-2 bg-primary group-hover:w-5 ease-in-out transition-all duration-300" />
						<h3 className="font-raleway font-bold text-5xl">
							Selapak App
						</h3>
					</div>
					<p className="font-poppins text-lg text-justify">
						Solusi terdepan bagi para pelaku UMKM, menyediakan
						layanan komprehensif mulai dari pencarian lokasi
						strategis hingga menjamin keamanan dan kenyamanan.
						Dengan Selapak, Anda dapat dengan mudah menemukan tempat
						berjualan yang sesuai dengan kebutuhan bisnis Anda,
						tanpa perlu khawatir tentang keamanan dan legalitas
						lahan.
					</p>
					<Link to={"/"} className="bg-black rounded-md w-1/4">
						<img
							src={images.playstore}
							alt="playstore icon"
							className=""
						/>
					</Link>
				</div>
				<div className="w-1/3">
					<img
						src={images.phone}
						alt="phone"
						className="relative h-full"
					/>
				</div>
			</div>
		</div>
	);
};

export default Product;

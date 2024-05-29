import { Link } from "react-router-dom";
import images from "../../../../assets/images";

const JoinMitra = () => {
	return (
		<div className="h-[80vh] px-container flex justify-center items-center font-poppins">
			<div className="max-w-[840px] flex flex-col gap-12">
				<div className="pb-5">
					<h2 className="text-center font-bold text-5xl font-raleway">
						Join Mitra
					</h2>
				</div>
				<div className="flex gap-10">
					<div className="flex-1 flex flex-col gap-4">
						<div className="size-16 bg-secondary rounded-xl p-3 animate-bounce">
							<img src={images.umkmIcon} />
						</div>
						<h3 className="font-raleway text-2xl font-bold">
							Mitra UMKM
						</h3>
						<p>
							Jadilah bagian dari revolusi penyewaan lahan! Dengan
							bergabung bersama kami, Anda dapat mengoptimalkan
							potensi lahan dan penghasilan tambahan dengan mudah.
						</p>
						<Link to={"#"} className="mt-4">
							<buton className="py-2 px-6 bg-dark text-white hover:ps-12 ease-in-out transition-all duration-300 rounded-3xl">
								Bergabung
							</buton>
						</Link>
					</div>
					<div className="flex-1 flex flex-col gap-4">
						<div className="size-16 bg-primary rounded-xl p-3 animate-bounce">
							<img src={images.plotIcon} />
						</div>
						<h3 className="font-raleway text-2xl font-bold">
							Mitra Lahan
						</h3>
						<p>
							Tak perlu khawatir akan penipuan atau keamanan yang
							diragukan lagi! Kami hadir sebagai solusi bagi para
							UMKM untuk menyewa lahan dengan percaya diri.
						</p>
						<Link to={"#"} className="mt-4">
							<buton className="py-2 px-6 bg-dark text-white hover:ps-12 ease-in-out transition-all duration-300 rounded-3xl">
								Bergabung
							</buton>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default JoinMitra;

import images from "../../../../assets/images";

const Requirement = () => {
	return (
		<div className="h-[120vh] mb-48 flex flex-col justify-center items-center px-container">
			<div className="max-w-[1080px] flex flex-col gap-5 ">
				<h2 className="font-raleway font-bold text-6xl text-center mb-5">
					Syarat Menjadi Mitra Lapak
				</h2>
				<div className="flex gap-5 text-white font-poppins">
					<div className="group">
						<div className="rounded-3xl bg-primaryDark p-6 h-fit">
							<h3 className="font-bold font-raleway text-3xl mb-8 flex gap-4">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="size-9"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
									/>
								</svg>

								<p>Mitra</p>
							</h3>
							<p>
								Warga negara indonesia Umur minimum 18 tahun dan
								maksimum 70 tahun pada saat pendaftaran
							</p>
						</div>
						<div className="bg-accent w-full h-4 rounded-3xl mt-2 group-hover:h-20 ease-in-out duration-300 transition-all" />
					</div>

					<div className="rounded-3xl bg-secondary p-6 hover:pt-20 ease-in-out duration-300 transition-all">
						<h3 className="font-bold font-raleway text-3xl mb-8 flex gap-4">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="size-9"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
								/>
							</svg>

							<p>Dokumen</p>
						</h3>
						<ul>
							<li className="list-disc ms-5 text-justify">
								<span className="font-semibold">e-KTP </span>
								asli pemilik tanah
							</li>
							<li className="list-disc ms-5 text-justify">
								<span className="font-semibold">
									Surat Keterangan Penguasaan Tanah (SPKT){" "}
								</span>
								Surat yang menyatakan bahwa seseorang menguasai
								dan memanfaatkan tanah tersebut
							</li>
							<li className="list-disc ms-5 text-justify">
								<span className="font-semibold">
									Surat Keterangan Tidak Sengketa:{" "}
								</span>
								Surat yang menyatakan bahwa tanah tersebut tidak
								sedang dalam sengketa atau perkara hukum
							</li>
							<li className="list-disc ms-5 text-justify">
								<span className="font-semibold">
									Sertifikat Hak Milik:{" "}
								</span>{" "}
								Bukti kepemilikan tanah yang paling kuat dan
								diakui secara hukum di Indonesia.
							</li>
						</ul>
					</div>

					<div className="group">
						<div className="rounded-3xl bg-primary p-6 h-fit">
							<h3 className="font-bold font-raleway text-3xl mb-8 flex gap-4">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="size-9"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
									/>
								</svg>

								<p>Lahan</p>
							</h3>
							<p>
								Hanya Lahan yang Dijaga dengan Baik yang Dapat
								Diterima. Tidak Diperbolehkan Lahan yang
								Berlumpur, Rimbun, atau Terbengkalai.
							</p>
						</div>
						<div className="bg-dark w-full h-4 rounded-3xl mt-2 group-hover:h-20 ease-in-out duration-300 transition-all" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Requirement;

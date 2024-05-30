const Requirement = () => {
	return (
		<div className="h-[120vh] flex flex-col gap-5 mb-72 justify-center items-center px-container">
			<div className="max-w-[1080px]">
				<h2 className="font-raleway font-bold text-6xl max-w-[840px] text-center mb-5">
					Syarat Menjadi Mitra Lapak
				</h2>
				<div className="flex gap-5 text-white font-poppins">
					<div className="rounded-3xl bg-primaryDark p-6">
						<h3 className="font-bold font-raleway text-3xl mb-8 flex gap-4">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 16 16"
								fill="currentColor"
								className="size-9"
							>
								<path
									fillRule="evenodd"
									d="m7.539 14.841.003.003.002.002a.755.755 0 0 0 .912 0l.002-.002.003-.003.012-.009a5.57 5.57 0 0 0 .19-.153 15.588 15.588 0 0 0 2.046-2.082c1.101-1.362 2.291-3.342 2.291-5.597A5 5 0 0 0 3 7c0 2.255 1.19 4.235 2.292 5.597a15.591 15.591 0 0 0 2.046 2.082 8.916 8.916 0 0 0 .189.153l.012.01ZM8 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
									clipRule="evenodd"
								/>
							</svg>
							<p>Mitra</p>
						</h3>
						<p>
							Warga negara indonesia Umur minimum 18 tahun dan
							maksimum 70 tahun pada saat pendaftaran
						</p>
					</div>
					<div className="rounded-3xl bg-accent p-6">
						<h3 className="font-bold font-raleway text-3xl mb-8 flex gap-4">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 16 16"
								fill="currentColor"
								className="size-9"
							>
								<path
									fillRule="evenodd"
									d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3Zm9 3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-6.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM11.5 6A.75.75 0 1 1 13 6a.75.75 0 0 1-1.5 0Z"
									clipRule="evenodd"
								/>
								<path d="M13 11.75a.75.75 0 0 0-1.5 0v.179c0 .15-.138.28-.306.255A65.277 65.277 0 0 0 1.75 11.5a.75.75 0 0 0 0 1.5c3.135 0 6.215.228 9.227.668A1.764 1.764 0 0 0 13 11.928v-.178Z" />
							</svg>
							<p>Harga terjangkau</p>
						</h3>
						<p>
							Dapatkan lahan ideal dengan harga sewa yang
							kompetitif dan sesuai dengan anggaran UMKM Anda.
						</p>
					</div>
					<div className="rounded-3xl bg-primary p-6">
						<h3 className="font-bold font-raleway text-3xl mb-8 flex gap-4">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 16 16"
								fill="currentColor"
								className="size-9"
							>
								<path
									fillRule="evenodd"
									d="M8.5 1.709a.75.75 0 0 0-1 0 8.963 8.963 0 0 1-4.84 2.217.75.75 0 0 0-.654.72 10.499 10.499 0 0 0 5.647 9.672.75.75 0 0 0 .694-.001 10.499 10.499 0 0 0 5.647-9.672.75.75 0 0 0-.654-.719A8.963 8.963 0 0 1 8.5 1.71Zm2.34 5.504a.75.75 0 0 0-1.18-.926L7.394 9.17l-1.156-.99a.75.75 0 1 0-.976 1.138l1.75 1.5a.75.75 0 0 0 1.078-.106l2.75-3.5Z"
									clipRule="evenodd"
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
				</div>
			</div>
		</div>
	);
};

export default Requirement;

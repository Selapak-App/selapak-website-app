const Jumbotron = () => {
	return (
		<div className={`bg-jumboMarket bg-cover bg-center`}>
			<div className="h-screen pt-[10vh] bg-dark bg-opacity-50 flex items-center px-container">
				<div className="max-w-[820px] flex flex-col gap-6">
					<h1 className="text-6xl font-raleway text-white font-bold">
						Siap bantu selesaikan masalah!
					</h1>
					<p className="font-poppins text-white text-xl">
						Ribuan mitra lahan gabung dengan Selapak, ningkatin
						penghasilan mereka. Sekarang, giliran Anda! Bergabunglah
						dan raih sukses bersama.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Jumbotron;

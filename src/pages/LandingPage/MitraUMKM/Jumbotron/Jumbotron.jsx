const Jumbotron = () => {
	return (
		<div className={`bg-jumboShake2 bg-cover bg-center`}>
		<div className="h-screen pt-[10vh] bg-dark bg-opacity-50 flex items-center px-container">
			<div className="max-w-[820px] flex flex-col gap-6">
				<h1 className="text-6xl font-raleway text-white font-bold">
					Tertarik bergabung menjadi mitra UMKM?
				</h1>
				<p className="font-poppins text-white text-xl">
					Yuk, cari tahu tata cara pendaftarannya.
				</p>
			</div>
		</div>
	</div>
	);
};

export default Jumbotron;

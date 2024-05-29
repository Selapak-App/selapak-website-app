import images from "../../../../assets/images";

const About = () => {
	return (
		<div className="h-[120vh] py-20 px-container flex items-center justify-center gap-10">
			<div className="w-1/3">
				<img src={images.ambassador} className="" />
			</div>
			<div className="w-2/3 flex flex-col gap-5">
				<h3 className="font-raleway font-bold text-6xl">Selapak</h3>
				<div className="w-2/3 h-0.5 bg-accent" />
				<p className="text-justify">
					UMKM merupakan pilar terpenting dalam perekonomian
					Indonesia. Berdasarkan data Kementerian Koperasi dan UKM,
					jumlah UMKM pada tahun 2023 mencapai 64,2 juta dengan
					kontribusi terhadap PDB sebesar 61,07% atau senilai 8.573,89
					triliun rupiah. Kontribusi UMKM terhadap perekonomian
					Indonesia meliputi kemampuan menyerap 97% dari total tenaga
					kerja yang ada serta dapat menghimpun sampai 60,4% dari
					total investasi.
				</p>
				<p className="text-justify">
					Namun, tingginya jumlah UMKM di Indonesia juga tidak
					terlepas dari tantangan yang ada, seperti keterbatasan akses
					terhadap pembiayaan, perizinan, promosi, kurangnya inovasi
					dan teknologi, serta kesulitan dalam pemasaran produk.
					Selain itu, UMKM juga rentan terhadap perubahan kondisi
					ekonomi dan persaingan yang semakin ketat. Oleh karena itu
					kami percaya tempat penjualan UMKM akan sangat membantu
					sebagian besar tantangan yang ada.
				</p>
				<p className="text-justify">
					Kami menyediakan lahan yang strategis, terpercaya, aman, dan
					berpotensi tinggi untuk mengembangkan bisnis UMKM Anda.
					Dengan berbagai pilihan lokasi yang tersebar di area
					strategis, Anda dapat memilih lahan yang paling sesuai
					dengan kebutuhan dan tipe bisnis Anda.
				</p>
			</div>
		</div>
	);
};

export default About;

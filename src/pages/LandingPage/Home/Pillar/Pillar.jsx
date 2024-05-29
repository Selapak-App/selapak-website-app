import images from "../../../../assets/images";

const Pillar = () => {
	return (
		<div className="h-[100vh] px-container pb-[10vh] flex justify-center items-center font-poppins">
			<div className="max-w-[840px] flex flex-col gap-12 justify-center items-center">
				<div className="pb-5">
					<h2 className="text-center font-medium text-5xl font-raleway">
						3 Pillar of <span className="font-bold">Selapak</span>
					</h2>
				</div>
				<div className="flex gap-10">
					<div className="size-72 rounded-xl bg-primary text-white flex flex-col justify-between items-center">
						<div className="m-5 w-5/6 flex flex-col gap-3">
							<h3 className="font-poppins font-semibold text-3xl">
								Hope
							</h3>
							<div className="h-0.5 bg-primaryDark" />
							<p>Take advantage of new opportunities</p>
						</div>
						<img src={images.pillar2} className="w-2/3 -mb-1" />
					</div>
					<div className="size-72 rounded-xl bg-secondary text-white flex flex-col justify-between items-center">
						<div className="m-5 w-5/6 flex flex-col gap-3">
							<h3 className="font-poppins font-semibold text-3xl">
								Growth
							</h3>
							<div className="h-0.5 bg-primaryDark" />
							<p>Stimulate positive transformation</p>
						</div>
						<img src={images.pillar1} />
					</div>
					<div className="size-72 rounded-xl bg-accent text-white flex flex-col justify-between items-center">
						<div className="m-5 w-5/6 flex flex-col gap-3">
							<h3 className="font-poppins font-semibold text-3xl">
								Trust
							</h3>
							<div className="h-0.5 bg-primaryDark" />
							<p>Help, care, and protect</p>
						</div>
						<img src={images.pillar3} className="w-2/3" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Pillar;

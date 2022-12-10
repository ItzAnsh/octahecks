export default function Sponsors() {
	return (
		<section
			id="Sponsors"
			className="h-screen 2xl:h-fit xl:h-screen lg:h-fit md:h-fit sm:h-fit max-sm:h-fit bg-[length:100%_100%] mt-40 ml-0 z-10"
		>
			<div className="grid grid-cols-12">
				<div className="col-span-1"></div>

				<div className="col-span-11">
					<div className="grid grid-cols-12">
						<div className="col-span-12 text-7xl w-full">
							<div className="text-light text-white text-fruBold w-fit mx-auto sponsorsHead">
								Our
								<span className="bg-gradient-to-r from-indigo-400 via-pink-300 to-rose-400 bg-clip-text text-transparent text-left text-fruBold mx-auto mx-3">
									Awesome
								</span>
								Sponsors
							</div>
						</div>
					</div>

					<div className="grid grid-cols-12"></div>
				</div>
			</div>
		</section>
	);
}

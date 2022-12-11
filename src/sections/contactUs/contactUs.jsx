import { ReactComponent as ContactUsSVG } from "../../assets/media/contactUs/ContactUsSVG.svg";

export default function Contact() {
	return (
		<section
			id="ContactUs"
			className="h-screen 2xl:h-fit xl:h-screen lg:h-fit md:h-fit sm:h-fit max-sm:h-fit bg-[length:100%_100%] mt-40 ml-0 z-10"
		>
			<div className="container mx-auto">
				<div className="grid grid-cols-12">
					<div className="col-span-1"></div>

					<div className="col-span-11">
						<div className="grid grid-cols-12">
							<div className="col-span-12">
								<div className="bg-gradient-to-r from-indigo-400 via-pink-300 to-rose-400 bg-clip-text text-transparent text-7xl text-fruBold w-fit text-left mx-auto">
									Contact Us
								</div>
							</div>
						</div>

						<div className="grid grid-cols-12">
							<div className="col-span-12 lg:col-span-12 md:col-span-11 max-md:col-span-11 mt-12">
								<div className="subTextTracks">
									<p className="text-white text-left text-xl border-l-2 pl-4">
										Octahacks has developed at a massive rate and positions for
										participants, mentors, judges and sponsorships are open now!
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-1">
				<ContactUsSVG />
			</div>
		</section>
	);
}

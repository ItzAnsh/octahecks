import "./tracks.css";
import SecuritySvg from "../../assets/media/tracks/securitySvg.svg";
import FintechSvg from "../../assets/media/tracks/fintechSvg.svg";
import Rocket2Svg from "../../assets/media/tracks/rocket2Svg.svg";

export default function Tracks() {
	return (
		<section id="Tracks" className="h-screen bg-[length:100%_100%] mt-2">
			<div className="container mx-auto">
				<div className="grid grid-cols-12">
					<div></div>

					<div className="col-span-11">
						<div className="grid grid-cols-12">
							<div className="col-span-12">
								<div className="title mx-none md:mx-auto max-md:mx-auto">
									<div className="bg-gradient-to-r from-indigo-400 via-pink-300 to-rose-400 bg-clip-text text-transparent text-7xl text-fruBold w-fit text-left mx-auto">
										Tracks
									</div>
								</div>
							</div>

							<div className="col-span-12 lg:col-span-12 md:col-span-11 max-md:col-span-11 mt-12">
								<div className="subTextTracks">
									<p className="text-white text-left text-2xl border-l-2 pl-4">
										As the name suggests, Octahacks comprises 8 themes or impact
										areas to help spark your ideas. Remember that you're welcome
										to build the prototype with the technologies of your choice,
										so feel free to use any technology and think outside the box
										too!!
									</p>
								</div>
							</div>

							<div className="col-span-12 lg:col-span-12 md:col-span-11 max-md:col-span-11">
								<div className="grid grid-cols-4 lg:grid-cols-4 md:grid-cols-2 max-md:grid-cols-2 sm:grid-cols-1 max-sm:grid-cols-1 gap-8 mt-12">
									<div className="col-span-1 rounded-3xl p-0.5 trackCards bg-gradient-to-br from-rose-400 via-pink-300 to-indigo-400">
										<div className="grid grid-cols-2 grid-rows-2 bg-[#08051f] p-4 rounded-3xl">
											<div className="row-span-2 col-span-2">
												<div className="headTracks text-white text-fruBold text-2xl text-left">
													SECURITY
												</div>
												<div className="descriptionTracks text-white mt-4 text-left col-span-2">
													Security-related issues are growing. The programs for
													public safety lack and also the increased use of
													automated technologies is also driving an increase in
													the advancement of the need for proper security
													systems.
													<br className="hidden xxl:hidden xl:block lg:block max-lg:block" />
												</div>
											</div>
											<div className="row-span-3 col-span-2">
												<div className="grid grid-cols-2">
													<div className="text-3xl text-white text-left">1</div>
													<div className="">
														<img src={SecuritySvg} alt="" />
													</div>
												</div>
											</div>
										</div>
									</div>

									<div className="col-span-1 rounded-3xl p-0.5 trackCards bg-gradient-to-br from-rose-400 via-pink-300 to-indigo-400">
										<div className="grid grid-cols-2 grid-rows-2 bg-[#08051f] p-4 rounded-3xl">
											<div className="row-span-2 col-span-2">
												<div className="headTracks text-white text-fruBold text-2xl text-left">
													FINTECH
												</div>
												<div className="descriptionTracks text-white mt-4 text-left col-span-2">
													From mobile payments to internet banking, an increased
													number of consumers are adopting fintech solutions
													today, and therefore there are a lot of exciting
													career options in this space.
													<br />
													<br />
													<br className="hidden xxl:hidden xl:block lg:block max-lg:block" />
													<br className="hidden xxl:hidden xl:block lg:block max-lg:block" />
												</div>
											</div>
											<div className="row-span-3 col-span-2">
												<div className="grid grid-cols-2">
													<div className="text-3xl text-white text-left">2</div>
													<div className="">
														<img src={FintechSvg} alt="" />
													</div>
												</div>
											</div>
										</div>
									</div>

									<div className="col-span-1 rounded-3xl p-0.5 trackCards bg-gradient-to-br from-rose-400 via-pink-300 to-indigo-400">
										<div className="grid grid-cols-2 grid-rows-2 bg-[#08051f] p-4 rounded-3xl">
											<div className="row-span-2 col-span-2">
												<div className="headTracks text-white text-fruBold text-2xl text-left">
													AGRICULTURE
												</div>
												<div className="descriptionTracks text-white mt-4 text-left col-span-2">
													Technology is advancing at a breakneck pace. However,
													this progress has harmed our natural environment. More
													solutions are needed to help save mother nature.
													<br />
													<br />
													<br className="hidden xxl:hidden xl:block lg:block max-lg:block" />
													<br className="hidden xxl:hidden xl:block lg:block max-lg:block" />
													<br className="hidden xxl:hidden xl:block lg:block max-lg:block" />
												</div>
											</div>
											<div className="row-span-3 col-span-2">
												<div className="grid grid-cols-2">
													<div className="text-3xl text-white text-left">3</div>
													<div className="">
														<img src={Rocket2Svg} alt="" />
													</div>
												</div>
											</div>
										</div>
									</div>

									<div className="col-span-1 rounded-3xl p-0.5 trackCards bg-gradient-to-br from-rose-400 via-pink-300 to-indigo-400">
										<div className="grid grid-cols-2 grid-rows-2 bg-[#08051f] p-4 rounded-3xl">
											<div className="row-span-2 col-span-2">
												<div className="headTracks text-white text-fruBold text-2xl text-left">
													HEALTH
												</div>
												<div className="descriptionTracks text-white mt-4 text-left col-span-2">
													As consumers become more aware of healthcare,
													technology solutions to improve patient care are
													becoming a top priority for many healthcare
													organisations.
													<br />
													<br />
													<br className="hidden xxl:hidden xl:block lg:block max-lg:block" />
													<br className="hidden xxl:hidden xl:block lg:block max-lg:block" />
												</div>
											</div>
											<div className="row-span-3 col-span-2">
												<div className="grid grid-cols-2">
													<div className="text-3xl text-white text-left">4</div>
													<div className="">
														<img src={FintechSvg} alt="" />
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="grid grid-cols-4 gap-8 lg:grid-cols-4 md:grid-cols-2 max-md:grid-cols-2 sm:grid-cols-1 max-sm:grid-cols-1 mt-8">
									<div className="col-span-1 rounded-3xl p-0.5 trackCards bg-gradient-to-br from-rose-400 via-pink-300 to-indigo-400">
										<div className="grid grid-cols-2 grid-rows-2 bg-[#08051f] p-4 rounded-3xl">
											<div className="row-span-2 col-span-2">
												<div className="headTracks text-white text-fruBold text-2xl text-left">
													SECURITY
												</div>
												<div className="descriptionTracks text-white mt-4 text-left col-span-2">
													Security-related issues are growing. The programs for
													public safety lack and also the increased use of
													automated technologies is also driving an increase in
													the advancement of the need for proper security
													systems.
												</div>
											</div>
											<div className="row-span-3 col-span-2">
												<div className="grid grid-cols-2">
													<div className="text-3xl text-white text-left">1</div>
													<div className="">
														<img src={SecuritySvg} alt="" />
													</div>
												</div>
											</div>
										</div>
									</div>

									<div className="col-span-1 rounded-3xl p-0.5 trackCards bg-gradient-to-br from-rose-400 via-pink-300 to-indigo-400">
										<div className="grid grid-cols-2 grid-rows-2 bg-[#08051f] p-4 rounded-3xl">
											<div className="row-span-2 col-span-2">
												<div className="headTracks text-white text-fruBold text-2xl text-left">
													FINTECH
												</div>
												<div className="descriptionTracks text-white mt-4 text-left col-span-2">
													From mobile payments to internet banking, an increased
													number of consumers are adopting fintech solutions
													today, and therefore there are a lot of exciting
													career options in this space.
													<br />
													<br />
												</div>
											</div>
											<div className="row-span-3 col-span-2">
												<div className="grid grid-cols-2">
													<div className="text-3xl text-white text-left">2</div>
													<div className="">
														<img src={FintechSvg} alt="" />
													</div>
												</div>
											</div>
										</div>
									</div>

									<div className="col-span-1 rounded-3xl p-0.5 trackCards bg-gradient-to-br from-rose-400 via-pink-300 to-indigo-400">
										<div className="grid grid-cols-2 grid-rows-2 bg-[#08051f] p-4 rounded-3xl">
											<div className="row-span-2 col-span-2">
												<div className="headTracks text-white text-fruBold text-2xl text-left">
													Agriculture
												</div>
												<div className="descriptionTracks text-white mt-4 text-left col-span-2">
													Technology is advancing at a breakneck pace. However,
													this progress has harmed our natural environment. More
													solutions are needed to help save mother nature.
													<br />
													<br />
													<br />
												</div>
											</div>
											<div className="row-span-3 col-span-2">
												<div className="grid grid-cols-2">
													<div className="text-3xl text-white text-left">3</div>
													<div className="">
														<img src={Rocket2Svg} alt="" />
													</div>
												</div>
											</div>
										</div>
									</div>

									<div className="col-span-1 rounded-3xl p-0.5 trackCards bg-gradient-to-br from-rose-400 via-pink-300 to-indigo-400">
										<div className="grid grid-cols-2 grid-rows-2 bg-[#08051f] p-4 rounded-3xl">
											<div className="row-span-2 col-span-2">
												<div className="headTracks text-white text-fruBold text-2xl text-left">
													HEALTH
												</div>
												<div className="descriptionTracks text-white mt-4 text-left col-span-2">
													As consumers become more aware of healthcare,
													technology solutions to improve patient care are
													becoming a top priority for many healthcare
													organisations.
													<br />
													<br />
													<br />
													<br />
												</div>
											</div>
											<div className="row-span-3 col-span-2">
												<div className="grid grid-cols-2">
													<div className="text-3xl text-white text-left">4</div>
													<div className="">
														<img src={FintechSvg} alt="" />
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

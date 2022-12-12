import Devfolio from "../../assets/media/sponsors/platinum/Devfolio.svg";
import Polygon from "../../assets/media/sponsors/platinum/polygon.svg";
import Tezos from "../../assets/media/sponsors/gold/tezos.svg";
import DigOcean from "../../assets/media/sponsors/gold/DigitalOcean_logo.svg";

export default function Sponsors() {
	return (
		<section
			id="Sponsors"
			className="h-screen 2xl:h-fit xl:h-screen lg:h-fit md:h-fit sm:h-fit max-sm:h-fit bg-[length:100%_100%] mt-40 ml-0 z-10"
		>
			<div className="grid grid-cols-12 container mx-auto">
				<div className="col-span-1 z-0"></div>

				<div className="col-span-11">
					<div className="grid grid-cols-12">
						<div className="col-span-12  w-full">
							<div className="text-light text-white text-fruBold w-fit mx-auto sponsorsHead text-6xl 2xl:text-7xl xl:text-7xl lg:text-7xl md:text-5xl sm:text-4xl xs:text-4xl">
								Our
								<br className="block 2xl:hidden xl:hidden lg:hidden md:block sm:block xs:block" />
								<span className="bg-gradient-to-r from-indigo-400 via-pink-300 to-rose-400 bg-clip-text text-transparent text-left text-fruBold mx-auto mx-3">
									Awesome
								</span>
								<br className="block 2xl:hidden xl:hidden lg:hidden md:block sm:block xs:block" />
								Sponsors
							</div>
						</div>
					</div>

					<div className="grid grid-cols-12">
						<div className="col-span-12 lg:col-span-12 md:col-span-11 max-md:col-span-11 mt-12">
							<div className="subTextTracks">
								<p className="text-white text-left border-l-2 pl-4 text-base 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-xl sm:text-base xs:text-base">
									While all our participants make our event lively. it is our
									very amazing sponsors that make it possible
								</p>
							</div>
						</div>
					</div>

					<div className="grid grid-cols-12 mt-24">
						<marquee className="col-span-12 z-100">
							<div className="sponsorsDiv flex flex-row w-[150vw] gap-x-8">
								<div className="platSponsors bg-[#d9d9d9]/10 w-96 flex flex-wrap justify-center items-center p-8 rounded-xl basis-1/5">
									<div className="platHeader text-white text-3xl basis-full">
										Platinum Sponsors
									</div>
									<img src={Devfolio} alt="" className="basis-full h-10 mt-6" />
									<img
										src={Polygon}
										alt=""
										className="basis-full mt-5 h-10 w-10"
									/>
								</div>

								<div className="platSponsors bg-[#d9d9d9]/10 w-96 flex flex-wrap justify-center items-center p-8 rounded-xl basis-1/5">
									<div className="platHeader text-white text-3xl basis-full">
										Gold Sponsors
									</div>
									<div className="logos flex flex-wrap mt-5 gap-x-8">
										<img
											src={require("../../assets/media/sponsors/gold/Filecoin.png")}
											alt=""
											className="w-32"
										/>
										<img src={Tezos} alt="" className="w-32" />
										<img
											src={require("../../assets/media/sponsors/gold/axure.png")}
											alt=""
											className="w-32 h-fit mt-3"
										/>
										<img
											src={require("../../assets/media/sponsors/gold/celo.png")}
											alt=""
											className="w-32 h-fit"
										/>
										<img src={DigOcean} alt="" className="w-20 h-fit" />
										<img
											src={require("../../assets/media/sponsors/gold/wolfram.png")}
											alt=""
											className="w-32 h-fit mt-2"
										/>
									</div>
								</div>

								<div className="platSponsors bg-[#d9d9d9]/10 w-96 justify-center items-center p-8 rounded-xl basis-1/4">
									<div className="platHeader text-white text-3xl basis-full">
										Premium Sponsors
									</div>
									<div className="logos flex flex-wrap mt-5 gap-x-8 gap-y-4">
										<img
											src={require("../../assets/media/sponsors/premium/airmeet.png")}
											alt=""
											className="w-32 h-fit"
										/>
										<img
											src={require("../../assets/media/sponsors/premium/solanaLogo.png")}
											alt=""
											className="w-32 h-fit"
										/>
										<img
											src={require("../../assets/media/sponsors/premium/sashido.png")}
											alt=""
											className="w-32 h-fit"
										/>
										<img
											src={
												require("../../assets/media/sponsors/premium/jbLogo.svg")
													.default
											}
											alt=""
											className="w-28 h-fit"
										/>
										<img
											src={require("../../assets/media/sponsors/premium/streamYard.png")}
											alt=""
											className="w-28 h-fit"
										/>
										<img
											src={require("../../assets/media/sponsors/premium/oreilly.png")}
											alt=""
											className="w-28 h-fit"
										/>
										<img
											src={require("../../assets/media/sponsors/premium/logo_taskade_black.png")}
											alt=""
											className="w-28 h-fit"
										/>
										<img
											src={require("../../assets/media/sponsors/premium/rosenfeld-logo.png")}
											alt=""
											className="w-28 h-fit"
										/>
										<img
											src={require("../../assets/media/sponsors/premium/balsamiq.png")}
											alt=""
											className="w-28 h-fit"
										/>
										<img
											src={require("../../assets/media/sponsors/premium/interviewCake.png")}
											alt=""
											className="w-28 h-fit"
										/>
									</div>
								</div>

								<div className="platSponsors bg-[#d9d9d9]/10 w-96 flex flex-wrap justify-center items-center p-8 rounded-xl basis-1/5">
									<div className="platHeader text-white text-3xl basis-full">
										Community Partners
									</div>
									<img src={Devfolio} alt="" className="basis-full h-10 mt-6" />
									<img
										src={Polygon}
										alt=""
										className="basis-full mt-5 h-10 w-10"
									/>
								</div>
							</div>
						</marquee>
					</div>
				</div>
			</div>
		</section>
	);
}

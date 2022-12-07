import Polygon from "../../assets/media/prizes/polygon.svg";
import Tezos from "../../assets/media/prizes/tezos.svg";
import Celo from "../../assets/media/prizes/celo.svg";

export default function Prizes() {
	return (
		<section id="Prizes" className="h-screen bg-[length:100%_100%] mt-40 ml-0">
			<div className="container mx-auto">
				<div className="grid grid-cols-12">
					<div className="col-span-1 block md:hidden sm:hidden"></div>

					<div className="col-span-11 md:col-span-12 sm:col-span-12 max-sm:col-span-12">
						<div className="grid grid-cols-12">
							<div className="col-span-12">
								<div className="title mx-none md:mx-auto max-md:mx-auto">
									<div className="bg-gradient-to-r from-indigo-400 via-pink-300 to-rose-400 bg-clip-text text-transparent text-7xl text-fruBold w-fit text-left mx-auto">
										Prizes
									</div>
								</div>
							</div>

							<div className="col-span-12 lg:col-span-12 md:col-span-11 max-md:col-span-11 mt-12">
								<div className="subTextPrizes">
									<p className="text-white text-left text-xl border-l-2 pl-4">
										Just to incentivise your hard work and effort over those 36
										hours we have prizes, cash rewards and more lined up for the
										top performers by our generous sponsors. Swags and goodies
										are for everyone but for the ones with the most creative and
										innovative projects we have more lined up!!
									</p>
								</div>
							</div>

							<div className="col-span-12 mt-24">
								<div className="grid xxl:grid-cols-12 xl:grid-cols-12 lg:grid-cols-12 md:grid-cols-7 sm:grid-cols-1 max-sm:grid-cols-1 max-sm:gap-y-16 sm:gap-y-16 md:gap-y-0 gap-y-0">
									<div className="col-span-2 md:col-span-1 block md:block sm:hidden max-sm:hidden"></div>
									<div className="col-span-4 text-white text-center">
										<p className="winnerText text-3xl">WINNER</p>
										<br />
										<p className="prizeMoney text-4xl">
											<b>₹</b> 15,000*
										</p>
										<br />
										<p className="extraPrizes text-2xl">
											+ Goodies upto <br /> ₹ 1 lakh
										</p>
										<br />
										<br />
										<p className="leading-none">
											<i class="fa-solid fa-chevron-up text-2xl"></i>
											<br />
											<i class="fa-solid fa-chevron-up text-2xl mt-[-10px]"></i>
										</p>
									</div>
									<div className="hidden xl:hidden lg:hidden md:block col-span-1"></div>
									<div className="hidden xl:hidden lg:hidden md:block col-span-1"></div>
									<div className="col-span-3 text-white text-center">
										<p className="winnerText text-3xl">1ST RUNNER UP</p>
										<br />
										<p className="prizeMoney text-4xl">
											<b>₹</b> 10,000*
										</p>
										<br />
										<p className="extraPrizes text-2xl">
											+ Goodies upto <br /> ₹ 75 Thousand
										</p>
										<br />
										<br />
										<p className="leading-none">
											<i class="fa-solid fa-chevron-up text-2xl"></i>
											<br />
											<i class="fa-solid fa-chevron-up text-2xl mt-[-10px]"></i>
										</p>
									</div>
									<div className="col-span-3 text-white text-center">
										<p className="winnerText text-3xl">2ND RUNNER UP</p>
										<br />
										<p className="prizeMoney text-4xl">
											<b>₹</b> 5,000*
										</p>
										<br />
										<p className="extraPrizes text-2xl">
											+ Goodies upto <br /> ₹ 30 Thousand
										</p>
										<br />
										<br />
										<p className="leading-none">
											<i class="fa-solid fa-chevron-up text-2xl"></i>
											<br />
											<i class="fa-solid fa-chevron-up text-2xl mt-[-10px]"></i>
										</p>
									</div>
								</div>
							</div>

							<div className="col-span-12 mt-8">
								<div className="grid grid-cols-12 gap-x-8 md:grid-cols-12 sm:grid-cols-1 max-sm:grid-cols-1 sm:gap-y-16 max-sm:gap-y-16 px-0 max-sm:px-4 sm:px-4 md:px-0">
									<div className="col-span-4">
										<div className="logoPrizes text-white">
											<img src={Polygon} alt="" className="mx-auto" />
											<br />
											<p className="text-xl">
												₹ 15,000* for the greatest hack created using Polygon
												and Ethereum. <br />
												<br />
												<span className="text-base">
													+egligibility to apply for internships or full-time
													positions, and up to $5,000 in seed money for winners!
												</span>
											</p>
										</div>
									</div>
									<div className="col-span-4">
										<div className="logoPrizes text-white border-l-2 pl-10 pr-8 border-r-2 sm:pl-0 md:pl-4 max-sm:pr-0 sm:pr-0 md:pr-4 max-sm:border-l-0 sm:border-l-0 md:border-l-2 max-sm:border-r-0 sm:border-r-0 md:border-r-2">
											<img src={Tezos} alt="" className="mx-auto" />
											<br />
											<p className="text-xl">
												Finest Dapp created on Tezos will recieve ₹ 20,000{" "}
												<br />
												<br />
												<span className="text-base">
													+Opportunity for a continuity award of up to $5,000
													USD for a superior initiative
												</span>
											</p>
										</div>
									</div>
									<div className="col-span-4">
										<div className="logoPrizes text-white">
											<img src={Celo} alt="" className="mx-auto" />
											<br />
											<p className="text-xl">
												₹ 15,000* for the greatest hack created using Polygon
												and Ethereum. <br />
												<br />
												<span className="text-base">
													+egligibility to apply for internships or full-time
													positions, and up to $5,000 in seed money for winners!
												</span>
											</p>
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

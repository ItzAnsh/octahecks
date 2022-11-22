import "./landing.css";
import Calender from "../../assets/media/landing/Calender.svg";
import Rocket from "../../assets/media/rocket.svg";

export default function Landing() {
	return (
		<section id="Landing" className="h-screen bg-[length:100%_100%]">
			<div className="container mx-auto">
				<div className="grid grid-cols-12">
					<div className="col-span-1"></div>

					<div className="col-span-6 firstPart lg:col-span-6 md:col-span-12 max-md:col-span-12">
						<div className="grid grid-cols-6">
							<div className="col-span-6 text-left md:text-center max-md:text-center lg:mx-0 md:mx-auto max-md:mx-auto">
								<div className="subHead bg-gradient-to-r from-indigo-400 via-pink-300 to-rose-400 bg-clip-text text-transparent text-2xl mt-40 text-left text-fruBold w-fit p-2">
									<i>"</i>&nbsp;Tech it Easy&nbsp;<i>"</i>
								</div>
							</div>

							<div className="col-span-7 mt-8">
								<div className="Head text-fruBold text-8xl bg-gradient-to-r from-indigo-400 via-pink-300 to-rose-400 bg-clip-text text-transparent text-left w-fit lg:mx-0 md:mx-auto max-md:mx-auto">
									OctaHacks <span className="text-3xl">5.0</span>
								</div>
							</div>

							<div className="col-span-1 hidden lg:hidden md:block max-md:block"></div>
							<div className="col-span-4 mt-12">
								<img src={Calender} alt="" />
							</div>
							<div className="col-span-1 hidden lg:hidden md:block max-md:block"></div>

							<div className="col-span-1 hidden lg:hidden md:block max-md:block"></div>
							<div className="col-span-1 hidden lg:hidden md:block max-md:block"></div>
							<div className="col-span-4 mt-16 lg:col-span-4 md:col-span-3 max-md:col-span-3">
								<button className="btn w-full bg-blue-600 p-1 text-white rounded">
									Apply with Devfolio
								</button>
							</div>
							<div className="col-span-1 text-left mt-16 ml-4">
								<button className="btn bg-blue-600 px-3 py-1 text-white rounded h-full">
									<i class="fa-brands fa-discord"></i>
								</button>
							</div>
						</div>
					</div>

					<div className="col-span-5 lg:col-span-5 md:col-span-12 max-md:col-span-12 secondPart">
						<div className="grid grid-cols-12">
							<div className="col-span-2"></div>
							<div className="col-span-2 hidden lg:hidden md:block max-md:block"></div>
							<div className="col-span-8 lg:col-span-8 md:col-span-4 max-md:col-span-4">
								<div className="rocket mt-32 lg:mt-32 md:mt-8 max-md:mt-8 w-fit">
									<img src={Rocket} alt="" />
								</div>
							</div>
							<div className="col-span-2"></div>
							<div className="col-span-12 text-white text-left p-2 border-l-2 border-white border-y-0 border-r-0">
								OctaHacks is the annual flagship event of GDSC, Chitkara
								University, where innovators get an opportunity to merge their
								creative ideas with their technical skills to build something
								exemplary. Expect more than 36 hours of inspiring panel
								discussions, working and collaborating on futuristic and
								empowering tech products, networking opportunities,
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

import octaLogo from "../assets/media/logos/logo-octa.svg";
import gdscLogo from "../assets/media/logos/logo-gdsc.svg";

function Header() {
	return (
		<header id="Header" className="container mx-auto z-10">
			<div className="grid grid-cols-12 p-8 fixed">
				<div className="col-span-1">
					<img src={octaLogo} alt="" className="" />
				</div>
				<div className="col-span-1"></div>
				<div className="col-span-2">
					<img src={gdscLogo} alt="" className="h-full" />
				</div>
			</div>
		</header>
	);
}

export default Header;

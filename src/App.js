import "./App.css";
import Header from "./sections/header";
import Landing from "./sections/landing/landing";
import Tracks from "./sections/tracks/tracks";
import Prizes from "./sections/prizes/prizes";
import Judges from "./sections/judges/judges";
import Mentors from "./sections/mentors/mentors";
import Sponsors from "./sections/sponsors/sponsors";

function App() {
	return (
		<div className="App">
			<Header />
			<Landing />
			<Tracks />
			<Prizes />
			<Judges />
			<Mentors />
			<Sponsors />
		</div>
	);
}

export default App;

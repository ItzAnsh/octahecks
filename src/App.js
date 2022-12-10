import "./App.css";
import Header from "./sections/header";
import Landing from "./sections/landing/landing";
import Tracks from "./sections/tracks/tracks";
import Prizes from "./sections/prizes/prizes";
import Judges from "./sections/judges/judges";
import Mentors from "./sections/mentors/mentors";

function App() {
	return (
		<div className="App">
			<Header />
			<Landing />
			<Tracks />
			<Prizes />
			<Judges />
			<Mentors />
		</div>
	);
}

export default App;

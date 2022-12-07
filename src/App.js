import "./App.css";
import Header from "./sections/header";
import Landing from "./sections/landing/landing";
import Tracks from "./sections/tracks/tracks";
import Prizes from "./sections/prizes/prizes";

function App() {
	return (
		<div className="App">
			<Header />
			<Landing />
			<Tracks />
			<Prizes />
		</div>
	);
}

export default App;

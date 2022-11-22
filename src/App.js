import "./App.css";
import Header from "./sections/header";
import Landing from "./sections/landing/landing";
import Tracks from "./sections/tracks/tracks";

function App() {
	return (
		<div className="App">
			<Header />
			<Landing />
			<Tracks />
		</div>
	);
}

export default App;

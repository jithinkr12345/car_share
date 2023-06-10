import './App.css';
import Navbar from "./components/Navbar";
import Homes from "./pages/Home";
import Slider from "./components/Slider";
import TwoButton from "./components/Twobuttons"
import {BrowserRouter} from 'react-router-dom';

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<div className="App">
					<Slider />
			 		<Homes />
			 		<TwoButton />
				</div>
			</BrowserRouter>
		</>
	);
}

export default App;

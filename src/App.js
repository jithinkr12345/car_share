import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Rider from "./pages/Rider";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/logIn";
import Register from "./pages/Register";
import { Route, Routes} from "react-router-dom";
import './assets/css/Dashboard.css';


function App() {
	return (
		<>
			<Navbar />
			<div className="">
				<Routes>
				<Route path='/' element={<Home/>} />
				<Route path='/rider' element={<Rider/>} />
				<Route path='/login' element={<Login/>} />
				<Route path='/register' element={<Register/>} />
				<Route path='/dashboard' element={<Dashboard/>} />
				</Routes>
			</div>
		</>
	);
}

// CSS hi CSS hain har jagah


export default App;

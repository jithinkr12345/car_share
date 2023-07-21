import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Rider from "./pages/Rider";
import Dashboard from "./pages/Dashboard";
import Driver from './pages/Driver';
import Login from "./pages/logIn";
import Register from "./pages/Register";
import RiderRoute from "./pages/RiderChoice";
import {Route, Routes} from "react-router-dom";
import Driverdetails from './components/Driverdetails';
import './assets/css/Dashboard.css';


function App() {
	return (
		<>
			<Navbar />
			<div className="">
				<Routes>
				<Route path='/' element={<Home/>} />
				<Route path='/rider-route' element={<RiderRoute/>} />
				<Route path='/rider' element={<Rider/>} />
				<Route path='/driver' element ={<Driver/>}/>
				<Route path='/login' element={<Login/>} />
				<Route path='/register' element={<Register/>} />
				<Route path='/dashboard' element={<Dashboard/>} />
				<Route path='/driverdetails' element={<Driverdetails/>} />
				</Routes>
			</div>
		</>
	);
}



export default App;

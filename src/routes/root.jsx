import { Link, NavLink, Outlet } from "react-router-dom"
import loggo from "../assets/SummerToysLogo.png"


// Router motsvarar App-komponenten
// Består av en statisk del (visas alltid) och en dynamisk (Outlet ersätts av andra komponenter)
const Root = () => (
	<div className="app">
		<header>
			<img className="logga" src= {loggo} alt="" />
		</header>

		<main>
			<Outlet />
		</main>
		<footer>

		</footer>
	</div>
)

export default Root

{/* <nav>
				<NavLink to="/"> Start </NavLink>
				<NavLink to="/friends"> Vänlista </NavLink>
				<NavLink to="/add"> Ny vän </NavLink>
			</nav> */}
import { Link, NavLink, Outlet } from "react-router-dom"
import loggo from "../assets/SummerToysLogo.png"
import varukorg from "../assets/kundkorg.png"



// Router motsvarar App-komponenten
// Består av en statisk del (visas alltid) och en dynamisk (Outlet ersätts av andra komponenter)
const Root = () => (
	<div className="app">
		<header>
			<NavLink to='/products'><img className="logga" src= {loggo} alt="" /></NavLink>

			<nav>
			
							<NavLink to='/orderpage' className="varukorg-link"> Varukorg <img className="varukorgImg" src= {varukorg} alt="" /></NavLink>
			</nav>

		</header>

		<main>
			<Outlet />
		</main>
		<footer>

		<NavLink to='/Admin'>Admin</NavLink>

		</footer>
	</div>
)

export default Root


import { createHashRouter } from "react-router-dom";
import Root from './root.jsx'
import Products from "../components/products.jsx";
import Orderpage from "../components/orderpage.jsx";



const router = createHashRouter([
	{
		// Om URL i adressfältet matchar denna route '/'
		path: "/",

		// Så ska Root-komponenten renderas
		element: <Root />,

		// Lägg till ett element om du vill hantera felaktiga länkar
		// errorElement: <ErrorPage />,

		// Inuti Root ska vi klistra in den komponent vars route matchar URL bäst
		children: [
			{
				path: '/orderpage',
				element: <Orderpage />
			},
			{
				path: '/products',
				element: <Products />
			},
			// {
			// 	path: '/add',
			// 	element: <AddFriend />
			// },
			{
				path: '/',
				element: <Products />
			},
		]
	},

]);

export { router }
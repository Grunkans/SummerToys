import { useEffect } from 'react'
import { getProducts } from '../data/crud.js'
import { useStore, } from '../data/store.js'
import '../css/root.css'
import '../css/Adminpage.css'








const Admin = () => {
	const { products, setProducts } = useStore(state => ({
		products: state.products,
		setProducts: state.setProducts
	}))

	const addToCart = useStore(state => state.addCartItems)
	

	const handleGetProducts = async () => {
		setProducts(await getProducts())
	}

	

	useEffect(() => {
		handleGetProducts();
	}, []);

	return (
		<div className ="productBoxContainerAdmin">
						
			{products.map(e => (
				<section key={e.key} className ="productBoxAdmin">					
				<img src={e.picture} className = "productPicture"></img>
				<p className='productName'>{e.name}</p>
				<p className='productDescription'>{e.description}</p>
				<button>Ändra</button>
				<p className='productPrice'>{e.price}kr</p>
				
				
				</section>
				
			
			))}
		</div>
	)
}


export default Admin
import { useEffect } from 'react'
import { getProducts } from '../data/crud.js'
import { useStore, } from '../data/store.js'
import '../css/root.css'








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
console.log("products vad", Products);
	return (
		<div className ="productBoxContainer">
						
			{products.map(e => (
				<section key={e.key} className ="productBox">					
				<img src={e.picture} className = "productPicture"></img>
				<p className='productName'>{e.name}</p>
				<p className='productDescription'>{e.description}</p>
				<button className="addToCart" onClick={() => addToCart(e)}>köp</button>
				<p className='productPrice'>{e.price}kr</p>
				
				
				</section>
				
			
			))}
		</div>
	)
}


export default Admin
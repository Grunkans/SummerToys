// import { useState } from 'react'
import { useEffect } from 'react'
import { getProducts } from '../data/crud.js'
import { useStore } from '../data/store.js'
import '../css/root.css'
 


const Products = () => {
	const { products, setProducts } = useStore(state => ({
		products: state.products,
		setProducts: state.setProducts
	}))

	const handleGetProducts = async () => {
		setProducts(await getProducts())
	}

	useEffect(() => {
		handleGetProducts();
	}, []);

	return (
		<div className ="productBoxContainer">
						
			{products.map(e => (
				<section key={e.key} className ="productBox">					
				<img src={e.picture} className = "productPicture"></img>
				<p className='productName'>{e.name}</p>
				<p className='productDescription'>{e.description}</p>
				<button>Köp</button><p className='productPrice'>{e.price}kr</p>
				
				</section>
				
			
			))}
		</div>
	)
}

export default Products

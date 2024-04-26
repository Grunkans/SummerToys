// import { useState } from 'react'
import { useEffect } from 'react'
import { getProducts } from '../data/crud.js'
import { useStore } from '../data/store.js'
import '../App.css'
 
// import ViewEmployee from './ViewEmployee.jsx'

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
		<div>
						
			{products.map(e => (
				<section key={e.key} className ="productBox">					
				<img src={e.picture} className = "productPicture"></img>
				<p className='productName'>{e.name}</p>
				<p className='productPrice'>{e.price}</p>
				<p className='productDescription'>{e.description}</p>
				</section>
				
			
			))}
		</div>
	)
}

export default Products

import { useEffect, useState } from 'react'
import { getProducts, updateProduct, addProduct, deleteProduct } from '../data/crud.js'
import { useStore, } from '../data/store.js'
import '../css/root.css'
import '../css/Adminpage.css'
import EditProductForm from './Editform.jsx'
import React from 'react'





const Admin = () => {
	const { products, setProducts } = useStore(state => ({
		products: state.products,
		setProducts: state.setProducts
	}))

	const [editingProduct, setEditingProduct] = useState(null)
	const [isAdding, setIsAdding] = useState(false)
	

	const handleGetProducts = async () => {
		setProducts(await getProducts())
	}

	const handleEditProduct = (product) => {
		setEditingProduct(product)
	  }
	
	  const handleSaveProduct = async (product) => {
		if (isAdding) {
		  await addProduct(product)
		  setIsAdding(false)
		} else {
		  await updateProduct(product)
		}
		setProducts(await getProducts())
		setEditingProduct(null)
	  }

	  const handleAddProduct = () => {
		setEditingProduct({ name: '', description: '', price: '', picture: '' })
		setIsAdding(true)
	  };
	
	  const handleCancelEdit = () => {
		setEditingProduct(null)
	  }

	  const handleDeleteProduct = async (productId) => {
		await deleteProduct(productId)
		setProducts(await getProducts())
	  }

	

	useEffect(() => {
		handleGetProducts();
	}, [])



	return (
		<div className="productBoxContainerAdmin">
		  {products.map(e => (
			<section key={e.key} className="productBoxAdmin">
			  <img src={e.picture} className="productPicture" alt={e.name} />
			  <p className='productName'>{e.name}</p>
			  <p className='productDescription'>{e.description}</p>
			  <button onClick={() => handleEditProduct(e)}>Ändra</button>
			  <button onClick={() => handleDeleteProduct(e.key)}>Radera</button>
			  <p className='productPrice'>{e.price}kr</p>
			</section>
		  ))}
	
		  <div>
			<button onClick={handleAddProduct}>Lägg till ny produkt</button>
		  </div>
	
		  {editingProduct && (
			<div className="editProductModal">
			  <EditProductForm
				product={editingProduct}
				onSave={handleSaveProduct}
				onCancel={handleCancelEdit}
			  />
			</div>
		  )}
		</div>
	  );
	};


export default Admin
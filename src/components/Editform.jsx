import React, { useState } from 'react';

const EditProductForm = ({ product, onSave, onCancel }) => {
	const [updatedProduct, setUpdatedProduct] = useState(product)
  
	const handleChange = (e) => {
	  const { name, value } = e.target
	  setUpdatedProduct({ ...updatedProduct, [name]: value })
	};
  
	const handleSubmit = (e) => {
	  e.preventDefault()
	  onSave(updatedProduct)
	};

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Namn:
        <input type="text" name="name" value={updatedProduct.name} onChange={handleChange} />
      </label>
      <label>
        Beskrivning:
        <input type="text" name="description" value={updatedProduct.description} onChange={handleChange} />
      </label>
      <label>
        Pris:
        <input type="text" name="price" value={updatedProduct.price} onChange={handleChange} />
      </label>
      <label>
        Bild URL:
        <input type="text" name="picture" value={updatedProduct.picture} onChange={handleChange} />
      </label>
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  )
}

export default EditProductForm
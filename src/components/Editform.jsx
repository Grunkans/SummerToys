import React, { useState, useEffect } from 'react';

const EditProductForm = ({ product, onSave, onCancel }) => {
	const [updatedProduct, setUpdatedProduct] = useState(product)
  
	
	const [nameTouched, setNameTouched] = useState(false)
	const [descriptionTouched, setDescriptionTouched] = useState(false)
	const [priceTouched, setPriceTouched] = useState(false)
	const [pictureTouched, setPictureTouched] = useState(false)

	useEffect(() => {
		setUpdatedProduct(product);
	  }, [product])
	
	  const handleChange = (e) => {
		const { name, value } = e.target;
		setUpdatedProduct({ ...updatedProduct, [name]: value })
	  }

	  const handleSubmit = (e) => {
		e.preventDefault();
		if (formIsValid) {
		  onSave(updatedProduct)
		}
	  };


		const nameIsValid = updatedProduct.name.trim() !== '';
		const descriptionIsValid = updatedProduct.description.trim() !== '';
		const priceIsValid = !isNaN(updatedProduct.price) && parseFloat(updatedProduct.price) > 0;
	
		const urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
	    const pictureIsValid = urlPattern.test(updatedProduct.picture.trim())

  const formIsValid = nameIsValid && descriptionIsValid && priceIsValid && pictureIsValid;

  return (
    <form onSubmit={handleSubmit}>
      <div className="formGroup">
        <label>
          Namn:
          <input
            type="text"
            name="name"
            value={updatedProduct.name}
            onChange={handleChange}
            onBlur={() => setNameTouched(true)}
            className={nameTouched && !nameIsValid ? 'invalid' : ''}
          />
        </label>
        {nameTouched && !nameIsValid && <p className="error">Vänligen fyll i produktens namn.</p>}
      </div>

      <div className="formGroup">
        <label>
          Beskrivning:
          <input
            type="text"
            name="description"
            value={updatedProduct.description}
            onChange={handleChange}
            onBlur={() => setDescriptionTouched(true)}
            className={descriptionTouched && !descriptionIsValid ? 'invalid' : ''}
          />
        </label>
        {descriptionTouched && !descriptionIsValid && <p className="error">Vänligen fyll i produktbeskrivningen.</p>}
      </div>

      <div className="formGroup">
        <label>
          Pris:
          <input
            type="text"
            name="price"
            value={updatedProduct.price}
            onChange={handleChange}
            onBlur={() => setPriceTouched(true)}
            className={priceTouched && !priceIsValid ? 'invalid' : ''}
          />
        </label>
        {priceTouched && !priceIsValid && <p className="error">Vänligen ange ett giltigt pris.</p>}
      </div>

      <div className="formGroup">
        <label>
          Bild URL:
          <input
            type="text"
            name="picture"
            value={updatedProduct.picture}
            onChange={handleChange}
            onBlur={() => setPictureTouched(true)}
            className={pictureTouched && !pictureIsValid ? 'invalid' : ''}
          />
        </label>
        {pictureTouched && !pictureIsValid && <p className="error">Vänligen fyll i produktbildens URL.</p>}
      </div>

      <button type="submit" disabled={!formIsValid}>Spara</button>
      <button type="button" onClick={onCancel}>Avbryt</button>
    </form>
  );
};

export default EditProductForm;

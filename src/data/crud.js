import { collection, getDocs, addDoc, deleteDoc, updateDoc, doc } from 'firebase/firestore/lite'
import { db } from './fire.js'
// import Products from '../components/products.jsx'


// const collectionName = 'products'
// const collectionRef = collection(db, 'products')


async function getProducts() {
	const productsCollection = collection(db, 'products')
	const productsSnapshot = await getDocs(productsCollection)
  const productsList = productsSnapshot.docs.map(doc => withKey(doc))
  return productsList

}

function withKey(doc) {
	let o = doc.data()
	o.key = doc.id;  // "id" är dokumentreferensen
	return o;
  }


//Uppdatera befintlig produkt i databasen
async function updateProduct(updatedProduct) {
  try {
    const productRef = doc(db, 'products', updatedProduct.key)
    await updateDoc(productRef, {
      name: updatedProduct.name,
      description: updatedProduct.description,
      price: updatedProduct.price,
      picture: updatedProduct.picture
    })
    console.log('Produkt uppladdad')
  } catch (error) {
    console.error('Error:', error)
  }
}


//Lägger till ny produkt i databasen
async function addProduct(newProduct) {
	try {
	  const productsCollection = collection(db, 'products')
	  const docRef = await addDoc(productsCollection, newProduct)
	  console.log('Document written with ID: ', docRef.id)
	  return { ...newProduct, key: docRef.id }
	} catch (e) {
	  console.error('Error adding document: ', e)
	}
  }


//raderar produkt från databas
async function deleteProduct(productId) {
	try {
	  const productRef = doc(db, 'products', productId)
	  await deleteDoc(productRef)
	  console.log('Product deleted successfully')
	} catch (error) {
	  console.error('Error deleting product:', error)
	}
  }




export { getProducts, updateProduct, addProduct, deleteProduct}
import { collection, getDocs, addDoc, deleteDoc, updateDoc, doc } from 'firebase/firestore/lite'
import { db } from './fire.js'
// import Products from '../components/products.jsx'


// const collectionName = 'products'
// const collectionRef = collection(db, 'products')


async function getProducts() {
	const productsCollection = collection(db, 'products')
	const productsSnapshot = await getDocs(productsCollection);
  const productsList = productsSnapshot.docs.map(doc => withKey(doc));
  return productsList;

}

function withKey(doc) {
	let o = doc.data();
	o.key = doc.id;  // "id" är dokumentreferensen
	return o;
  }

// Use this if you don't have an id in the objects themselves
// function withKey(doc) {
// 	let o = doc.data()
// 	o.key = doc.id  // "id" is the document reference
// 	return o
// }

async function updateProduct(updatedProduct) {
  try {
    const productRef = doc(db, 'products', updatedProduct.key);
    await updateDoc(productRef, {
      name: updatedProduct.name,
      description: updatedProduct.description,
      price: updatedProduct.price,
      picture: updatedProduct.picture
    });
    console.log('Produkt uppladdad');
  } catch (error) {
    console.error('Error:', error);
  }
}





export { getProducts, updateProduct }
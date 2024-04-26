import { collection, getDocs, addDoc, deleteDoc, updateDoc, doc } from 'firebase/firestore/lite'
import { db } from './fire.js'
// import Products from '../components/products.jsx'


// const collectionName = 'products'
// const collectionRef = collection(db, 'products')


async function getProducts() {
	const productsCollection = collection(db, 'products')

	// Hämta alla dokument i collection "products"
	const productsSnapshot = await getDocs(productsCollection)
	// console.log('getProducts: snapshot is', productsSnapshot)


	const productsList = productsSnapshot.docs.map(doc => withKey(doc))
	return productsList
}

// Use this if you don't have an id in the objects themselves
function withKey(doc) {
	let o = doc.data()
	o.key = doc.id  // "id" is the document reference
	return o
}

// async function addEmployee(employee) {
// 	// referens till collection 'employees'
// 	await addDoc(collectionRef, employee)
// }

// async function deleteEmployee(key) {
// 	const docRef = doc(collectionRef, key)
// 	// console.log('deleteEmployee: ', docRef);
// 	deleteDoc(docRef)
// }

// async function editEmployee(key, updatedEmployee) {
// 	// vi behöver en "collection reference"
// 	// vi skapar en referens till dokumentet vi ska ändra på
// 	// leta upp en funktion som kan uppdatera ett dokument
// 	const docRef = doc(collectionRef, key)

// 	// Två alternativ för att ändra:
// 	// updateDoc - uppdaterar ett befintligt objekt
// 	// setDoc - uppdaterar eller skapar ett objekt
// 	await updateDoc(docRef, updatedEmployee)
// }


export { getProducts }
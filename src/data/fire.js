// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsbXV65PSabORP2U7f4TALEBEypnaRh04",
  authDomain: "summertoys-f85a1.firebaseapp.com",
  projectId: "summertoys-f85a1",
  storageBucket: "summertoys-f85a1.appspot.com",
  messagingSenderId: "826773435790",
  appId: "1:826773435790:web:d56736718d13c0a95a60df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()
console.log("databas", db);
export {db}
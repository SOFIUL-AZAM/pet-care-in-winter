// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZkaJ7c3fVff72nqX2LOAZisSXcA_gQVM",
  authDomain: "pet-care-in-winter-ac57c.firebaseapp.com",
  projectId: "pet-care-in-winter-ac57c",
  storageBucket: "pet-care-in-winter-ac57c.firebasestorage.app",
  messagingSenderId: "999170035344",
  appId: "1:999170035344:web:bb1822af9b7ba367dd1215"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
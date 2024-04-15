// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1nspsy3n5gdrxOLjMAiE5GzxuYAuUDBk",
  authDomain: "expense-tracker-342f0.firebaseapp.com",
  projectId: "expense-tracker-342f0",
  storageBucket: "expense-tracker-342f0.appspot.com",
  messagingSenderId: "390312306557",
  appId: "1:390312306557:web:8e25eecff3579490d50e14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
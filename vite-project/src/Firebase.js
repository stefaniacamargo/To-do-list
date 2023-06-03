// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDTRq293BXQ-nr9jy2HMlpHaRZXaS-AUs",
  authDomain: "to-do-list-85168.firebaseapp.com",
  projectId: "to-do-list-85168",
  storageBucket: "to-do-list-85168.appspot.com",
  messagingSenderId: "923431472305",
  appId: "1:923431472305:web:2012e20c46225e2ac22690"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig); 
export const auth = getAuth(app)
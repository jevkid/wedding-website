// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDh0s2XwT_8T-aYx6VfEeTz3qS4MBQMBM",
  authDomain: "simeg-wedding.firebaseapp.com",
  projectId: "simeg-wedding",
  storageBucket: "simeg-wedding.appspot.com",
  messagingSenderId: "473475721863",
  appId: "1:473475721863:web:4578d6fefb8383e167e622",
  measurementId: "G-K2PQKBG107"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
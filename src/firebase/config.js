// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTXGdDW6C5yRBAj4k_YmCda_gvZxhEDx0",
  authDomain: "react-level-1-lesson-13.firebaseapp.com",
  projectId: "react-level-1-lesson-13",
  storageBucket: "react-level-1-lesson-13.appspot.com",
  messagingSenderId: "353493067392",
  appId: "1:353493067392:web:faa1acf3a51d43b4a0e865"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

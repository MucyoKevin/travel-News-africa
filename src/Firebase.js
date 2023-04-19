// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBoJGCgSmgNf-8zaQcVe79yXtOoYhTsT8",
  authDomain: "travel-news-africa.firebaseapp.com",
  projectId: "travel-news-africa",
  storageBucket: "travel-news-africa.appspot.com",
  messagingSenderId: "906494870036",
  appId: "1:906494870036:web:b525cf9b5a6e3996689d01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider , FacebookAuthProvider}  from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCBoJGCgSmgNf-8zaQcVe79yXtOoYhTsT8",
  authDomain: "travel-news-africa.firebaseapp.com",
  projectId: "travel-news-africa",
  storageBucket: "travel-news-africa.appspot.com",
  messagingSenderId: "906494870036",
  appId: "1:906494870036:web:b525cf9b5a6e3996689d01"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();
export  {auth , provider , facebook} ;
import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import App from "./App";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTZGsOMRoh31_O3Hg1YmIvsitjANe7wxI",
  authDomain: "netflix-clone-780a5.firebaseapp.com",
  projectId: "netflix-clone-780a5",
  storageBucket: "netflix-clone-780a5.appspot.com",
  messagingSenderId: "658085733219",
  appId: "1:658085733219:web:8c44b77c4a0093e5a46956",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <App />
  // <React.StrictMode>
  // </React.StrictMode>
);

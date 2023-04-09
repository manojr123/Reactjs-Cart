import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";
import firebase from "firebase/app";
import "firebase/firestore";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhxhSTxv3W8P9E6t9WByKes5aJsMZtQXI",
  authDomain: "cart-704d7.firebaseapp.com",
  projectId: "cart-704d7",
  storageBucket: "cart-704d7.appspot.com",
  messagingSenderId: "799596709385",
  appId: "1:799596709385:web:53be34c9722d78851c5ad8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



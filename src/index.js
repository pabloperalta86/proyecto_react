import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxHnDYawMniH2_EQwkOP8tsZoKj4EkSIU",
  authDomain: "proyectoreactcoder-6b5a1.firebaseapp.com",
  projectId: "proyectoreactcoder-6b5a1",
  storageBucket: "proyectoreactcoder-6b5a1.appspot.com",
  messagingSenderId: "620318942811",
  appId: "1:620318942811:web:c0b4e705b1be249226017e",
  measurementId: "G-GHT1Z3L9HK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

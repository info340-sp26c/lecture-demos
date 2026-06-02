import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router'

import App from './components/App.jsx';

//import CSS
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
 
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFE67TDob8M6k68knSQ2HpjtjdwVlfTZE",
  authDomain: "chat3-info340c-sp26.firebaseapp.com",
  databaseURL: "https://chat3-info340c-sp26-default-rtdb.firebaseio.com",
  projectId: "chat3-info340c-sp26",
  storageBucket: "chat3-info340c-sp26.firebasestorage.app",
  messagingSenderId: "712952001170",
  appId: "1:712952001170:web:4f55a845de3f1128ddec4b"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
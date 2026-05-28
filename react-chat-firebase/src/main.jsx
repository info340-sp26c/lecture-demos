import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router'

import App from './components/App.jsx';

//import CSS
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
 
// //Slide 16
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAuIRlkrH1YQ9T3YLcarj70OD8N4F6aTgk",
//   authDomain: "foo-delete-a4f73.firebaseapp.com",
//   projectId: "foo-delete-a4f73",
//   storageBucket: "foo-delete-a4f73.firebasestorage.app",
//   messagingSenderId: "716284348433",
//   appId: "1:716284348433:web:3259d592c76b019f5c89b0"
// };

// // Initialize Firebase
// initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
import React from 'react';
import ReactDOM from 'react-dom/client';

//import CSS
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import App from './components/App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


// // Slide 17

// import React from 'react';
// import ReactDOM from 'react-dom/client';

// import 'bootstrap/dist/css/bootstrap.css';
// import './index.css';

// import App from './components/App.jsx';

// import 'whatwg-fetch' //load the polyfill we just installed via npm

// const URL = "https://api.github.com/search/repositories?q=react&sort=stars";

// console.log("about to send");
// const result = fetch (URL);
// console.log("result", result);

// console.log("request sent");

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);


// // Slide 21

// import React from 'react';
// import ReactDOM from 'react-dom/client';

// import 'bootstrap/dist/css/bootstrap.css';
// import './index.css';

// import App from './components/App.jsx';

// import 'whatwg-fetch' //load the polyfill we just installed via npm

// const URL = "https://api.github.com/search/repositories?q=react&sort=stars";

// console.log("about to send");
// const aPromise = fetch (URL);

// aPromise.then(function(response) {
//     console.log("response from Promise ", response);
// })

// console.log("request sent");

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);


// // Slide 25

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import 'bootstrap/dist/css/bootstrap.css';
// import './index.css';
// import App from './components/App.jsx';
// import 'whatwg-fetch' //load the polyfill we just installed via npm

// const URL = "https://api.github.com/search/repositories?q=react&sort=stars";

// const aPromise = fetch (URL);

// const response = aPromise.then(function(response) {
//     console.log(response);
//     console.log("response received");
    
//     const encodePromise = response.json();
//     console.log(encodePromise);

//     encodePromise.then(function(data) {
//       console.log(data)
//     })
   
// })

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

// // Slide 28

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import 'bootstrap/dist/css/bootstrap.css';
// import './index.css';
// import App from './components/App.jsx';
// import 'whatwg-fetch' //load the polyfill we just installed via npm

// const URL = "https://api.github.com/search/repositories?q=react&sort=stars";

// fetch (URL)
//     .then(function(response) {
//        const dataPromise = response.json() 
//        return dataPromise;
//     })
//     .then (function(data) {
//         console.log("data", data);
//     })

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

// // Slide 34

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import 'bootstrap/dist/css/bootstrap.css';
// import './index.css';
// import App from './components/App.jsx';
// import 'whatwg-fetch' //load the polyfill we just installed via npm

// const URL = "https://api.github.com/search/repositories?q=react&sort=stars";

// async function myAsyncFunction() {
  
//       const response = await fetch(URL); //wait for fetch
//       const data = await response.json(); //wait for encode
//       console.log("data from the async method: ", data); //can use data ("synchronously")  
//     }
    
//     myAsyncFunction();

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);


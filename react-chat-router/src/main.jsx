import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './components/App.jsx';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css'


createRoot(document.getElementById('root')).render(
    <App />
);

// // Slide 17

// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import { BrowserRouter } from 'react-router';
// import App from './components/App.jsx';

// import 'bootstrap/dist/css/bootstrap.css';
// import './index.css';

// createRoot(document.getElementById('root')).render(
//     <BrowserRouter>
//         <App />
//     </BrowserRouter>
// );

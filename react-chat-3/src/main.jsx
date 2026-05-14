import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';

//import CSS
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import App from './components/App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

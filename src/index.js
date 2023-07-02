import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './asset/css/tailwindConfig.css'
import './asset/css/animation.css'
// import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter, HashRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Router>
);

reportWebVitals();

import React from 'react';
import { createRoot } from 'react-dom/client';
//import { BrowserRouter } from 'react-router-dom';
//import { Provider } from 'react-redux';
//import { store } from './app/store';
import ReactDOM from 'react-dom/client';
//import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap.bundle.min';
//import 'bootstrap-social/bootstrap-social.css';
//import 'font-awesome/css/font-awesome.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();

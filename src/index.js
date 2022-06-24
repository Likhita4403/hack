import React from 'react';
import App from './App'
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Route,Routes } from 'react-router-dom'
import Login from './components/Login/Login';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  {/* <React.StrictMode> */}
    <App />
  {/* </React.StrictMode> */}
  </BrowserRouter>
);

import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import MainNav from './Compoments/Headers/MainNav';
import MainFooter from './Compoments/Footers/MainFooter';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root using correct API

root.render(
  <React.StrictMode>
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <MainNav/>
      <App />
      <MainFooter/>
    </BrowserRouter>
  </React.StrictMode>
);

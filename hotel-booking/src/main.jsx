import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import MainNav from './Compoments/Headers/MainNav';
import MainFooter from './Compoments/Footers/MainFooter';
import ChatDialog from './Compoments/ChatDialog/ChatDialog';
import CookiesAlert from './Compoments/ChatDialog/CookiesAlert';
import SignUpAlert from './Compoments/Home/SignUpAlert';

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
      <SignUpAlert/>
      {/* <CookiesAlert/> */}
      <App />
      <MainFooter/>
      <ChatDialog/>
    </BrowserRouter>
  </React.StrictMode>
);

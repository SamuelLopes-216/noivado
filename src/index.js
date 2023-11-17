import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Home.jsx';
import Confirma from './confirma.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Home/>
      <App />
      <Confirma/>
  </React.StrictMode>
);

reportWebVitals();

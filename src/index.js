import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Home.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div class="All">
      <Home/>
      <App />
    </div>
  </React.StrictMode>
);

reportWebVitals();

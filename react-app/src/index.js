import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Nasir from './Nasir';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const cors = require("cors")





root.render(
  <React.StrictMode>
    <App />
    <Nasir />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PhotoProvider from './context/PhotoProvider'
import 'typeface-lobster';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <PhotoProvider>
        <App />
      </PhotoProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();

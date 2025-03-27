// import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Optional: your global styles
import App from './App';  // Main App component
import reportWebVitals from './reportWebVitals'; // Optional: for performance monitoring

// This is where your app will be rendered into the HTML
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Makes React render the app inside the 'root' div in index.html
);

// Optional: Report performance metrics
reportWebVitals();

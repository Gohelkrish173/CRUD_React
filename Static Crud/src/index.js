import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; 
import DisplayStudent from './Display';
import DisplayCrud from './Display2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DisplayStudent/>
  // <DisplayCrud/>
);
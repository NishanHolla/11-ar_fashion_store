import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './Navbar';
import Footer from './footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Navbar></Navbar>
    <App></App>
    <Footer></Footer>
  </div>
);
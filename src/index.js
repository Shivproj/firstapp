import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Route} from 'react-router-dom'

import Navbar from './Components/navbar.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render
(
    <div>
    <Route>
    <Navbar/>   
    <App />
    </Route>
    </div>
    
);



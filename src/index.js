import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/navbar";
import store from '../src/Components/redux-store/store'
import { Provider } from 'react-redux'



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
     <Provider store={store}>
  
    <Router>
      <Navbar />
      <App />
    </Router>
    </Provider>
    
  </div>
);

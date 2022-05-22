import React from 'react';
import ReactDOM from "react-dom/client";
 import {BrowserRouter, Routes, Route,} from "react-router-dom";
import './index.css';
import App from './App'; import Edit from "./Pages/Edit";
 import Home from "./Pages/Home";

import Navbar from "./components/layout/Navbar";
import AddItem from "./components/Items/AddItem";
// http://localhost:3003/photos


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
    <Navbar></Navbar>
   <Routes>
    
     <Route path="/"  element={<App />} />

    <Route path="home" element={<Home />} />
     <Route path="add" element={<AddItem />} />
     <Route path="edit/:id" element={<Edit />} />
   </Routes>
 </BrowserRouter>


  // <React.StrictMode>
  //    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

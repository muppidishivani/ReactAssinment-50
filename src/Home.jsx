import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AppEx from './Componenets/App';
import DeleteEx from './Componenets/Delete';
import GetDataExp from './Componenets/GetAll';
const routing = (
  <Router>

    <div style={  {textAlign : "center"}  }>
    <h3>e-Commerce Application using React JS</h3>
      <hr/>
      <Link to="/">App</Link>  | 
      <Link to="/delete">DeleteEx</Link>  | 
      <Link to="/get">GetDataExp</Link>  | 
      <hr />
    </div>


    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/delete" element={<DeleteEx />} />     
      <Route path="/AllProducts" element={<GetDataExp />} />     
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
  );


 
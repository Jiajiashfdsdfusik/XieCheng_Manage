import React, { useState } from 'react';
import './App.css';
import Login from './pages/login';
import Manage from './pages/manage';
import Register from './pages/register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' Component={Login}></Route>
        <Route  path='/manage' Component={Manage}></Route>
        <Route  path='/register' Component={Register}></Route>
      </Routes>
    </Router>

  );
};

export default App;

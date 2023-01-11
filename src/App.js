import React, { useState } from "react";
import Nav from "./components/Nav";
import './App.css'
import Home from './components/Home'
import AddResource from "./AddResource";
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/add" element={<AddResource />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

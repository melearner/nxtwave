import React from "react";

import './App.css'
import Home from './components/Home'
import AddResource from "./AddResource";
import { HashRouter as Router,Routes,Route } from "react-router-dom";
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

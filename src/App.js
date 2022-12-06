import React from "react";
import Home from "./components/Home";
import Character from "./components/Character";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character" element={<Character />} />
      </Routes>
    </div>
  );
}

export default App;

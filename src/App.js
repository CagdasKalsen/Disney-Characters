import React from "react";
import Gameinfo from "./components/Gameinfo";
import Home from "./components/Home";
import Searchbar from "./components/Searchbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1> Brandon & Cagdas Game Update</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/searchbar" element={<Searchbar />} />
        <Route path="/gameinfo" element={<Gameinfo />} />
      </Routes>
    </div>
  );
}

export default App;

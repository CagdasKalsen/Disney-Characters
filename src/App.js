import React from "react";
// import Pages from "./pages/Pages";
// import Character from "./components/Characters";
import { Routes, Route } from "react-router-dom";
import "./App.css";
// import { Link } from "react-router-dom";
import Characters from "./components/Characters";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Characterdetails from "./components/Characterdetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/details/:id " element={<Characterdetails />} />
      </Routes>
    </div>
  );
}
export default App;
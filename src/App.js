import React from "react";
import Home from "./components/Home";
import AssasinsCreed from "./components/AssasinsCreed";
import CallOfDuty from "./components/CallOfDuty";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assasinscreed" element={<AssasinsCreed />} />
        <Route path="/callofduty" element={<CallOfDuty />} />
      </Routes>
    </div>
  );
}

export default App;

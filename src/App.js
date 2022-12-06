import React from "react";
import CallOfDuty from "./components/CallOfDuty";
import Home from "./components/Home";
import AssasinsCreed from "./components/AssasinsCreed";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1> Brandon & Cagdas Game Update</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assasinscreed" element={<AssasinsCreed />} />
        <Route path="/callofduty" element={<CallOfDuty />} />
      </Routes>
    </div>
  );
}

export default App;

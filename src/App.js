import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/signin";
import Slash from "./pages/slashpage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Slash />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<SigninPage />} />
      </Routes>
    </Router>
  );
}

export default App;

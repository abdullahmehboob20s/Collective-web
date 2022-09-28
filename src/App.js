import HomePage from "pages/HomePage";
import MettingRooms from "pages/MettingRooms";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/meeting-rooms" element={<MettingRooms />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Top } from "featuers/Top";
import { Profile } from "featuers/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Top />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;

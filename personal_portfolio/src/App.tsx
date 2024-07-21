import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Top } from "featuers/Top";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Top />} />
    </Routes>
  );
}

export default App;
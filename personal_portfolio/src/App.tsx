import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { Top } from "featuers/Top";
import { AboutPage } from "featuers/AboutPage";
import { SkillsPage } from "featuers/SkillsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Top />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/skills" element={<SkillsPage />} />
    </Routes>
  );
}

export default App;

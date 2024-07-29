import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { Top } from "featuers/Top";
import { AboutPage } from "featuers/AboutPage";
import { SkillsPage } from "featuers/SkillsPage";
import { HobbyPage } from "featuers/HobbyPage";
import ScrollToTop from "components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/hobby" element={<HobbyPage />} />
      </Routes>
    </>
  );
}

export default App;

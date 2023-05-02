import React from "react";
import { Route, Routes } from "react-router-dom";
import TotalApp from "./components/AllSects.js";
import MainSect from "./components/MainSect.js";
import MyProjects from "./components/MyProjects.js";
import "./styles.css";

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<TotalApp />} />
        <Route path="/home" element={<MainSect />} />
        <Route path="/myprojects" element={<MyProjects />} />
      </Routes>
    </div>
  );
};

export default App;

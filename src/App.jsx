import React from "react";
import { Routes, Route } from "react-router-dom";

import Homepage from "./components/Homepage";
import Project from "./container/Projects/Project";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/:projectId" element={<Project />} />
      </Routes>
    </div>
  );
};

export default App;

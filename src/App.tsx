import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import MyInfo from "./pages/MyInfo";
import SubjectHome from "./pages/SubjectHome";
import WeeklyStudy from "./pages/WeeklyStudy";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/myInfo" element={<MyInfo />} />
            <Route path="/subject" element={<SubjectHome />} />
            <Route path="/study" element={<WeeklyStudy />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

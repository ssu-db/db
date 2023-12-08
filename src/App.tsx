import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Attendance from "./pages/Attendance";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import MyInfo from "./pages/MyInfo";
import Notice from "./pages/Notice";
import Report from "./pages/Report";
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
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/report" element={<Report />} />
            <Route path="/notice" element={<Notice />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

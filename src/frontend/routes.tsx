import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./screens/Dashboard/Dashboard";
import Calendar from "./screens/Calendar/Calendar";
import Logs from "./screens/logs/Logs";
// ...existing code...
import NotFound from "./components/NotFound/NotFound";
import LearningHub from "./components/LearningHub/LearningHub";
import Checklist from "./components/CheckList/Checklist";
import OnlineCompiler from "./components/onlineComplier/OnlineComplier";
import CreativeLogs from "./screens/logs/CreativeLogs";
import ProblemSet from "./components/ProblemSet/ProblemSet";

const AllRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/logs" element={<CreativeLogs />} />
      <Route path="/logs-old" element={<Logs />} />
      {/* Removed Auth route */}
      <Route path="/learninghub" element={<LearningHub />} />
      <Route path="/checklist" element={<Checklist />} />
      <Route path="/onlinecompiler" element={<OnlineCompiler />} />
      <Route path="/problems" element={<ProblemSet />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AllRoutes;

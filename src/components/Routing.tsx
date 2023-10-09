import React from "react";
import { Route, Routes } from "react-router";
import LandingPage from "./Pages/landingPage/LandingPage";
import Dashboard from "./Pages/dashboardPage/dashboard";
import Aboutus from "./Pages/aboutusPage/Aboutus";

const Routing: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage children={undefined} />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/reports" element={<div>reports</div>} />
      </Routes>
    </div>
  );
};

export default Routing;

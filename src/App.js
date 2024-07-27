import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import FullStackDevelopment from "./pages/FullStackDevelopment";
import DataScience from "./pages/DataScience";
import CyberSecurity from "./pages/CyberSecurity";
import Career from "./pages/Career";
import NotFound from "./pages/NotFound";
import "./App.css"; // Assuming you have some global styles
import AllCourses from "./pages/AllCourses";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<AllCourses />} />
          <Route
            path="/full-stack-development"
            element={<FullStackDevelopment />}
          />
          <Route path="/data-science" element={<DataScience />} />
          <Route path="/cyber-security" element={<CyberSecurity />} />
          <Route path="/career" element={<Career />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

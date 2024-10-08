import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignupPage/SignUpPage";
import BeneHomePage from "./pages/HomePage/BeneHomePage";
import BeneProfilePage from "./pages/ProfilePage/BeneProfilePage";
import DonorProfilePage from "./pages/ProfilePage/DonorProfilePage";
import FormPage from "./pages/FormPage/FormPage";
import DonorApprovalPage from "./pages/DonorApprovalPage/DonorApprovalPage";
import DonorHomePage from "./pages/HomePage/DonorHomePage";
import VolunHomePage from "./pages/HomePage/VolunHomePage";


import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/donor-approval" element={<DonorApprovalPage />} />
        <Route path="/donor-home" element={<DonorHomePage />} />
        <Route path="/bene-home" element={<BeneHomePage />} />
        <Route path="/home" element={<VolunHomePage />} />
        <Route path="/donor-profile" element={<DonorProfilePage />} />
        <Route path="/bene-profile" element={<BeneProfilePage />} />
        
        {/* <Route path="/bene-home" element={<BeneHomePage />} /> */}
        {/* <Route path="/bene-profile" element={<BeneProfilePage />} /> */}
        <Route path="/form" element={<FormPage />} />


      </Routes>
    </Router>
  );
}

export default App;


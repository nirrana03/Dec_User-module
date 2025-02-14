import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Dashboard from "./Components/Dashboard/Dashboard";
import MyCoupons from "./Components/MyCoupons/Mycoupons";
import EventDetails from "./Components/EventDetails/Eventdetails";
import Profile from "./Components/Myprofile/Profile";
import Signup from "./Components/Sign-up/Signup";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/my-coupons" element={<MyCoupons />} />
        <Route path="/event-details" element={<EventDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;

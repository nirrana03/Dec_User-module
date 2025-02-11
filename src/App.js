import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Dashboard from './Components/Dashboard';
import UserDashboard from './Components/Userdashboard';
import MyCoupons from './Components/MyCoupons';
import MyProfile from './Components/Myprofile';
import EventDetails from './Components/EventDetails';
import Card from './Components/Card';
import UpcomingDetails from './Components/UpcomingDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<UserDashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/my-coupons" element={<MyCoupons />} />
          <Route path="/event-details" element={<EventDetails />} />
        </Routes>
        <Card />
        <UpcomingDetails />
      </div>
    </Router>
  );
}

export default App;

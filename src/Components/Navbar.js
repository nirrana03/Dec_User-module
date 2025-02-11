import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">Dashboard</Link>
      <Link to="/my-profile">My Profile</Link>
      <Link to="/my-coupons">My Coupons</Link>
      <Link to="/event-details">Event Details</Link>
    </div>
  );
}

export default Navbar;

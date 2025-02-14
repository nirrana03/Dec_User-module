import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import CSS for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/my-coupons">My Coupons</Link></li>
        <li><Link to="/event-details">Event Details</Link></li>
        <li><Link to="/profile">My Profile</Link></li>
        <li><Link to="/signup">Sign-Up</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

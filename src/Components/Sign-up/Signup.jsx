import React, { useState } from "react";
import "./Signup.css";
import signup from "../Sign-up/signup.png";

const Signup = () => {
  // State to handle form inputs
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    address: "",
    flatNo: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Data:", formData);
    alert("Signup Successful!");
  };

  return (
    <div className="signup-container">
      {/* Left Side Image */}
      <div className="signup-image">
        <img src={signup} alt="Signup" />
      </div>

      {/* Right Side Signup Form */}
      <div className="signup-form">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Name</label>
            <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
          </div>

          <div className="input-group">
            <label>Phone Number</label>
            <input type="tel" name="number" placeholder="Enter your phone number" value={formData.number} onChange={handleChange} required />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="input-group">
            <label>Address</label>
            <input type="text" name="address" placeholder="Enter your address" value={formData.address} onChange={handleChange} required />
          </div>

          <div className="input-group">
            <label>Flat No.</label>
            <input type="text" name="flatNo" placeholder="Enter your flat number" value={formData.flatNo} onChange={handleChange} required />
          </div>

          <button type="submit" className="signup-button">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;

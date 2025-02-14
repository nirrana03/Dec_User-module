import React, { useState } from "react";
import { Link } from "react-router-dom"; // Ensure react-router-dom is installed
import "./Profile.css";

const MyProfile = () => {
  const [name, setName] = useState("John Doe");
  const [address, setAddress] = useState("📍 New York, USA");
  const [email, setEmail] = useState("johndoe@example.com");
  const [phone, setPhone] = useState("+1 234 567 890");
  const [coupons, setCoupons] = useState(5);
  const [image, setImage] = useState("https://via.placeholder.com/200"); // Default image
  const [isEditing, setIsEditing] = useState(false);

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImage(imageURL);
    }
  };

  // Handle saving profile
  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/my-coupons">My Coupons</Link></li>
          <li><Link to="/event-details">Event Details</Link></li>
          <li><Link to="/profile">My Profile</Link></li>
          <li><Link to="/signup">Sign-Up</Link></li>
          

        </ul>
      </nav>

      {/* Profile Section */}
      <div className="profile-container">
        <div className="profile-card">
          {/* Profile Image */}
          <div className="profile-image">
            <img src={image} alt="Profile" />
            {isEditing && <input type="file" accept="image/*" onChange={handleImageChange} />}
          </div>

          {/* Profile Details */}
          <div className="profile-details">
            {isEditing ? (
              <>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
                <input type="number" value={coupons} onChange={(e) => setCoupons(Number(e.target.value))} />
                <button className="save-button" onClick={handleSave}>Save</button>
              </>
            ) : (
              <>
                <h2 className="profile-name">{name}</h2>
                <p className="profile-address">{address}</p>
                <p className="profile-email">📧 {email}</p>
                <p className="profile-phone">📞 {phone}</p>
                <p className="profile-coupons">🎟 Coupons Taken: <strong>{coupons}</strong></p>
                <p className="profile-membership">⭐ Membership: Premium</p>
                <button className="edit-button" onClick={() => setIsEditing(true)}>Edit Profile</button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;

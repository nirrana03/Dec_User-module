import React from 'react';
import '../App.css'; // Ensure you have the appropriate styling for profile content

function MyProfile() {
  const user = {
    name: "Samantha Jones",
    location: "New York, United States",
    bio: "Loyal Customer - Frequent Coupon User\nJoined: January 2024",
    couponsTaken: 18,
    couponsReceived: 12,
    profilePicture: "https://via.placeholder.com/150", // Replace with actual image
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <img src={user.profilePicture} alt="Profile" className="profile-pic" />
        </div>
        <h2 className="user-name">{user.name}</h2>
        <p className="user-location">{user.location}</p>
        <p className="user-bio">{user.bio}</p>
        <div className="profile-stats">
          <div>
            <h3>{user.couponsTaken}</h3>
            <p>Coupons Taken</p>
          </div>
          <div>
            <h3>{user.couponsReceived}</h3>
            <p>Coupons Received</p>
          </div>
        </div>
        <button className="show-more-btn">View More</button>
      </div>
    </div>
  );
}

export default MyProfile;

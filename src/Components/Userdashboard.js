import React from 'react';

const UserDashboard = () => {
  const userName = "Nirali"; // Example username; it can be dynamic based on login

  return (
    <div>

      {/* Banner Section */}
      <div className="banner">
        <h1>Welcome to User Dashboard!</h1>
        <p>We are glad to have you here. Explore your account and upcoming events.</p>
        <p className="username">Hello, User!</p> {/* Greet user by name */}
      </div>

      {/* Other sections of the dashboard go here */}
    </div>
  );
};

export default UserDashboard;

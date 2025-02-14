import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const images = [
  "/images/event1.jpg",
  "/images/event2.jpg",
  "/images/event3.jpg",
  "/images/event4.jpg",
  "/images/event5.jpg"
];

const Dashboard = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      {/* Banner */}
      <div className="banner">
        <h1>Welcome to User Dashboard!</h1>
        <p>We are glad to have you here. Explore your account and upcoming events.</p>
        <p className="username">Hello, User!</p>
      </div>

      {/* Card Section */}
      <div className="card-section">
        {[
          { name: "My Profile", link: "/profile", icon: "👤" },
          { name: "My Coupons", link: "/my-coupons", icon: "🎟️" },
          { name: "Event Details", link: "/event-details", icon: "📅" },
          { name: "Sign Up", link: "/signup", icon: "📝" },
          { name: "Event Highlights", link: "/event-highlights", icon: "🌟" },
          { name: "Log Out", link: "/", icon: "🚪", logout: true }
        ].map((card, index) => (
          <div className="card" key={index}>
            {card.logout ? (
              <button className="card-button" onClick={() => window.location.reload()}>{card.icon} {card.name}</button>
            ) : (
              <Link to={card.link} className="card-link">
                <div className="card-icon">{card.icon}</div>
                <button className="card-button">{card.name}</button>
              </Link>
            )}
          </div>
        ))}
      </div>

      {/* Event Highlights Section */}
      <div className="event-highlights">
        <h2>Event Highlights</h2>
        <div className="slider">
          <img src={images[currentImage]} alt="Event Highlight" className="slider-image" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

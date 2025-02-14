import React, { useState, useEffect } from "react";
import "./Eventdetails.css";

const EventDetails = () => {
  // Mock event data (Replace with database fetch)
  const [event, setEvent] = useState(null);

  useEffect(() => {
    // Simulating fetching data from an API
    setTimeout(() => {
      setEvent({
        name: "Music Fest 2024",
        date: "March 15, 2024",
        time: "6:00 PM - 11:00 PM",
        location: "Madison Square Garden, NY",
        description:
          "Join us for an electrifying night of music, dance, and entertainment. Featuring top artists and DJs from around the world.",
        registration: "Register now at www.musicfest.com",
        ticketPrice: "$50 - $150",
      });
    }, 1000);
  }, []);

  return (
    <div className="event-container">
      <h1 className="event-title">Event Details</h1>

      {/* Display Event Data */}
      {event ? (
        <div className="event-card">
          <h2>{event.name}</h2>
          <p className="event-date">📅 {event.date}</p>
          <p className="event-time">⏰ {event.time}</p>
          <p className="event-location">📍 {event.location}</p>
          <p className="event-description">{event.description}</p>
          <p className="event-registration">🔗 {event.registration}</p>
          <p className="event-ticket">🎟 Ticket Price: {event.ticketPrice}</p>
          <button className="register-button">Register Now</button>
        </div>
      ) : (
        <p className="loading">Loading event details...</p>
      )}

      {/* Special Offers Banner */}
      <div className="special-offer">
        <h2>🎉 Special Offers 🎉</h2>
        <p>Get 20% off on early bird tickets! Use code <strong>EARLY20</strong>.</p>
      </div>
    </div>
  );
};

export default EventDetails;

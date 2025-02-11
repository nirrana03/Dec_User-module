import React from "react";
import "../App.css";

function EventDetails() {
  const event = {
    title: "Music Concert 2025",
    date: "March 25, 2025",
    venue: "Madison Square Garden, NYC",
    description:
      "Join us for an unforgettable night of music and entertainment with top artists performing live!",
  };

  const coupons = [
    {
      discount: "20% OFF",
      price: "$40",
      location: "NYC",
      validity: "Valid till March 20, 2025",
    },
    {
      discount: "Buy 1 Get 1 Free",
      price: "$50",
      location: "NYC",
      validity: "Limited Offer",
    },
  ];

  return (
    <div className="event-container">
      {/* Event Details Section */}
      <div className="event-details">
        <h1>{event.title}</h1>
        <p><strong>Date:</strong> {event.date}</p>
        <p><strong>Venue:</strong> {event.venue}</p>
        <p className="event-description">{event.description}</p>
      </div>

      {/* Coupons Section */}
      <h2>Available Coupons</h2>
      <div className="coupon-cards">
        {coupons.map((coupon, index) => (
          <div className="coupon-card" key={index}>
            <h3>{coupon.discount}</h3>
            <p><strong>Price:</strong> {coupon.price}</p>
            <p><strong>Location:</strong> {coupon.location}</p>
            <p><strong>Validity:</strong> {coupon.validity}</p>
            <button className="claim-btn">Claim Coupon</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventDetails;

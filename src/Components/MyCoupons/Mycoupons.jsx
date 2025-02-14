import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Mycoupons.css";

// Dummy data (Replace with actual API call)
const eventCouponsData = [
  { id: 1, name: "Music Festival", venue: "NYC Arena", price: "$30", validity: "Valid till June 2025" },
  { id: 2, name: "Comedy Night", venue: "Broadway Club", price: "$20", validity: "Valid till July 2025" },
  { id: 3, name: "Tech Conference", venue: "Silicon Valley", price: "$50", validity: "Valid till Dec 2025" }
];

const foodCouponsData = [
  { id: 1, name: "Burger Combo", price: "$5" },
  { id: 2, name: "Pizza Slice", price: "$3" },
  { id: 3, name: "Coffee + Donut", price: "$4" }
];

const MyCoupons = () => {
  const [eventCoupons, setEventCoupons] = useState([]);
  const [foodCoupons, setFoodCoupons] = useState([]);

  useEffect(() => {
    // Fetch coupons from backend here
    setEventCoupons(eventCouponsData);
    setFoodCoupons(foodCouponsData);
  }, []);



  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/my-coupons">My Coupons</Link></li>
          <li><Link to="/event-details">Event Details</Link></li>
          <li><Link to="/profile">My Profile</Link></li>
          <li><Link to="/sign-up">Sign-Up</Link></li>

        </ul>
      </nav>

      <div className="coupons-container">
        {/* Event Coupons */}
        <section className="event-coupons">
          <h2>🎟 Event Coupons</h2>
          <div className="coupons-list">
            {eventCoupons.map((coupon) => (
              <div key={coupon.id} className="coupon-card">
                <h3>{coupon.name}</h3>
                <p><strong>📍 Venue:</strong> {coupon.venue}</p>
                <p><strong>💰 Price:</strong> {coupon.price}</p>
                <p><strong>⏳ Validity:</strong> {coupon.validity}</p>
                <button className="claim-btn">Claim Now</button>
              </div>
            ))}
          </div>
        </section>

        {/* Food Coupons */}
        <section className="food-coupons">
          <h2>🍔 Food Coupons</h2>
          <div className="food-list">
            {foodCoupons.map((food) => (
              <div key={food.id} className="food-card">
                <h3>{food.name}</h3>
                <p><strong>💰 Price:</strong> {food.price}</p>
                <button className="order-btn">Order Now</button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default MyCoupons;

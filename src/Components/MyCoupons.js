import React, { useEffect, useState } from "react";
// External CSS for styling

const MyCoupons = () => {
  const [coupons, setCoupons] = useState([]);

  useEffect(() => {
    // Simulating a database/API call (Replace with real API later)
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5") 
      .then((response) => response.json())
      .then((data) => {
        // Transform API data into our coupon structure
        const couponData = data.map((item) => ({
          id: item.id,
          title: `Coupon ${item.id}`,
          discount: Math.floor(Math.random() * 50) + 10 + "% Off", // Random discount
          description: item.body.substring(0, 60) + "...", // Sample description
          expiry: "March 30, 2025",
        }));
        setCoupons(couponData);
      })
      .catch((error) => console.error("Error fetching coupons:", error));
  }, []);

  return (
    <div className="my-coupons">
      <h1>My Coupons</h1>

      {/* Coupons List */}
      <div className="coupons-container">
        {coupons.length > 0 ? (
          coupons.map((coupon) => (
            <div className="coupon-card" key={coupon.id}>
              <h3>{coupon.title}</h3>
              <p><strong>Discount:</strong> {coupon.discount}</p>
              <p><strong>Description:</strong> {coupon.description}</p>
              <p><strong>Expiry Date:</strong> {coupon.expiry}</p>
            </div>
          ))
        ) : (
          <p>Loading coupons...</p>
        )}
      </div>
    </div>
  );
};

export default MyCoupons;

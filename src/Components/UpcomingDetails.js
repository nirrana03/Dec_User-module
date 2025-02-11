import React from 'react';
// Separate CSS file for better organization

function UpcomingDetails() {
  return (
    <div className="upcoming-details">
      <h2 className="section-title">Upcoming Events</h2>

      <div className="events-container">
        <div className="event-card">
          <img src="https://source.unsplash.com/400x250/?event,conference" alt="Event A" className="event-image" />
          <div className="event-content">
            <h3>Event A</h3>
            <p>
              Join us for the exciting launch of our new product! We will be showcasing cutting-edge technology and giving away exclusive rewards to attendees.
            </p>
          </div>
        </div>

        <div className="event-card">
          <img src="https://source.unsplash.com/400x250/?business,networking" alt="Event B" className="event-image" />
          <div className="event-content">
            <h3>Event B</h3>
            <p>
              Don't miss our annual networking event, where industry leaders and innovators will gather to discuss trends, share ideas, and collaborate on future projects.
            </p>
          </div>
        </div>
      </div>

      <button className="view-details-btn">View All Events</button>
    </div>
  );
}

export default UpcomingDetails;

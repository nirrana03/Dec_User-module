import React from 'react';
import '../App.css';

function CardsSection() {
  const cardsData = [
    { title: 'My Profile', icon: 'fas fa-user', path: '/my-profile' },
    { title: 'My Coupons', icon: 'fas fa-ticket-alt', path: '/my-coupons' },
    { title: 'Profile', icon: 'fas fa-id-card', path: '/profile' },
    { title: 'Sign In', icon: 'fas fa-sign-in-alt', path: '/sign-in' },
    { title: 'Events Highlights', icon: 'fas fa-calendar-alt', path: '/events-highlights' },
    { title: 'Logout', icon: 'fas fa-sign-out-alt', path: '/logout' }
  ];

  return (
    <div className="cards-section">
      {cardsData.map((card, index) => (
        <div key={index} className="card">
          <i className={card.icon}></i> {/* FontAwesome Icon */}
          <h3>{card.title}</h3>
          <button className="button" onClick={() => window.location.href = card.path}>
            Go to {card.title}
          </button>
        </div>
      ))}
    </div>
  );
}

export default CardsSection;

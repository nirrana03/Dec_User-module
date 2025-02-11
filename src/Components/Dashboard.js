import React from 'react';
import Card from './Card';
import UpcomingDetails from './UpcomingDetails';
import '../App.css';

function Dashboard() {
  return (
    <div className="container">
      <div className="dashboard-cards">
        <Card title="Coupons" icon="fas fa-gift" />
        <Card title="Register" icon="fas fa-user-plus" />
        <Card title="Profile" icon="fas fa-user" />
      </div>
      <UpcomingDetails />
    </div>
  );
}

export default Dashboard;

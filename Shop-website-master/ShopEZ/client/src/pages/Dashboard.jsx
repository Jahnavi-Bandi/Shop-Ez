// client/src/pages/Dashboard.jsx
import React from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-2">Welcome, {user?.name || 'Guest'}</h2>
      <p className="text-gray-600">This is your dashboard where you can manage orders and profile.</p>
    </div>
  );
};

export default Dashboard;

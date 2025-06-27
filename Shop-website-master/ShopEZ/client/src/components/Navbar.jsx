import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { cart } = useCart() || {};      // ✅ Add fallback
  const { user, logout } = useAuth() || {};

  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">ShopEZ</Link>
      <div className="flex items-center space-x-4">
        <Link to="/cart">🛒 Cart ({cart ? cart.length : 0})</Link>
        {user ? (
          <>
            <span>Welcome, {user.name}</span>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

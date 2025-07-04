import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // We'll create this next
import { Logout } from './Logout';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">MyApp</div>
      <ul className="nav-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <Logout />
      </ul>
    </nav>
  );
};

// Sidebar.js

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './sidebar.css';

const Sidebar = () => {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('accessToken') !== null);

  const handleLogout = () => {
    // Clear stored email and password
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userData');
    setLoggedIn(false);
  };

  return (
    <div className="d-flex flex-column">
      <NavLink to="/dashboard" className="text-decoration-none text-black mx-3 my-2">
        HOME
      </NavLink>
      <NavLink to="/dashboard/alluser" className="text-decoration-none text-black mx-3 my-2">
        USER
      </NavLink>
      <NavLink to="/dashboard/allflower" className="text-decoration-none text-black mx-3 my-2">
        FLOWER
      </NavLink>
      <NavLink className="text-decoration-none text-black mx-3 my-2" onClick={handleLogout} to="/login">
        Logout
      </NavLink>
    </div>
  );
};

export default Sidebar;

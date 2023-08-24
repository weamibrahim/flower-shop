import React from 'react';
import { NavLink } from 'react-router-dom';
import "./header.css";
import { GiVineFlower } from 'react-icons/gi';
import { BsFillPersonFill } from 'react-icons/bs';
import { FaShoppingCart } from 'react-icons/fa'

import { useState } from 'react';
function Header() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('accessToken') !== null);

  const handleLogout = () => {
    // Clear stored email and password
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userData');

    setLoggedIn(false);
  };
  const userData = JSON.parse(localStorage.getItem('userData'));
  const userRole = userData?.role;
  return (
    <div className='head'>

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <GiVineFlower className='icon' />

          <h4 style={{ textShadow: '2px 2px 5px black', fontFamily: " 'Sofia " }} className='mx-2'> MY Flower </h4>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto mb-1 mb-lg-0">
              {userRole !== 'admin' && (
                <>
                  <li>
                    <NavLink style={{ color: 'black', textDecoration: 'none' }} to="/home">Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink style={{ color: 'black', textDecoration: 'none' }} to="/about">About </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink style={{ color: 'black', textDecoration: 'none' }} to="/tour">Flower </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink style={{ color: 'black', textDecoration: 'none' }} to="/profile"><BsFillPersonFill className="icone" /></NavLink>
                  </li>
                </>
              )}
              {userRole === 'admin' && (
                <>
                  <li className="nav-item">
                    <NavLink style={{ color: 'black', textDecoration: 'none' }} to="/dashboard">Dashboard</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink style={{ color: 'black', textDecoration: 'none' }} to="/home">Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink style={{ color: 'black', textDecoration: 'none' }} to="/about">About </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink style={{ color: 'black', textDecoration: 'none' }} to="/tour">Flower </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink style={{ color: 'black', textDecoration: 'none' }} to="/profile"><BsFillPersonFill className="icone" /></NavLink>
                  </li>
                </>
              )}
              {loggedIn ? (
                <li className="nav-item">
                  <NavLink style={{ color: 'black', textDecoration: 'none' }} onClick={handleLogout} to="/login">Logout</NavLink>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink style={{ color: 'black', textDecoration: 'none' }} to="/login">Login</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink style={{ color: 'black', textDecoration: 'none' }} to="/signup">SignUp </NavLink>
                  </li></>
              )}
              <li className='nav-item'>
                <NavLink style={{ color: 'black', textDecoration: 'none' }} to="/cart"><FaShoppingCart className="icone" /></NavLink>
              </li>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;

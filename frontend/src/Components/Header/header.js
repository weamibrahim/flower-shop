import React from 'react';
import { NavLink } from 'react-router-dom';
import "./header.css";
import { GiVineFlower } from 'react-icons/gi';
import { BsFillPersonFill } from 'react-icons/bs';
import { FaShoppingCart } from 'react-icons/fa'
import { FaHome } from "react-icons/fa";
import { IoIosLogOut ,IoMdFlower} from "react-icons/io";
import { useState } from 'react';
import { MdDashboard } from "react-icons/md";
import { IoPersonSharp  } from "react-icons/io5";
import { MdOutlineContactPhone } from "react-icons/md";
function Header({ loggedIn, setLoggedIn }) {
  

  const handleLogout = () => {
   
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

          <h4 style={{ textShadow: '2px 2px 5px black', fontFamily: " 'Sofia " }} className='mx-2'>   <NavLink style={{ color: 'black', textDecoration: 'none' }} to="/home">My Flower</NavLink></h4>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto mb-1 mb-lg-0">
              
               
                  <li className="nav-item">
                    <NavLink style={{ color: 'black', textDecoration: 'none' }} to="/about"><IoPersonSharp  className='fs-6 m-1'/>About </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink style={{ color: 'black', textDecoration: 'none' }} to="/contactus"><MdOutlineContactPhone  className='fs-6 m-1'/> ContactUs </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink style={{ color: 'black', textDecoration: 'none' }} to="/flowers"><IoMdFlower  className='fs-6 m-1'/>Flower </NavLink>
                  </li>
                 
              
              {userRole === 'admin' && (
               
                  <li className="nav-item">
                    <NavLink style={{ color: 'black', textDecoration: 'none' }} to="/dashboard"><MdDashboard className='fs-6 m-1' />Dashboard</NavLink>
                  </li>
              
              )}
              {loggedIn ? (
                <>
                 <li className="nav-item">
                    <NavLink style={{ color: 'black', textDecoration: 'none' }} to="/profile"><BsFillPersonFill className="icone" /></NavLink>
                  </li>
                <li className="nav-item">
                  <NavLink style={{ color: 'black', textDecoration: 'none' }} onClick={handleLogout} to="/login"><IoIosLogOut /></NavLink>
                </li>
                </>
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

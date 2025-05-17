import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/Navbar.css'; 

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

    return (
    <> 
      <nav className="navbar">
      <Link to="/" onClick={closeMenu}>
        <img src="/Images/logoRelaxio.png" alt="Relaxio Logo" className="logo" />
      </Link>

        <div className="search-container">
          <input type="text" placeholder="Search" className="search-input" />
          <img src="/Images/searchIcon20px.png" alt="Search" className="icon" />
        </div>
        <div className="icon-group">
          <img src="/Images/shoppingBasket.png" alt="Cart" className="icon" />
          <Link to="/signin">
            <img src="/Images/userIcon.png" alt="User" className="icon" />
          </Link>
          
          <div className="hamburger" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
          </div>
        </div>
      </nav>

       {/* Overlay for desktop */}
      {menuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}

      {menuOpen && (<div className="menu">
          <div className="close-menu" onClick={closeMenu}>×</div>
          <Link to="/" >Home</Link>
          <Link to="/products">Our products</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/support" onClick={closeMenu}>Support</Link>
          <Link to="/signin" onClick={closeMenu}>Sign In</Link>
      </div>)}




    </>
    );
  };
  export default Navbar;
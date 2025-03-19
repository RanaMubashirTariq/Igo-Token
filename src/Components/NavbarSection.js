import React, { useState } from 'react';
import './NavbarSection.css';
import { FaBars, FaTimes } from 'react-icons/fa';  // Import icons for the toggle button

export default function NavbarSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar-main-container">
      <div className="main-inner-nav-div">
        <div className="logo">
          <img src="/Pictures/logo.svg" alt="Logo" />
        </div>

        {/* Toggle Button for Mobile */}
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <div className={`main-2nd-div ${isOpen ? 'active' : ''}`}>
          <div className="main-inner-nav-2nd-div">
            <div className="main-inner-nav-2nd-inner-div">
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Tokenomics</a></li>
                <li><a href="#">Roadmap</a></li>
                <li><a href="#">Green Energy</a></li>
              </ul>
            </div>
          </div>
          <div className="main-inner-nav-3rd-div">
            <button>Connect Wallet</button>
          </div>
        </div>
      </div>
    </div>
  );
}


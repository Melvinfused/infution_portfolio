import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ activeSection, setActiveSection }) => {
  const [expanded, setExpanded] = useState(false);
  const navItems = ['Home', 'Music', 'About', 'Contact'];

  useEffect(() => {
    let timer;
    if (expanded) timer = setTimeout(() => setExpanded(false), 5000);
    return () => clearTimeout(timer);
  }, [expanded]);

  return (
    <div className="nav-container">
      <nav
        className={`nav-island ${expanded ? 'expanded' : ''}`}
        onClick={() => setExpanded(!expanded)}
      >
        <div className="nav-toggle">
          <div className="line"></div>
          <div className="line"></div>
        </div>

        <div className="nav-links">
          {navItems.map((item, i) => (
            <a
              key={i}
              className={activeSection === item ? 'active' : ''}
              onClick={(e) => {
                e.stopPropagation();
                setActiveSection(item);
              }}
            >
              {item}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

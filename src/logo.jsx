import React, { useState } from 'react';
import logo from './assets/image.png';
import './logo.css';
import SocialDock from './links.jsx';

const Logo = ({ size = '5rem',  }) => { // smaller default size
  const [hovering, setHovering] = useState(false);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '25px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        width: size,
        height: size,
      }}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {/* Logo */}
      <img
        src={logo}
        alt="Logo"
        className="animated-logo"
        style={{
          width: hovering ? `calc(${size} * 0.8)` : size, // shrink on hover
          height: hovering ? `calc(${size} * 0.8)` : size,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          transition: 'all 0.3s ease',
          opacity: hovering ? 0 : 1,
        }}
      />

      {/* Social Dock */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          bottom: '-32px',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: hovering ? 1 : 0,
          pointerEvents: hovering ? 'auto' : 'none',
          transition: 'opacity 0.3s ease',
        }}
      >
        <SocialDock />
      </div>
    </div>
  );
};

export default Logo;

import React, { useEffect } from 'react';
import './bg.css';

const Bg = () => {
  useEffect(() => {
    const particles = document.querySelector('.particles');
    for (let i = 0; i < 30; i++) {
      const dot = document.createElement('span');
      dot.className = 'particle';
      dot.style.left = `${Math.random() * 100}%`;
      dot.style.top = `${Math.random() * 100}%`;
      dot.style.animationDuration = `${10 + Math.random() * 10}s`;
      particles.appendChild(dot);
    }
  }, []);

  return (
    <div className="logo-scene">
      <div className="particles"></div>
    </div>
  );
};

export default Bg;

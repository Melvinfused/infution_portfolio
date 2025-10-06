import React, { useState, useEffect } from 'react';
import MeshBG from './grain-bg.jsx';
import Bg from './Bg';

const ResponsiveBG = () => {
  const [useParticles, setUseParticles] = useState(false);

  useEffect(() => {
    // Detect WebGL support
    const canvas = document.createElement('canvas');
    const gl =
      canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

    // Simple mobile detection fallback
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    // If no WebGL or mobile, use particle background
    if (!gl || isMobile) {
      setUseParticles(true);
    }
  }, []);

  return useParticles ? <Bg /> : <MeshBG />;
};

export default ResponsiveBG;

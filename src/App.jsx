import React, { useState, useEffect } from 'react';
//import Bgn from './Bg.jsx';
import Loader from './loader.jsx';
import Logo from './logo.jsx';
import ResponsiveBG from './ResponsiveBG.jsx';
import ScrollingText from './ScrollingText.jsx';
import Navbar from './navbar.jsx';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const minTime = 2000; // minimum loader time in ms
    const start = Date.now();

    const handleLoad = () => {
      const elapsed = Date.now() - start;
      const remaining = Math.max(minTime - elapsed, 0); // remaining time
      setTimeout(() => setLoading(false), remaining);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    
<>

  {loading ? <Loader /> : (
    <>
      <Navbar />
      <ResponsiveBG />
      <ScrollingText/>
      <Logo />
    </>
  )}
</>

    
  );
};

export default App;

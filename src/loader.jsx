import React from 'react';
import loadingGif from './assets/media.gif';

const Loader = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#000', // solid black background
    }}>
      <img 
        src={loadingGif} 
        alt="Loading..." 
        style={{
            width: '160px',        // controls overall size
            height: 'auto',        // preserves aspect ratio
        }}
      />
    </div>
  );
};

export default Loader;

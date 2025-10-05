import React from 'react';
import {
  FaSpotify,
  FaYoutube,
  FaApple,
  FaAmazon,
  FaSoundcloud,
  FaInstagram
} from 'react-icons/fa';
import { SiYoutubemusic } from "react-icons/si";

const SocialDock = () => {
  const iconSize = 28; // adjust size
  const iconStyle = { color: 'white', margin: '0 10px', cursor: 'pointer' };

  return (
    <div style={{
      position: 'fixed',
      bottom: 20,
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
    }}>
    
      <a className="social-dock" href="https://open.spotify.com/artist/6KnOJsFkMMQ5nhs83CuCqO?utm_source=1101lBLKNKRg&utm_medium=Indie_Routenote&utm_campaign=labelaffiliate" target="_blank" rel="noopener noreferrer">
        <FaSpotify style={iconStyle} size={iconSize} />
      </a>
      <a className="social-dock" href="https://music.youtube.com/channel/UCMGbODiFPA5JW21snAnZGcQ" target="_blank" rel="noopener noreferrer">
        <SiYoutubemusic style={iconStyle} size={iconSize} />
      </a>
      <a className="social-dock" href="https://music.apple.com/us/artist/infution/1617274769" target="_blank" rel="noopener noreferrer">
        <FaApple style={iconStyle} size={iconSize} />
      </a>
      <a className="social-dock" href="https://music.amazon.in/artists/B09X1N647X/infution?marketplaceId=A21TJRUUN4KGV&musicTerritory=IN&ref=dm_sh_E6JjrxjwAe4TDU7hoHZxICu0H" target="_blank" rel="noopener noreferrer">
        <FaAmazon style={iconStyle} size={iconSize} />
      </a>
      <a className="social-dock" href="https://soundcloud.com/melvin-francy-275965820" target="_blank" rel="noopener noreferrer">
        <FaSoundcloud style={iconStyle} size={iconSize} />
      </a>
      <a className="social-dock" href="https://www.instagram.com/infution.music/" target="_blank" rel="noopener noreferrer">
        <FaInstagram style={iconStyle} size={iconSize} />
      </a>
    </div>
  );
};

export default SocialDock;

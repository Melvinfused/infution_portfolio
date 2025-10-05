import React, { useRef, useEffect } from "react";
import "./ScrollingText.css";

const ScrollingText = () => {
  const topRef = useRef(null);
  const bottomRef = useRef(null);

  const hoverTopRef = useRef(false);
  const hoverBottomRef = useRef(false);

  const layer1 = "DRUM'N'BASS · UK GARAGE · ELECTRONIC · BASS MUSIC · ";
  const layer2 = "REESE · AMEN BREAK · ATMOSPHERE · BASSLINES · HARMONICS · CHOPS · STAB · TRANSIENTS · LEADS · FOGHORNS · ";

  const normalSpeed = 0.5; // adjust to fit your screen
  const slowSpeed = 0.1;

  useEffect(() => {
    let topPos = 0;
    let bottomPos = 0;

    const topWidth = topRef.current.scrollWidth / 2;
    const bottomWidth = bottomRef.current.scrollWidth / 2;

    const animate = () => {
      const topSpeed = hoverTopRef.current ? slowSpeed : normalSpeed;
      const bottomSpeed = hoverBottomRef.current ? slowSpeed : normalSpeed;

      topPos = (topPos - topSpeed) % topWidth;
      bottomPos = (bottomPos + bottomSpeed) % bottomWidth;

      topRef.current.style.transform = `translateX(${topPos}px)`;
      bottomRef.current.style.transform = `translateX(${bottomPos - bottomWidth}px)`; 
      // subtract bottomWidth to start from left edge

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="scroll-wrapper">
      <div
        className="scroll-layer layer1"
        ref={topRef}
        onMouseEnter={() => (hoverTopRef.current = true)}
        onMouseLeave={() => (hoverTopRef.current = false)}
      >
        <span>{layer1.repeat(20)}</span>
      </div>

      <div
        className="scroll-layer layer2"
        ref={bottomRef}
        onMouseEnter={() => (hoverBottomRef.current = true)}
        onMouseLeave={() => (hoverBottomRef.current = false)}
      >
        <span>{layer2.repeat(20)}</span>
      </div>
    </div>
  );
};

export default ScrollingText;

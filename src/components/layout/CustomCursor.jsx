import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [ringPosition, setRingPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Ring follows with slight delay
      setTimeout(() => {
        setRingPosition({ x: e.clientX, y: e.clientY });
      }, 50);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div 
        className="cursor-dot" 
        style={{ left: position.x, top: position.y }}
      />
      <div 
        className="cursor-ring" 
        style={{ left: ringPosition.x, top: ringPosition.y }}
      />
    </>
  );
};

export default CustomCursor;

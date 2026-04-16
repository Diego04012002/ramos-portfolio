import React, { useEffect, useRef } from 'react';

const Ticker = ({ tracks }) => {
  const trackRef = useRef(null);

  useEffect(() => {
    // Clone items for infinite scroll effect
    if (trackRef.current) {
      const track = trackRef.current;
      const items = track.innerHTML;
      track.innerHTML = items + items;
    }
  }, []);

  // Get unique track titles for ticker
  const tickerItems = tracks.slice(0, 7).map(t => t.title);

  return (
    <div className="ticker">
      <div className="ticker-track" ref={trackRef}>
        {tickerItems.map((title, index) => (
          <div className="ticker-item" key={index}>{title}</div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;

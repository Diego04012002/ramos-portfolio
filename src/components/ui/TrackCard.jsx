import React from 'react';

const TrackCard = ({ number, title, duration, explicit = false }) => (
  <div className="track-card" data-testid={`track-card-${number}`}>
    <span className="tc-num">{String(number).padStart(2, '0')}</span>
    <span className="tc-title">{title.toUpperCase()}</span>
    {explicit && <span className="track-explicit" style={{ fontSize: '8px', padding: '1px 4px' }}>E</span>}
    <span className="tc-dur">{duration}</span>
  </div>
);

export default TrackCard;

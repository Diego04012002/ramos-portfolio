import React from 'react';

const BigTrack = ({ number, title, meta, duration, explicit = false }) => (
  <div className="big-track" data-testid="big-track">
    <div className="big-num">{String(number).padStart(2, '0')}</div>
    <div className="big-info">
      <div className="big-title">{title.toUpperCase()}</div>
      <div className="big-meta">{meta}</div>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
      {explicit && <span className="track-explicit" style={{ fontSize: '9px', padding: '2px 6px' }}>E</span>}
      <div className="big-duration">{duration}</div>
    </div>
  </div>
);

export default BigTrack;

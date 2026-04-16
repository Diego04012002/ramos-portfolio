import React from 'react';

const TrackItem = ({ number, title, duration, explicit = false, onClick }) => (
  <li className="tracklist-item" onClick={onClick} data-testid={`track-${number}`}>
    <span className="track-n">{String(number).padStart(2, '0')}</span>
    <span className="track-title">{title}</span>
    {explicit && <span className="track-explicit">E</span>}
    <span className="track-duration">{duration}</span>
  </li>
);

export default TrackItem;

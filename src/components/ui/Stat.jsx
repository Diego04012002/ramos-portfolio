import React from 'react';

const Stat = ({ number, label }) => (
  <div className="stat">
    <span className="stat-num">{number}</span>
    <span className="stat-label">{label}</span>
  </div>
);

export default Stat;

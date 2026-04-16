import React from 'react';
import TrackItem from './TrackItem';

const Tracklist = ({ tracks, limit }) => {
  const displayTracks = limit ? tracks.slice(0, limit) : tracks;
  
  return (
    <ul className="tracklist">
      {displayTracks.map((track) => (
        <TrackItem
          key={track.number}
          number={track.number}
          title={track.title}
          duration={track.duration}
          explicit={track.explicit}
        />
      ))}
    </ul>
  );
};

export default Tracklist;

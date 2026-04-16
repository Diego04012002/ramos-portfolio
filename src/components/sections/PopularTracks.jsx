import React from 'react';
import SectionLabel from '../ui/SectionLabel';
import BigTrack from '../ui/BigTrack';
import TrackCard from '../ui/TrackCard';
import Button from '../ui/Button';

const PopularTracks = ({ tracks, albumName, artistUrl }) => {
  const popularTracks = tracks.filter(t => t.popular).slice(0, 5);
  
  if (popularTracks.length === 0) return null;

  const [firstTrack, ...otherTracks] = popularTracks;

  return (
    <section id="tracks" data-testid="tracks-section">
      <div className="tracks-header reveal " style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
        <div>
          <SectionLabel>Top canciones</SectionLabel>
          <h2 className="section-heading">Populares</h2>
        </div>
        <Button 
          href={artistUrl} 
          target="_blank" 
          variant="secondary" 
          style={{ fontSize: '10px', padding: '10px 24px' }}
        >
          Ver todas →
        </Button>
      </div>

      <div className="tracks-grid reveal " style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {firstTrack && (
          <BigTrack
            number={1}
            title={firstTrack.title}
            meta={`★ Track más popular`}
            duration={firstTrack.duration}
            explicit={firstTrack.explicit}
          />
        )}
        
        {otherTracks.map((track, index) => (
          <TrackCard
            key={track.number}
            number={index + 2}
            title={track.title}
            duration={track.duration}
            explicit={track.explicit}
          />
        ))}
      </div>
    </section>
  );
};

export default PopularTracks;

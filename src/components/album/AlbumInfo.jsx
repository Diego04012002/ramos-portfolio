import React from 'react';
import SectionLabel from '../ui/SectionLabel';
import Tracklist from '../ui/Tracklist';
import Button from '../ui/Button';

const AlbumInfo = ({ album, tracks }) => {
  const nameParts = album.name.split(' ');
  const firstPart = nameParts.slice(0, Math.ceil(nameParts.length / 2)).join(' ');
  const secondPart = nameParts.slice(Math.ceil(nameParts.length / 2)).join(' ');

  return (
    <div className="album-info reveal">
      <SectionLabel>Debut Álbum</SectionLabel>
      <h2 className="album-name">
        {firstPart}<br />
        <span>{secondPart}</span>
      </h2>
      <span className="album-year-badge">
        {album.year} · {album.trackCount} Canciones · {album.explicit ? 'Explicit' : 'Clean'}
      </span>

      <p className="album-desc">{album.description}</p>

      <Tracklist tracks={tracks} limit={5} />

      <div style={{ marginTop: '32px' }}>
        <Button href={album.spotifyUrl} target="_blank" variant="primary">
          Escuchar álbum completo
        </Button>
      </div>
    </div>
  );
};

export default AlbumInfo;

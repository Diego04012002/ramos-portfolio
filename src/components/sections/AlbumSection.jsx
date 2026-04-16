import React from 'react';
import AlbumCover from '../album/AlbumCover';
import AlbumInfo from '../album/AlbumInfo';

const AlbumSection = ({ album, tracks }) => {
  if (!album) return null;

  return (
    <section id="album" data-testid="album-section">
      <div className="album-cover-wrap reveal">
        <AlbumCover album={album} />
        <div className="album-decoration"></div>
      </div>
      <AlbumInfo album={album} tracks={tracks} />
    </section>
  );
};

export default AlbumSection;

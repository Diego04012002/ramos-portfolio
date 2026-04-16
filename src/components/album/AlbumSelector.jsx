import React from 'react';
import SectionLabel from '../ui/SectionLabel';

const AlbumSelector = ({ albums, selectedAlbumId, onSelectAlbum }) => {
  return (
    <section id="albums" className="album-selector-section reveal" data-testid="album-selector">
      <div className="album-selector-header">
        <SectionLabel>Discografía</SectionLabel>
        <h2 className="section-heading">Selecciona un Álbum</h2>
        <p className="album-selector-subtitle">Haz clic en un álbum para ver sus detalles</p>
      </div>
      
      <div className="album-selector-grid">
        {albums.map((album) => (
          <div
            key={album.id}
            className={`album-card ${selectedAlbumId === album.id ? 'selected' : ''}`}
            onClick={() => onSelectAlbum(album.id)}
            data-testid={`album-card-${album.id}`}
          >
            <div 
              className="album-card-cover"
              style={{
                backgroundImage: `url(${album.coverImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
            </div>
            <div className="album-card-info">
              <span className="album-card-name">{album.name}</span>
              <span className="album-card-meta">{album.trackCount} canciones · {album.year}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AlbumSelector;

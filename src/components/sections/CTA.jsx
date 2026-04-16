import React from 'react';
import SpotifyIcon from '../icons/SpotifyIcon';
import Button from '../ui/Button';

const CTA = ({ album, artistUrl }) => {
  return (
    <section id="cta" data-testid="cta-section">
      <div className="cta-inner reveal">
        <div className="cta-eyebrow">Disponible ahora</div>
        <h2 className="cta-title">
          Escucha<br /><em>el álbum</em>
        </h2>
        <p className="cta-sub">
          {album?.name || 'Elegante y Peligroso'} ya está disponible en todas las plataformas.<br />
          Sigue a Ramos en Spotify para no perderte lo que viene.
        </p>
        <div className="cta-buttons">
          <Button href={album?.spotifyUrl || artistUrl} target="_blank" variant="primary">
            <SpotifyIcon />
            Abrir en Spotify
          </Button>
          <Button href={artistUrl} target="_blank" variant="secondary">
            Seguir al artista
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;

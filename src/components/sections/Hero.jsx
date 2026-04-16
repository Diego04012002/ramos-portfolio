import React from "react";
import Stat from "../ui/Stat";
import Button from "../ui/Button";
import SpotifyIcon from "../icons/SpotifyIcon";
import HeroVisual from "../ui/HeroVisual";
import Ticker from "../sections/Ticker";
import albumtTracksData from "../../data/albumsTracks.json";

const Hero = ({ artist, selectedAlbum }) => {
  const allTracks = Object.values(albumtTracksData).flat();
  return (
    <section id="hero">
      <div className="hero-section" data-testid="hero-section">
        <div className="hero-bg">
          <div className="hero-scene"></div>
        </div>
        <div className="hero-scanlines"></div>
        <div className="hero-cross-h"></div>
        <div className="hero-cross-v"></div>
        <div className="hero-vignette"></div>
        <div className="hero-bottom-fade"></div>

        <div className="hero-content">
          <div className="hero-eyebrow">
            Artista · {artist.location} · {artist.genre}
          </div>
          <div>
            <h1 className="hero-title">{artist.name}</h1>
            <span className="hero-title-stroke">{artist.name}</span>
          </div>
          <div className="hero-subtitle">
            <div className="hero-stats">
              <Stat number={artist.listeners} label="Oyentes" />
              <Stat number={artist.totalTracks} label="Tracks" />
              <Stat number={artist.debut} label="Debut" />
            </div>
          </div>
          <div className="hero-cta-row">
            <Button href={artist.spotifyUrl} target="_blank" variant="primary">
              <SpotifyIcon />
              Escuchar ahora
            </Button>
            <Button href="#albums" variant="secondary">
              Ver álbumes
            </Button>
          </div>
        </div>
        <HeroVisual />
        <div className="scroll-indicator">
          <span className="scroll-text">Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </div>
      {/* <Ticker tracks={allTracks} /> */}
    </section>
  );
};

export default Hero;

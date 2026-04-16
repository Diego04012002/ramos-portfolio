import React from "react";
import SectionLabel from "../ui/SectionLabel";
import Button from "../ui/Button";

const Identity = ({ artist }) => {
  return (
    <section id="identity" data-testid="identity-section">
      <div className="identity-text reveal">
        <SectionLabel>El Artista</SectionLabel>
        <blockquote className="identity-quote">
          <span className="quote-mark">"</span>
          {artist.quote.split(".").map((part, i) => (
            <React.Fragment key={i}>
              {part.trim()}
              {i === 0 && "."}
              <br />
            </React.Fragment>
          ))}
          <span className="quote-mark">"</span>
        </blockquote>

        {artist.bio.map((paragraph, index) => (
          <p
            key={index}
            className="identity-body"
            style={index > 0 ? { marginTop: "-16px" } : {}}
          >
            {paragraph}
          </p>
        ))}

        <div className="identity-stats">
          <div className="identity-stat">
            <span className="identity-stat-num">{artist.listeners}</span>
            <span className="identity-stat-label">Oyentes</span>
          </div>
          <div className="identity-stat">
            <span className="identity-stat-num">{artist.totalTracks}</span>
            <span className="identity-stat-label">Canciones</span>
          </div>
          <div className="identity-stat">
            <span className="identity-stat-num">{artist.totalAlbums}</span>
            <span className="identity-stat-label">Álbumes</span>
          </div>
        </div>

        <div
          style={{
            marginTop: "40px",
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          <Button href={artist.spotifyUrl} target="_blank" variant="primary">
            Seguir en Spotify
          </Button>
        </div>
      </div>

      <div className="identity-visual reveal">
        <div className="id-img-wrap">
          <div
            className="id-img-bg"
            style={{ 
              backgroundImage: `url(${artist.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center', 
            }}
          ></div>
        </div>
        <div className="id-border-deco"></div>
        <div className="id-label">
          {artist.name} — {artist.debut}
        </div>
      </div>
    </section>
  );
};

// SVG separado como componente
const IdentityVisualSVG = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 320 426"
    xmlns="http://www.w3.org/2000/svg"
    style={{ position: "absolute", inset: 0 }}
  >
    <rect width="320" height="426" fill="#0a0806"></rect>
    <defs>
      <radialGradient id="ambLight" cx="35%" cy="55%" r="50%">
        <stop offset="0%" stopColor="rgba(255,160,30,0.18)"></stop>
        <stop offset="100%" stopColor="transparent"></stop>
      </radialGradient>
      <linearGradient id="topFade" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0a0806" stopOpacity="0.8"></stop>
        <stop offset="30%" stopColor="transparent"></stop>
      </linearGradient>
    </defs>
    <rect width="320" height="426" fill="url(#ambLight)"></rect>
    <rect x="0" y="340" width="320" height="86" fill="#0d0b08"></rect>
    <line
      x1="0"
      y1="340"
      x2="320"
      y2="340"
      stroke="rgba(255,255,255,0.06)"
      strokeWidth="1"
    ></line>
    <line
      x1="30"
      y1="380"
      x2="160"
      y2="340"
      stroke="rgba(255,210,0,0.45)"
      strokeWidth="3"
    ></line>
    <line
      x1="10"
      y1="420"
      x2="160"
      y2="360"
      stroke="rgba(255,210,0,0.3)"
      strokeWidth="2"
    ></line>
    <rect
      x="35"
      y="200"
      width="42"
      height="145"
      rx="4"
      fill="#111"
      stroke="rgba(120,120,120,0.3)"
      strokeWidth="0.8"
    ></rect>
    <rect x="42" y="212" width="28" height="16" rx="2" fill="#1a1a1a"></rect>
    <rect x="44" y="213" width="24" height="14" rx="1" fill="#0a1520"></rect>
    <rect
      x="44"
      y="213"
      width="24"
      height="14"
      rx="1"
      fill="rgba(0,80,180,0.25)"
    ></rect>
    <rect
      x="46"
      y="232"
      width="20"
      height="8"
      rx="1"
      fill="#222"
      stroke="rgba(150,150,150,0.2)"
      strokeWidth="0.5"
    ></rect>
    <path
      d="M77 260 Q110 255 120 270 Q130 285 145 290"
      stroke="rgba(60,60,60,0.9)"
      strokeWidth="4"
      fill="none"
      strokeLinecap="round"
    ></path>
    <circle cx="145" cy="290" r="4" fill="#333"></circle>
    <rect
      x="155"
      y="280"
      width="160"
      height="65"
      rx="10"
      fill="#141414"
      stroke="rgba(80,80,80,0.35)"
      strokeWidth="0.8"
    ></rect>
    <rect
      x="170"
      y="255"
      width="120"
      height="35"
      rx="6"
      fill="#0f0f0f"
      stroke="rgba(70,70,70,0.3)"
      strokeWidth="0.8"
    ></rect>
    <rect
      x="178"
      y="259"
      width="45"
      height="22"
      rx="3"
      fill="rgba(20,40,60,0.7)"
    ></rect>
    <rect
      x="232"
      y="259"
      width="45"
      height="22"
      rx="3"
      fill="rgba(20,40,60,0.6)"
    ></rect>
    <circle
      cx="195"
      cy="345"
      r="14"
      fill="#0a0a0a"
      stroke="rgba(70,70,70,0.5)"
      strokeWidth="1.5"
    ></circle>
    <circle
      cx="195"
      cy="345"
      r="7"
      fill="#111"
      stroke="rgba(100,100,100,0.3)"
      strokeWidth="1"
    ></circle>
    <circle
      cx="290"
      cy="345"
      r="14"
      fill="#0a0a0a"
      stroke="rgba(70,70,70,0.5)"
      strokeWidth="1.5"
    ></circle>
    <circle
      cx="290"
      cy="345"
      r="7"
      fill="#111"
      stroke="rgba(100,100,100,0.3)"
      strokeWidth="1"
    ></circle>
    <ellipse
      cx="315"
      cy="307"
      rx="8"
      ry="5"
      fill="rgba(220,220,150,0.15)"
    ></ellipse>
    <ellipse cx="138" cy="295" rx="16" ry="35" fill="#080808"></ellipse>
    <circle cx="138" cy="252" r="18" fill="#080808"></circle>
    <path
      d="M120 260 Q125 230 138 228 Q151 230 156 260"
      stroke="rgba(40,40,40,0.8)"
      strokeWidth="0.5"
      fill="none"
    ></path>
    <path
      d="M122 280 Q100 285 88 290"
      stroke="#080808"
      strokeWidth="10"
      strokeLinecap="round"
      fill="none"
    ></path>
    <circle cx="260" cy="40" r="25" fill="rgba(255,200,50,0.06)"></circle>
    <circle cx="260" cy="40" r="8" fill="rgba(255,200,70,0.25)"></circle>
    <circle cx="260" cy="40" r="3" fill="rgba(255,220,100,0.7)"></circle>
    <circle cx="55" cy="60" r="15" fill="rgba(255,60,40,0.05)"></circle>
    <circle cx="55" cy="60" r="5" fill="rgba(255,60,40,0.2)"></circle>
    <circle cx="55" cy="60" r="2" fill="rgba(255,80,60,0.5)"></circle>
    <line
      x1="160"
      y1="0"
      x2="160"
      y2="426"
      stroke="rgba(255,255,255,0.08)"
      strokeWidth="0.7"
    ></line>
    <line
      x1="0"
      y1="213"
      x2="320"
      y2="213"
      stroke="rgba(255,255,255,0.08)"
      strokeWidth="0.7"
    ></line>
    <rect width="320" height="426" fill="url(#topFade)"></rect>
  </svg>
);

export default Identity;

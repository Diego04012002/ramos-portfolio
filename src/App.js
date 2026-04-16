import React, { useState, useEffect } from 'react';
import './App.css';

// Data
import albumsData from './data/albums.json';
import albumtTracksData from './data/albumsTracks.json';
import tracksData from './data/tracks.json';
import artistData from './data/artist.json';

// Components
import Navigation from './components/layout/Navigation';
import CustomCursor from './components/layout/CustomCursor';
import Hero from './components/sections/Hero';
import AlbumSelector from './components/album/AlbumSelector';
import AlbumSection from './components/sections/AlbumSection';
import PopularTracks from './components/sections/PopularTracks';
import Identity from './components/sections/Identity';
import CTA from './components/sections/CTA';

function App() {
  const [selectedAlbumId, setSelectedAlbumId] = useState(albumsData[0]?.id);
  
  const selectedAlbum = albumsData.find(a => a.id === selectedAlbumId);
  const selectedTracks = albumtTracksData[selectedAlbumId] || [];
  

  const handleSelectAlbum = (albumId) => {
    setSelectedAlbumId(albumId);
    // Scroll to album section with smooth animation
    setTimeout(() => {
      document.getElementById('album')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  // Reveal animation on scroll
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
      reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          el.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  return (
    <div className="ramos-app">
      <CustomCursor />
      <Navigation />
      
      <Hero 
        artist={artistData} 
        selectedAlbum={selectedAlbum}
      />
      
      
      
      <AlbumSelector
        albums={albumsData}
        selectedAlbumId={selectedAlbumId}
        onSelectAlbum={handleSelectAlbum}
      />
      
      <AlbumSection 
        album={selectedAlbum} 
        tracks={selectedTracks}
      />
      
      <PopularTracks 
        tracks={tracksData}
        artistUrl={artistData.spotifyUrl}
      />
      
      <Identity artist={artistData} />
      
      <CTA 
        album={selectedAlbum}
        artistUrl={artistData.spotifyUrl}
      />
    </div>
  );
}

export default App;

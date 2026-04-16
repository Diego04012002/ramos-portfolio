# RAMOS - Elegante y Peligroso

Proyecto React convertido desde HTML plano con componentes reutilizables.

## 🚀 Instalación

```bash
npm install
# o
yarn install
```

## ▶️ Ejecutar en local

```bash
npm start
# o
yarn start
```

La aplicación se abrirá en `http://localhost:3000`

## 📁 Estructura del Proyecto

```
src/
├── data/
│   ├── albums.json      # Datos de álbumes
│   ├── tracks.json      # Canciones por álbum
│   └── artist.json      # Info del artista
├── components/
│   ├── album/
│   │   ├── AlbumCover.jsx
│   │   ├── AlbumInfo.jsx
│   │   └── AlbumSelector.jsx
│   ├── icons/
│   │   ├── SpotifyIcon.jsx
│   │   └── AlbumStar.jsx
│   ├── layout/
│   │   └── CustomCursor.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── Ticker.jsx
│   │   ├── AlbumSection.jsx
│   │   ├── PopularTracks.jsx
│   │   ├── Identity.jsx
│   │   └── CTA.jsx
│   └── ui/
│       ├── Button.jsx
│       ├── SectionLabel.jsx
│       ├── Stat.jsx
│       ├── TrackItem.jsx
│       ├── Tracklist.jsx
│       ├── TrackCard.jsx
│       └── BigTrack.jsx
├── App.js
├── App.css
└── index.js
```

## ➕ Añadir nuevos álbumes

Para añadir un nuevo álbum, simplemente edita los archivos JSON:

### 1. En `albums.json`:
```json
{
  "id": "nuevo-album",
  "name": "Nombre del Álbum",
  "year": 2025,
  "trackCount": 8,
  "explicit": true,
  "description": "Descripción del álbum...",
  "spotifyUrl": "https://open.spotify.com/...",
  "coverGradient": {
    "primary": "rgba(255,100,100,0.15)",
    "secondary": "#0a0505"
  }
}
```

### 2. En `tracks.json`:
```json
"nuevo-album": [
  { "number": 1, "title": "Canción 1", "duration": "3:00", "explicit": true, "popular": true },
  { "number": 2, "title": "Canción 2", "duration": "2:45", "explicit": true, "popular": false }
]
```

## 🎨 Características

- ✅ Componentes React reutilizables
- ✅ Multi-selección de álbumes con animaciones
- ✅ Datos dinámicos desde JSON
- ✅ Diseño responsive
- ✅ Cursor personalizado
- ✅ Animaciones suaves
- ✅ Estilos originales preservados

## 📦 Dependencias principales

- React 19
- React Router DOM
- Tailwind CSS (opcional, el proyecto usa CSS puro para mantener los estilos originales)

---
Creado con ❤️ para RAMOS

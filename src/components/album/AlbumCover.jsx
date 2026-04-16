

const AlbumCover = ({ album }) => {
  return (
    <div className="album-cover-frame">
      <div 
        className="album-cover-css"
        style={{
          backgroundImage: `url(${album.coverImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div 
          className="album-cover-inner"
        ></div>
      </div>
      <div className="album-crosshair"></div>
    </div>
  );
};

export default AlbumCover;

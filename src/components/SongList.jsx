import { Link } from 'react-router-dom';

function SongList({ songs }) {
  return (
    <div className="row">
      {songs.map((song, index) => (
        <div key={index} className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{song.name}</h5>
              <p className="card-text">Artist: {song.artist}</p>
              <Link
                to={`/song/${encodeURIComponent(song.artist)}/${encodeURIComponent(song.name)}`}
                className="btn btn-primary"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SongList;
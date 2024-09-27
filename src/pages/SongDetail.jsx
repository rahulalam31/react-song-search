import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSongDetails } from '../services/lastFmApi';

function SongDetail() {
  const { artist, song } = useParams(); // Get artist and song name from the URL
  const [songDetails, setSongDetails] = useState(null);

  useEffect(() => {
    const fetchSongDetails = async () => {
      const details = await getSongDetails(artist, song); // Pass artist and song name to the API
      setSongDetails(details);
    };
    fetchSongDetails();
  }, [artist, song]);

  return (
    <div className="container">
      {songDetails ? (
        <div className="card my-4">
          <div className="card-body">
            <h2 className="card-title">{songDetails.name}</h2>
            <p className="card-text">
              <strong>Artist:</strong> {songDetails.artist.name}
            </p>
            <p className="card-text">
              <strong>Album:</strong> {songDetails.album?.title || 'N/A'}
            </p>
            {/* You can add related songs or additional details here */}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default SongDetail;
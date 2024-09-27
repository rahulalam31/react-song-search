import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import SongList from '../components/SongList';
import { searchSongs } from '../services/lastFmApi';

function Home() {
  const [songs, setSongs] = useState([]);

  const handleSearch = async (query) => {
    const results = await searchSongs(query);
    setSongs(results);
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">Search for Songs</h1>
      <SearchBar onSearch={handleSearch} />
      {songs.length > 0 ? <SongList songs={songs} /> : <p>No results found</p>}
    </div>
  );
}

export default Home;
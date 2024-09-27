import axios from 'axios';

const API_KEY = 'ca2db8ecbe74194fc78809fc01a5ceca';
const BASE_URL = 'https://ws.audioscrobbler.com/2.0/';

export const searchSongs = async (query) => {
  const response = await axios.get(BASE_URL, {
    params: {
      method: 'track.search',
      track: query,
      api_key: API_KEY,
      format: 'json',
    },
  });
  return response.data.results.trackmatches.track;
};

export const getSongDetails = async (artist, track) => {
  const response = await axios.get(BASE_URL, {
    params: {
      method: 'track.getInfo',
      artist: artist,
      track: track,
      api_key: API_KEY,
      format: 'json',
    },
  });
  return response.data.track;
};
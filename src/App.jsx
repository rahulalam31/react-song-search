import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SongDetail from './pages/SongDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Song details route includes both artist and song name */}
        <Route path="/song/:artist/:song" element={<SongDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
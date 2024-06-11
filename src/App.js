import './App.css';
import Homepage from './pages/Homepage/Homepage';
import { getMovieList, searchMovie } from './api/api';

function App() {
  return (
    <div className="App">
      <Homepage />
    </div>
  );
}

export default App;

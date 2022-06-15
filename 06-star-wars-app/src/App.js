import React, {useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {

  const [movies, setMovies] = useState([]);
  
  const fetcthMovieshandler = () => {
    fetch('https://swapi.dev/api/films/')
      .then(res => {
        return res.json();
      }).then(data => {
        const transformedmovies = data.results.map((movie) => {
          return {
            id: movie.episode_id,
            title: movie.title,
            openingText: movie.opening_crawl,
            releaseDate: movie.release_date
          }
        });
        setMovies(transformedmovies);
      });
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetcthMovieshandler}>Fetch Movies!!</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;

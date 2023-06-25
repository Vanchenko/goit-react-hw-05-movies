import { useEffect, useState } from 'react';
import { MoviesList } from '../components/MoviesList/MoviesList';
import { loadTrendFilms } from 'api/api';

const Home = () => {
  const [datamovies, setDataMovies] = useState([]);
  useEffect(() => {
    loadTrendFilms()
      .then(resp => {
        //  console.log('resp in APP component', resp.results);
        setDataMovies(resp.results);
      })
      .catch(error => {
        console.log(error.message);
      });
  }, []);

  return (
    <div>
      <MoviesList movies={datamovies} />
    </div>
  );
};

export default Home;

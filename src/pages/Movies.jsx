import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Searchbar } from '../components/Searchbar/Searchbar';
import { MoviesList } from '../components/MoviesList/MoviesList';
import { loadSearchFilm } from 'api/api';
import { Wrapper, Text, Loader } from './Movies.styled';
import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { ColorRing } from 'react-loader-spinner';

const Movies = () => {
  const [searchWord, setSearchWord] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('searchWord') ?? '';

  useEffect(() => {
    if (!searchQuery) {
      setIsLoading(false);
      return
    }
    setIsLoading(true);
    setError(null); 

      loadSearchFilm(searchQuery)
        .then(resp => {
          if (resp.data.results.length === 0) { setError('Sorry. There are no movies ... 😭') };
          setMovies(resp.data.results);
        //  setIsEmpty(false);
        })
        .catch(error => {
          console.log(error.message);
          setError('Oops! Something went wrong! Try reloading the page!');
        })
        .finally(() => {setIsLoading(false);});
  }, [searchQuery]);


  const onChange = evt => {
      if (evt.target.value === '') {setSearchParams({});}
      setSearchWord(evt.target.value);
  };
  
  const onSubmit = evt => {
    evt.preventDefault();
    if (searchWord.trim() === '') {
      return toast.warn('Please enter key words for search movie', { icon: false });
    }
    setSearchParams({ searchWord });
    setSearchWord('');
  };

  // movies.map(({ id, title, release_date }) => {
  //   return console.log(id, title, Date.parse(release_date));
  // });

  return (
    <Wrapper>
      <Searchbar
        value={searchWord}
        onChange={onChange}
        SearchOnSubmit={onSubmit}
      />
      <ToastContainer
        autoClose={1500}
        transition={Zoom}
        theme="colored"
        style={{ top: '1px' }}
      />
      {isLoading && (
        <Loader>
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        </Loader>
      )}
      {movies.length > 0 && <MoviesList movies={movies} />}
      {error && <Text>{error}</Text>}
    </Wrapper>
  );
};

export default Movies;
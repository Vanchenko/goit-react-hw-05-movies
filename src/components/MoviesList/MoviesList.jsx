import { Link, useLocation } from 'react-router-dom';
import { Wrapper, LinkWrapper, MoviesTitle } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <Wrapper>
      {movies.map(({ id, title, release_date }) => (
        <LinkWrapper key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <MoviesTitle>{title} ({release_date})
            </MoviesTitle>
          </Link>
        </LinkWrapper>
      ))}
    </Wrapper>
  );
};

//({ release_date });
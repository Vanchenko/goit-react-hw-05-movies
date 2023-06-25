import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { loadCastFilm } from 'api/api';
import { Wrapper, Profile, ProfilePhoto } from './Cast.styled'
import PropTypes from 'prop-types';

const Cast = () => {
  const { id } = useParams();
  const [castInfo, setCastInfo] = useState([]);

  useEffect(() => {
    loadCastFilm(id)
      .then(resp => {
        setCastInfo(resp.data.cast);
      })
      .catch(error => {
        console.log(error.message);
      });
  }, [id]);

  if (castInfo.length === 0) {
    return (
      <div>
        <p>We don`t have any cast for this movie.</p>
      </div>
    );
  }

  return (
    <>
      <Wrapper>
        {castInfo.map(({ id, name, character, profile_path }) => (
          <Profile key={id}>
            <ProfilePhoto
              src={`https://image.tmdb.org/t/p/w300/${profile_path}`}
              alt="Actor photo"
              width="100px"
            />
            <p>{name}</p>
            <p>Character: {character}</p>
          </Profile>
        ))}
      </Wrapper>
    </>
  );
};

export default Cast;

Cast.protoType = {
  id: PropTypes.number.isRequired,
  castInfo: PropTypes.array.isRequired,
  loadCastFilm: PropTypes.func.isRequired,
}.isRequired;

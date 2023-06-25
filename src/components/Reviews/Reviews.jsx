import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { loadReviewsFilm } from 'api/api';
import { TextReviews } from './Reviews.styled';

const Reviews = () => {
  const { id } = useParams();
  const [reviewInfo, setReviewInfo] = useState([]);

  useEffect(() => {
    loadReviewsFilm(id)
      .then(resp => {
        setReviewInfo(resp.data.results);
      })
      .catch(error => {
        console.log(error.message);
      });
  }, [id]);

  if (reviewInfo.length === 0) {
    return (
      <div>
        <p>We don`t have any reviews for this movie.</p>
      </div>
    );
  }
  return (
    <>
      <ul>
        {reviewInfo.map(({ id, author, content }) => (
          <TextReviews key={id}>
            <h3>{author}</h3>
            <p>{content}</p>
          </TextReviews>
        ))}
      </ul>
    </>
  );
};

export default Reviews;

Reviews.protoType = {
  id: PropTypes.number.isRequired,
  reviews: PropTypes.array.isRequired,
  getReviews: PropTypes.func.isRequired,
}.isRequired;

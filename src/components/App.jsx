import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { CommonLayout } from './CommonLayout/CommonLayout';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MoviesDetails = lazy(() => import('../pages/MoviesDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
//const NotFound = lazy(() => import('../pages/Notfound'));

export const App = () => {

  return (
    <Routes>
      <Route path="/" element={<CommonLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      {/* <Route path="*" element={<NotFound />} /> */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

//main file

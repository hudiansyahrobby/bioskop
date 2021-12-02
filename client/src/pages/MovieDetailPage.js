import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import axios from 'axios';
import movieTrailer from 'movie-trailer';
import Container from '../components/Container';
import Layout from '../components/Layout';
import MovieTop from '../components/MovieTop';
import Pills from '../components/Pill/Pills';
import Producer from '../components/Producer';
import Stars from '../components/Stars';
import StoryLine from '../components/StoryLine';
import Video from '../components/Video';

export default function MovieDetailPage() {
  const dispatch = useDispatch();
  const [movie, setMovie] = useState([]);

  const { id } = useParams();

  const URLAPI = `https://api.themoviedb.org/3/movie/${id}?api_key=66077410754413f120dc3ac016897999&language=en-US`;
  useEffect(() => {
    axios
      .get(URLAPI)
      .then((response) => {
        movieTrailer(response.data.title).then((trailer) => {
          const movieData = {
            ...response.data,
            video: trailer,
          };
          setMovie(movieData);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch, URLAPI]);

  console.log('MOVIE', movie);
  const releasedYear = movie?.release_date?.split('-')[0];

  return (
    <Layout>
      <div className='mt-32'>
        <Container>
          <React.Fragment key={id}>
            <div className='flex justify-center flex-col sm:flex-row'>
              <div className='mr-4'>
                <MovieTop
                  image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  title={movie.original_title}
                />
              </div>
              <div className='ml-4'>
                <div className='content text-center sm:text-left mt-4'>
                  <h2 className='text-gray-600 text-xl font-extrabold'>
                    {movie.original_title?.toUpperCase()}
                  </h2>
                </div>
                <Stars rating={movie.vote_average} />
                <Producer year={releasedYear} runtime={movie?.runtime} />

                <Pills data={movie.genres} />
              </div>
            </div>

            <StoryLine overview={movie.overview} />
            <Video video={movie.video} />
          </React.Fragment>
          );
        </Container>
      </div>
    </Layout>
  );
}

import axios from 'axios';
import Image from 'next/image';
import ReviewForm from '../../components/review-form/review-form';
import styles from './index.module.css';

export function Movie({ film, reviews }) {
  const IMAGE_PATH = 'https://image.tmdb.org/t/p/';
  console.log(film);
  return (
    <div className={`${styles['movie-details']} ${styles['flex']}`}>
      <div className={`${styles['movie']} ${styles['flex']}`}>
        <div className={styles['movie-poster']}>
          <Image
            src={`${IMAGE_PATH}w500${film.poster_path}`}
            className={`${styles['movie-img']}`}
            alt="Movie poster"
            layout="fill"
          />
        </div>
        <div className={styles['details-text']}>
          <h1>{film.title}</h1>
          <h3>
            <em>{film.tagline}</em>
          </h3>
          <h5>Popularity (daily): {film.popularity} votes</h5>
          <div className={`${styles['genres']} ${styles['flex']}`}>
            {film.genres.map((genre) => {
              return (
                <p key={genre.id}>
                  <em>{genre.name}</em>
                </p>
              );
            })}
          </div>
          <p>{film.overview}</p>
        </div>
        <ReviewForm movie={film} />
      </div>
      <div className={`${styles['review-list']} ${styles['flex']}`}>
        <h3>Local Reviews</h3>
        {reviews.data.map((review) => {
          return (
            <div key={review._id} className={styles['review-details']}>
              <h4>
                {review.name} - {review.movieTitle}
              </h4>
              <p>
                <b>Created:</b> <em>{review.createdAt}</em>
              </p>
              <p>
                <b>Rating:</b> {review.ratings}
              </p>
              <p>
                <b>Description: </b>
                {review.review}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// get movie data and reviews
export async function getServerSideProps(context) {
  // movie data with specific id
  const id = context.query.movie;
  const API_KEY = process.env.MOVIE_API_KEY;
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
  );

  // reviews
  const review = await axios.get(
    'http://localhost:4200/api/controller/specific'
  );

  return {
    props: {
      film: response.data,
      reviews: review.data,
    },
  };
}
export default Movie;

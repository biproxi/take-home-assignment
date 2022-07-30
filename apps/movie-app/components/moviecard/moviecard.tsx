import Image from 'next/image';
import Link from 'next/link';
import styles from './moviecard.module.css';

export function Moviecard({ movie }) {
  const IMAGE_PATH = 'https://image.tmdb.org/t/p/w500/';
  return (
    <Link key={movie.id} href={`/movie/${movie.id.toString()}`}>
      <div key={movie.id} id={movie.id} className={styles['movieCard']}>
        <div className={styles['movie-container']}>
          {movie.poster_path ? (
            <Image
              src={`${IMAGE_PATH}${movie.poster_path}`}
              className={`${styles['movie-img']} img-thumbnail`}
              alt="Movie poster"
              layout="fill"
            />
          ) : null}
        </div>
        <h5>{movie.title}</h5>
      </div>
    </Link>
  );
}

export default Moviecard;

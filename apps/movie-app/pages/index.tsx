import axios from 'axios';
import Moviecard from '../components/moviecard/moviecard';
import styles from './index.module.css';

export function Index({ banner, top, discover }) {
  const IMAGE_PATH = `https://image.tmdb.org/t/p/w1280`;

  return (
    <div className={`${styles.page} ${styles.flex}`}>
      <div className={styles.introWrapper}>
        <div
          className={`${styles.introWrapper} row`}
          style={{
            backgroundImage: `url(${IMAGE_PATH}${banner.backdrop_path})`,
          }}
        >
          <div className={`${styles['intro-text']} ${styles['flex']} col-sm`}>
            <h1>{banner.original_title}</h1>
            <p>{banner.overview}</p>
          </div>
          <div className="intro-space col"></div>
        </div>
      </div>
      <div className={styles['top-rated']}>
        <h2>Top Rated</h2>
        <div className={styles.top}>
          {top.results.slice(0, 4).map((movie) => {
            return <Moviecard key={movie.id} movie={movie} />;
          })}
        </div>
      </div>
      <div className={styles.discover}>
        <h2>Trending</h2>
        <div className={`${styles.showcase}`}>
          {discover.results.slice(0, 12).map((movie) => {
            return <Moviecard key={movie.id} movie={movie} />;
          })}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const API_KEY = process.env.MOVIE_API_KEY;

  const bannerData = await axios.get(
    `https://api.themoviedb.org/3/movie/616037?api_key=${API_KEY}`
  );
  const topData = await axios.get(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`
  );
  const disData = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`
  );

  return {
    props: {
      banner: bannerData.data,
      top: topData.data,
      discover: disData.data,
    },
  };
}

export default Index;

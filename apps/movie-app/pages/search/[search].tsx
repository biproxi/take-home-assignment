import axios from 'axios';
import Moviecard from '../../components/moviecard/moviecard';
import styles from './index.module.css';

export function Search({ film }) {
  console.log(film);
  return (
    <div className={styles['container']}>
      <h1>Search Results</h1>
      <div className={styles['result-query']}>
        {film.total_results > 0
          ? film.results.map((movie) => {
              return <Moviecard key={movie.id} movie={movie} />;
            })
          : 'No results'}
      </div>
    </div>
  );
}

// get movie data
export async function getServerSideProps(context) {
  const id = context.params.search;
  const API_KEY = process.env.MOVIE_API_KEY;
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${id}`
  );

  return {
    props: {
      film: response.data,
    },
  };
}
export default Search;

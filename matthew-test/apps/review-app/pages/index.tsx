import axios from 'axios';
import Moviecard from '../components/MovieCard';
import Banner from '../components/Banner';

export function Index({ discover }) {
  return (
    <div>
      {/* <h1 className=" text-4xl font-bold text-white underline">Hello World</h1> */}
      <p className="text-2xl text-white">This is a test</p>
      <div className="  mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className=" aspect-auto mt-7 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {discover.results.slice(0, 12).map((movie) => {
            return <Moviecard key={movie.id} movie={movie} />;
          })}
        </div>
        {/* <Banner/> */}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const API_KEY = process.env.MOVIE_API_KEY;
  const disData = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`
  );

  return {
    props: {
      discover: disData.data,
    },
  };
}

export default Index;

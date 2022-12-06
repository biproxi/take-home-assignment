import axios from 'axios';
import Image from 'next/image';
import ReviewForm from '../../components/ReviewForm';


//we need to declare type for the props

export function Movie({  film }) {
  const src_image = 'https://image.tmdb.org/t/p/';
  return (
<div className= 'bg-gray-100 mx-auto py-2'>' 
      <div className= 'flex flex-col items-center justify-center'>'
        <div className = '  mx-auto flex flex-col items-center justify-center shadow-lg shadow-black'>
          <Image
            src={`${src_image}w500${film.poster_path}`}
           className = 'rounded-lg shadow-lg shadow-black'
            alt="Movie poster"
            width={500}
            height={750}
          />
        </div>
        <div className=' pt-4 font-semibold text-2xl text-center'>
          <h1>{film.title}</h1>
          <h3>
            <p className= ' text-base font-medium text-slate-400 '>{film.tagline}</p>
          </h3>
          <p className =' text-base font-black font-mono '>Release Date: {film.release_date}</p>
     <p className = ' font-semibold text-lg text-slate-400 '>Overview: {film.overview}</p>
        </div>
        <ReviewForm movie={film} />
      </div>
 
    </div>
  );
}


export async function getServerSideProps (context) {
  const id  = context.query.movie;
  const API_KEY = process.env.MOVIE_API_KEY;
  const movie = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
  );

  const review = await axios.get(
    'http://localhost:4200/api/controller/singleItem',
  );

  return {
    props: {
      film: movie.data,
      reviews: review.data,
    },
  };
}
export default Movie;

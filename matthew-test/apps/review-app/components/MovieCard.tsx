import Image from 'next/image';
import Link from 'next/link';

export function MovieCard({ movie }) {
  const src_image = 'https://image.tmdb.org/t/p/w500/';
  return (
    <div className="text-center rounded-lg shadow-lg overflow-hidden aspect-auto">
      <Link key={movie.id} href={`/movie/${movie.id.toString()}`}>
        <div key={movie.id} id={movie.id}>
          <div className=" aspect-auto relative lg:h-[400px] sm:h-[260px] md:h-[300px]  rounded-lg shadow-2xl shadow-black">
            {movie.poster_path ? (
              <Image
                src={`${src_image}${movie.poster_path}`}
                className="rounded-lg"
                alt="movie poster"
                layout="fill"
              />
            ) : null}
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-medium text-gray-900">{movie.title}</h3>
            <p className="mt-1 text-sm text-gray-500">
              Realease Date: {movie.release_date}
            </p>

            <p className="mt-1 text-sm text-gray-500">{movie.vote_average}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default MovieCard;

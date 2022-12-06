import clientPromise from '../lib/mongodb';

export default function Movies({ movies }) {
  return (
    <div>
            <div className=" text-center grid-cols-3 gap-4">

      <h1>Movie Reviews</h1>
        <ul>
          {movies.map((movie) => (
            <li key={movie._id}>
              <h2>{movie.movieTitle}</h2>
              <p>{movie.review}</p>
              <p>{movie.ratings}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}




export async function getServerSideProps() {
  try {
    const client = await clientPromise;
    const db = client.db('test');

    const movies = await db
      .collection('reviews')
      .find({})
      .sort({ name: 1 })
      .limit(20)
      .toArray();

    return {
      props: { movies: JSON.parse(JSON.stringify(movies)) },
    };
  } catch (e) {
    console.error(e);
  }
}

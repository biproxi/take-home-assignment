import Image from "next/image";
import React from "react";
import dbConnect from "../../lib/dbConnect";
import Movie from "../../models/Movie";

// The MovieShow function for the display route displays a particular instance of a movie based on its id in read-only form.
export function MovieShow({movie}) {

  return (
    <div className="grid grid-cols-2 p-5 place-items-center">
      <div className="bg-yellow-400 p-5 m-5">
        <h1 className="text-white text-7xl font-extrabold	text-center">{movie.title}</h1>
        <p className="text-gray-600 text-2xl font-bold text-center">Movie Rating: {movie.movieRating}</p>
        <p className="text-gray-600 text-2xl font-bold text-center">Tagline: {movie.tagline}</p>
        <p className="text-gray-600 text-2xl font-bold text-center">Star Actor: {movie.starActor}</p>
        <p className="text-gray-600 text-2xl font-bold text-center">Created At: {movie.createdAt}</p>
        <p className="text-gray-600 text-2xl font-bold text-center">Updated At: {movie.updatedAt}</p>
      </div>
      <Image src={movie.imageUrl} alt={`${movie.title}`} width={500} height={500}></Image>
    </div>
  )
}

// getServerSideProps allows us to use server-side rendering to display a Movie's data based on its id.  The function returns props that can be used in our TSX to render a particular movie.
export async function getServerSideProps({ params }) {
  await dbConnect()

  const movie = await Movie.findById(params.id).lean()
  movie._id = movie._id.toString()

  // In order for the app to not error out, you need to convert the timestamp datatype in MongoDb to a string.  Even if you do not render the timestamp on the page, it will error out if it is not converted to a string.
  movie.createdAt = movie.createdAt.toString()
  movie.updatedAt = movie.updatedAt.toString()

  return { props: { movie } }
}

export default MovieShow

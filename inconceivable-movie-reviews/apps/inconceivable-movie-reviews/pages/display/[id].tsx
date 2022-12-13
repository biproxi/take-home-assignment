import Image from "next/image";
import React from "react";
import dbConnect from "../../lib/dbConnect";
import Movie from "../../models/Movie";

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

export async function getServerSideProps({ params }) {
  await dbConnect()

  const movie = await Movie.findById(params.id).lean()
  movie._id = movie._id.toString()
  movie.createdAt = movie.createdAt.toString()
  movie.updatedAt = movie.updatedAt.toString()

  return { props: { movie } }
}

export default MovieShow

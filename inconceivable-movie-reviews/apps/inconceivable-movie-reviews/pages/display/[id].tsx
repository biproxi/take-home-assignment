import Image from "next/image";
import React from "react";
import dbConnect from "../../lib/dbConnect";
import Movie from "../../models/Movie";

export function MovieShow({movie}) {

  return (
    <div className="bg-red-600">
      <h1>{movie.title}</h1>
      <Image src={movie.imageUrl} alt={""} width={500} height={500} ></Image>
      <p>Movie Rating: {movie.movieRating}</p>
      <p>Tagline: {movie.tagline}</p>
      <p>Star Actor: {movie.starActor}</p>
      <p>Created At: {movie.createdAt}</p>
      <p>Updated At: {movie.updatedAt}</p>
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

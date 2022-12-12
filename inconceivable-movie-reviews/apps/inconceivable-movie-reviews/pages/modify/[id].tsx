import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Form from "../../components/Form";
import dbConnect from "../../lib/dbConnect";
import Movie from "../../models/Movie";

export function MovieShow({movie}) {
  const router = useRouter()
  const [message, setMessage] = useState('')
  const handleDelete = async () => {
    const movieId = router.query.id

    try {
      await fetch(`/api/movie/${movieId}`, {
        method: 'Delete',
      })
      router.push('/')
    } catch (error) {
      setMessage('Failed to delete the movie.')
    }
  }

  const movieForm = {
    title: movie.title,
    movieRating: movie.movieRating,
    tagline: movie.tagline,
    starActor: movie.starActor,
    imageUrl: movie.imageUrl,
  }

  return (
    <div className="bg-red-600">
      <h1>{movie.title}</h1>
      <Image src={movie.imageUrl} alt={`${movie.title}`} width={500} height={500}></Image>
      <p>Movie Rating: {movie.movieRating}</p>
      <p>Tagline: {movie.tagline}</p>
      <p>Star Actor: {movie.starActor}</p>

      <button className="btn delete" onClick={handleDelete}>
        Delete
      </button>
      <Form formId="edit-movie-form" movieForm={movieForm} forNewMovie={false} />

      {message && <p>{message}</p>}
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

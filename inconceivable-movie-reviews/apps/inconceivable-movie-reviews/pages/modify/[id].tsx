import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Form from "../../components/Form";
import dbConnect from "../../lib/dbConnect";
import Movie from "../../models/Movie";


// This function returns an instance of a movie.  It displays a movieForm that the client can use to update the instance of this particular movie.  The funciton also allows users to delete this particular instance of the movie based on its id.
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
    <div>
      <div className="grid grid-cols-2 p-5 place-items-center">
        <div className="bg-yellow-400 p-5 m-5 flex flex-col justify-center items-center">
          <h1 className="text-white text-7xl font-extrabold	text-center">{movie.title}</h1>
          <p className="text-gray-600 text-2xl font-bold text-center">Movie Rating: {movie.movieRating}</p>
          <p className="text-gray-600 text-2xl font-bold text-center">Tagline: {movie.tagline}</p>
          <p className="text-gray-600 text-2xl font-bold text-center">Star Actor: {movie.starActor}</p>
          <p className="text-gray-600 text-2xl font-bold text-center">Created At: {movie.createdAt}</p>
          <p className="text-gray-600 text-2xl font-bold text-center">Updated At: {movie.updatedAt}</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2" onClick={handleDelete}>
            Delete
          </button>
          <div className="grid y-screen place-items-center">
            <Form formId="edit-movie-form" movieForm={movieForm} forNewMovie={false} />
          </div>
        </div>
        <Image src={movie.imageUrl} alt={`${movie.title}`} width={500} height={500}></Image>
      </div>
      {message && <p>{message}</p>}
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

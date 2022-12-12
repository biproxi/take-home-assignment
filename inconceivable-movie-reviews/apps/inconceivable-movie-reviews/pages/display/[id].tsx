import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
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

  return (
    <div>
      <h1>{movie.title}</h1>
      <Image src={movie.image} alt={""}></Image>
      <p>Movie Rating: {movie.movieRating}</p>
      <p>Tagline: {movie.tagline}</p>
      <p>Star Actor: {movie.starActor}</p>

      <button className="btn delete" onClick={handleDelete}>
              Delete
            </button>

      <h2>Update Movie</h2>
      <form>
        <div>
          Name: <input type="text" name="name" defaultValue={movie.name} />
        </div>
        <div>
          Price: <input type="number" name="price" defaultValue={movie.price} />
        </div>
        <div>
          Description: <input type="text" name="description" defaultValue={movie.description} />
        </div>
        <button type="submit">Update movie</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  )
}

export async function getServerSideProps({ params }) {
  await dbConnect()

  const movie = await Movie.findById(params.id).lean()
  movie._id = movie._id.toString()
  movie.createdAt = ""
  movie.updatedAt = ""

  return { props: { movie } }
}

export default MovieShow

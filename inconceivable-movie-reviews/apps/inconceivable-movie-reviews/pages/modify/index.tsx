import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Form from "../../components/Form";
import dbConnect from "../../lib/dbConnect";
import Movie from "../../models/Movie";

// This function is an index action for all movies that also displays a 'Add Movie' form.
export function Modify (props) {
  const movieForm = {
    title: '',
    movieRating: '',
    tagline: '',
    starActor: '',
    imageUrl: '',
  }

  // Using useState, I created a search filter that can sort through all of movies in an index based on its title!
  const [searchFilter, setSearchFilter] = useState("");

  return(
    <div>
      <nav className="bg-red-500 text-center h-8 p-1 text-white">
        Search filter:{" "}
        <input type="text" value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} list="titles" />
        <datalist id="titles">
          {props.movies.map((movie) => (
            <option key={movie._id}>{movie.title}</option>
          ))}
        </datalist>
      </nav>
      <div className="grid y-screen place-items-center m-3">
        <h1 className="bg-yellow-400 shadow-md rounded px-8 pt-6 pb-8 block text-gray-700 text-sm font-bold mb-2">Add Movie</h1>
        <Form formId="add-movie-form" movieForm={movieForm} />
      </div>
      <div className="grid grid-flow-row sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 ml-24">
      {props.movies
        .filter((movie) => movie.title.toLowerCase().includes(searchFilter))
        .map((movie) => (
          <div key={movie._id} className="p-1">
            <div className="rounded-lg shadow-lg bg-gray-800 max-w-sm p-2">
              <Link href={`/modify/${movie._id}`} className="rounded-lg shadow-lg bg-gray-800 max-w-sm p-2">
                <Image className="rounded-t-lg" src={movie.imageUrl} width={500} height={500} alt={`${movie.title}`}></Image>
                <h2 className="text-white font-bold text-4xl mb-2 text-center">{movie.title}</h2>
                <p className="text-white text-base mb-4 text-center">Tagline: {movie.tagline}</p>
                <p className="text-white text-base mb-4 text-center">Star Actor: {movie.starActor}</p>
                <p className="text-white text-base mb-4 text-center">Rating: {movie.movieRating}</p>
                <p className="text-white text-base mb-4 text-center">Created At: {movie.createdAt}</p>
                <p className="text-white text-base mb-4 text-center">Updated At: {movie.updatedAt}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// getServerSideProps allows us to use server-side rendering to display each movie's data.  The function returns props that can be used in our TSX to render a list of all movies.
export async function getServerSideProps() {
  await dbConnect()

  const result = await Movie.find({})
    const movies = result.map((doc) => {
      const movie = doc.toObject()
      movie._id = movie._id.toString()

      // In order for the app to not error out, you need to convert the timestamp datatype in MongoDb to a string.  Even if you do not render the timestamp on the page, it will error out if it is not converted to a string.
      movie.createdAt = movie.createdAt.toString()
      movie.updatedAt = movie.updatedAt.toString()
      return movie
    })
    return {props: {movies: movies}}
}

export default Modify

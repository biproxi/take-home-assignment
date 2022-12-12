import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Form from "../../components/Form";
import dbConnect from "../../lib/dbConnect";
import Movie from "../../models/Movie";

export function Modify (props) {
  const movieForm = {
    title: '',
    movieRating: '',
    tagline: '',
    starActor: '',
    imageUrl: '',
  }

  const [searchFilter, setSearchFilter] = useState("");

  return(
    <div className="">
      <nav className="bg-gray-500 text-center h-8 p-1">
        Search filter:{" "}
        <input type="text" value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} list="titles" />
        <datalist id="titles">
          {props.movies.map((movie) => (
            <option key={movie._id}>{movie.title}</option>
          ))}
        </datalist>
      </nav>
      {props.movies
        .filter((movie) => movie.title.toLowerCase().includes(searchFilter))
        .map((movie) => (
          <div key={movie._id} className="flex justify-center p-5">
            <div className="rounded-lg shadow-lg bg-white max-w-sm p-2">
              <Image className="rounded-t-lg" src={movie.imageUrl} width={500} height={500} alt={`${movie.title}`}></Image>
              <h2 className="text-gray-900 text-xl font-medium mb-2">{movie.title}</h2>
              <p className="text-gray-700 text-base mb-4">Tagline: {movie.tagline}</p>
              <p className="text-gray-700 text-base mb-4">Star Actor: {movie.starActor}</p>
              <p className="text-gray-700 text-base mb-4">Rating: {movie.movieRating}</p>
              <Link type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" href={`/modify/${movie._id}`} >More Info</Link>
            </div>
          </div>
        ))}
      <Form formId="add-movie-form" movieForm={movieForm} />
    </div>
  )
}

export async function getServerSideProps() {
  await dbConnect()

  const result = await Movie.find({})
    const movies = result.map((doc) => {
      const movie = doc.toObject()
      movie._id = movie._id.toString()
      movie.createdAt = movie.createdAt.toString()
      movie.updatedAt = movie.updatedAt.toString()
      return movie
    })
    return {props: {movies: movies}}
}

export default Modify

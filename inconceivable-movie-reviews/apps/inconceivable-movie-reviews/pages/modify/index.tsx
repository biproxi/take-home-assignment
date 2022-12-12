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
    image_url: '',
  }

  const [searchFilter, setSearchFilter] = useState("");

  return(
    <div className="row">
      Search filter:{" "}
      <input type="text" value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} list="titles" />
      <datalist id="titles">
        {props.movies.map((movie) => (
          <option key={movie.id}>{movie.title}</option>
        ))}
      </datalist>
      {props.movies
        .filter((movie) => movie.title.toLowerCase().includes(searchFilter))
        .map((movie) => (
          <div key={movie.id} className="flex justify-center bg-red-600">
            <h2 className="text-gray-900 text-xl font-medium mb-2">{movie.title}</h2>
            <Image className="rounded-t-lg" src={movie.imageURL} width={0} height={0} alt={""}></Image>
            <p className="text-gray-700 text-base mb-4">Tagline: {movie.tagline}</p>
            <p className="text-gray-700 text-base mb-4">Star Actor: {movie.starActor}</p>
            <p className="text-gray-700 text-base mb-4">Rating: {movie.movieRating}</p>
            <Link type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" href={`/display/${movie.id}`} >More Info</Link>
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
      movie.createdAt = ""
      movie.updatedAt = ""
      return movie
    })
    return {props: {movies: movies}}
}

export default Modify

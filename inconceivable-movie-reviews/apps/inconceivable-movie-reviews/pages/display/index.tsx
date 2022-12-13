import React, { useState } from "react";
import Image from "next/image";
import dbConnect from "../../lib/dbConnect";
import Movie from "../../models/Movie";
import Link from "next/link";

export function Display(props) {
  const [searchFilter, setSearchFilter] = useState("");
  return(
    <div className="">
      <nav className="bg-red-500 text-center h-8 p-1 text-white">
        Search filter:{" "}
        <input type="text" value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} list="titles" className="shadow border rounded text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
        <datalist id="titles">
          {props.movies.map((movie) => (
            <option key={movie._id}>{movie.title}</option>
          ))}
        </datalist>
      </nav>
      <div className="grid grid-flow-row sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 ml-24">
      {props.movies
        .filter((movie) => movie.title.toLowerCase().includes(searchFilter))
        .map((movie) => (
          <div key={movie._id} className="p-5">
            <div className="rounded-lg shadow-lg bg-gray-800 max-w-sm p-2">
              <Link href={`/display/${movie._id}`} className="rounded-lg shadow-lg bg-gray-800 max-w-sm p-2">
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

export default Display

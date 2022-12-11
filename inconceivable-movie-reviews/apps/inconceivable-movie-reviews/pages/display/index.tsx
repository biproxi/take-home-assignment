import React, { useState } from "react";
import Image from "next/image";
import dbConnect from "../../lib/dbConnect";
import Movie from "../../models/Movie";

export function Display(props) {
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
        .filter((movie) => movie.name.toLowerCase().includes(searchFilter))
        .map((movie) => (
          <div key={movie.id}>
            <h2>{movie.title}</h2>
            <Image src={movie.image} alt={""}></Image>
            <p>{movie.tagline}</p>
            <p>{movie.starActor}</p>
            <p>{movie.movieRating}</p>
            {/* <button onClick={() => props.onSelectProduct(product)} className="btn btn-info">
              More info
            </button> */}
          </div>
        ))}
    </div>
  )
}

export async function getServerSideProps() {
  await dbConnect()

  const result = await Movie.find({})
    const movies = result.map((doc) => {
      const movie = doc.toObject()
      movie._id = movie._id.toString()
      return movie
    })
    console.log(movies)
    return {props: {movies: movies}}
}

export default Display

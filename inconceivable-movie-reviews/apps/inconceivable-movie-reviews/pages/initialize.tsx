import React from "react";
import Form from "../components/Form";

export function Initialize (props) {
  const movieForm = {
    title: '',
    movieRating: '',
    tagline: '',
    starActor: '',
    imageUrl: '',
  }
  return(
    <div className="">
      <div className="grid y-screen place-items-center m-3">
        <h1 className="bg-yellow-400 shadow-md rounded px-8 pt-6 pb-8 block text-gray-700 text-sm font-bold mb-2">Add Movie</h1>
        <Form formId="add-movie-form" movieForm={movieForm} />
      </div>
    </div>
  )
}

export default Initialize

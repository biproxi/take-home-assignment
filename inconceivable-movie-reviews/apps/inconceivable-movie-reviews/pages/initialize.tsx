import React from "react";
import Form from "../components/Form";

// This page is only intended to be used when someone is intially setting up their app locally.  Sure, they could always create the documents directly in the MongoDb database, but I personally found that this leads to error.  If attributes are misnamed in a document or if the collections name is wrong or if the collection is stored in the wrong database, the app will not function because there is no data for it to function.  The modify page is intended to be where users create data.  I believe that adding this page that stands on its own was a simple way of ensuring that any user could easily use the app.
export function Initialize() {
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

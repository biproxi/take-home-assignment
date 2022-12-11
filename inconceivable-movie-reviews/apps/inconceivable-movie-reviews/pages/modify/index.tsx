import React from "react";
import Form from "../../components/Form";

export function Modify() {
  const movieForm = {
    title: '',
    movieRating: '',
    tagline: '',
    starActor: '',
    image_url: '',
  }
  return <Form formId="add-movie-form" movieForm={movieForm} />
}

export default Modify

import mongoose from 'mongoose'

// The Movie model is the M in MVC architecture.  It defines a mongoose.Schema that helps standardize the data that we PUT, POST, PATCH, or DELETE across our app.  This model is used everywhere a movie is used in the frontend.
const MovieSchema = new mongoose.Schema({

  title: {
    /* The name of this movie */
    type: String,
    required: [true, 'Please provide a title for this movie.'],
    maxlength: [60, 'Title cannot be more than 60 characters.'],
  },

  tagline: {
    /* The tagline of this movie */
    type: String,
    required: [true, "Please provide the movie's tagline."],
    maxlength: [200, "The movie's tagline cannot be more than 200 characters."],
  },

  starActor: {
    /* The star actor of your movie */
    type: String,
    required: [true, 'Please specify the star actor of the movie.'],
    maxlength: [40, 'The actor name specified cannot be more than 40 characters.'],
  },

  imageUrl: {
    /* The image url of your movie */
    type: String,
    required: [true, 'Please specify the image you want to use for the movie.']  },

  movieRating: {
    /* Movie's rating, if applicable */
    type: String,
  },
},

// Timestamps creates a createdAt and updatedAt attribute for each document that is created.
  {timestamps: true})

// This line exports our model to be used across the application.
export default mongoose.models.Movie || mongoose.model('Movie', MovieSchema)

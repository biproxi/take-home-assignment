import mongoose from 'mongoose'

// enum MovieRating {
//   FiveStars = '*****',
//   FourStars = '****',
//   ThreeStars = '***',
//   TwoStars = '**',
//   OneStar = '*',
//   Terrible = '👎'
// }

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
  movieRating: {
    /* Movie's rating, if applicable */

    type: String,
  },
  createdAt: {
    /* Movie's created at time, if applicable */

    type: Number,
  },
  lastUpdatedAt: {
    /* Movie's last time updated at, if applicable */

    type: Number,
  },
},

  {timestamps: true})

export default mongoose.models.Movie || mongoose.model('Movie', MovieSchema)

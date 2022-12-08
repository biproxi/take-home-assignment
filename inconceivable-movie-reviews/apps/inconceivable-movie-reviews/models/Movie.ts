import mongoose from 'mongoose'

enum MovieRating {
  FiveStars = '*****',
  FourStars = '****',
  ThreeStars = '***',
  TwoStars = '**',
  OneStar = '*',
  Terrible = '👎'
}

const MovieSchema = new mongoose.Schema({
  title: String,
  tagline: String,
  starActor: String,
  rating: MovieRating,
  lastUpdatedAt: Number,
  createdAt: Number,
})

module.exports = mongoose.models.Movie || mongoose.model('Movie', MovieSchema)

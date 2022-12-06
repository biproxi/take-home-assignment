import { Schema, model, models } from 'mongoose';

const reviewSchema = new Schema({
  name: { type: String, required: true },
  movieId: {
    type: String,
  },
  movieTrailer: {
    type: String,
  },
  reviewId: {
    type: String,
  },
  review: {
    type: String,
  },

  movieTitle: {
    type: String,
  },
  ratings: { type: String, required: true },
  review: {
    type: String,
  },
  createdAt: { type: Date },
  modified: { type: Boolean },
  madifiedAt: { type: Date },
});

const Review = models.Review || model('Review', reviewSchema);

export default Review;

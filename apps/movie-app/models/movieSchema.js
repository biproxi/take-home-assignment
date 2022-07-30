import { Schema, model, models } from 'mongoose';

const reviewSchema = new Schema({
  name: { type: String, required: true },
  movieId: {
    type: String,
  },
  movieTitle: {
    type: String,
  },
  ratings: { type: String, required: true },
  review: {
    type: String,
    maxlength: [250, 'Description cannot be more than 250 characters'],
  },
  createdAt: { type: Date },
  modifiedAt: { type: Date },
  modified: { type: Boolean },
});

const Review = models.Review || model('Review', reviewSchema);

export default Review;
